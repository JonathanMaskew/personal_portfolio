import { NextRequest, NextResponse } from 'next/server';
import { systemPrompt } from '@/data/chatContext';
import {
  GoogleGenerativeAI,
  type EnhancedGenerateContentResponse,
  type GenerateContentResponse,
  type GenerateContentResult,
  type GenerateContentCandidate,
  type Content,
  type Part,
} from '@google/generative-ai';

export const runtime = 'nodejs';

type ChatRole = 'user' | 'assistant';

type IncomingMessage = {
  role: ChatRole;
  content: string;
};

const normalizeModel = (name?: string | null) =>
  (name || '').replace(/^models\//, '').trim();

const MODEL_CANDIDATES = Array.from(
  new Set(
    [
      normalizeModel(process.env.GEMINI_MODEL),
      // Prefer the newest text models first
      'gemini-2.5-flash',
      'gemini-2.5-pro',
      'gemini-2.5-flash-lite',
      // Solid 2.0 fallbacks
      'gemini-2.0-flash-001',
      'gemini-2.0-flash',
      'gemini-2.0-flash-lite-001',
      'gemini-2.0-flash-lite',
      // Last resorts
      'gemini-1.5-flash-latest',
      'gemini-1.5-flash',
    ].filter(Boolean)
  )
) as string[];

const DEFAULT_GENERATION_CONFIG = {
  temperature: 0.7,
  topK: 40,
  topP: 0.95,
  maxOutputTokens: 512,
};

const isMissingModelError = (error: unknown) => {
  const message =
    error instanceof Error ? error.message.toLowerCase() : String(error);
  const status = (error as { status?: number })?.status;
  const fromResponse = (error as { response?: { status?: number } })?.response
    ?.status;
  const httpStatus = status ?? fromResponse;

  return (
    httpStatus === 404 ||
    message.includes('not found') ||
    message.includes('unsupported') ||
    message.includes('no longer available')
  );
};

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.GEMINI_API_KEY?.trim();
    if (!apiKey) {
      console.error('GEMINI_API_KEY is not set');
      return NextResponse.json(
        { error: 'Server misconfiguration: missing Gemini API key.' },
        { status: 500 }
      );
    }

    const body = await request.json();
    const messages: IncomingMessage[] | undefined = body?.messages;

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: 'Request must include at least one message.' },
        { status: 400 }
      );
    }

    const contents: Content[] = messages.map((message) => ({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content }],
    }));

    const latestUserMessage = [...messages]
      .reverse()
      .find((message) => message.role === 'user')
      ?.content.trim();

    const conversationWithCue: Content[] = latestUserMessage
      ? [
          ...contents,
          {
            role: 'user',
            parts: [
              {
                text: latestUserMessage,
              },
            ],
          },
        ]
      : contents;

    const client = new GoogleGenerativeAI(apiKey);

    let sawEmptyResponse = false;

    const extractReply = (
      response: EnhancedGenerateContentResponse | GenerateContentResponse
    ) => {
      let reply = '';
      // Prefer EnhancedGenerateContentResponse.text() when available
      if ('text' in response && typeof response.text === 'function') {
        try {
          const maybe = (response as EnhancedGenerateContentResponse).text();
          if (typeof maybe === 'string') {
            reply = maybe.trim();
          }
        } catch (error) {
          console.warn('Gemini text() extraction failed', error);
        }
      }

      if (!reply && Array.isArray(response?.candidates)) {
        for (const candidate of response.candidates as GenerateContentCandidate[]) {
          const parts: Part[] = candidate?.content?.parts ?? [];
          const joined = parts
            .map((part) =>
              typeof part === 'object' && part !== null && 'text' in part &&
              typeof (part as { text?: unknown }).text === 'string'
                ? String((part as { text: string }).text).trim()
                : ''
            )
            .filter(Boolean)
            .join('\n')
            .trim();
          if (joined) {
            reply = joined;
            break;
          }
        }
      }

      const blocked = Boolean(
        response?.promptFeedback?.blockReason ||
          (response?.candidates ?? []).some((candidate) => {
            const reason = (candidate as GenerateContentCandidate)?.finishReason;
            return (
              typeof reason === 'string' &&
              reason.toLowerCase().includes('safety')
            );
          })
      );

      return { reply, blocked };
    };

    for (const modelName of MODEL_CANDIDATES) {
      try {
        const model = client.getGenerativeModel({
          model: modelName,
          systemInstruction: systemPrompt,
        });
        let attemptContents = conversationWithCue;
        let triedSingleMessage = false;

        while (true) {
          const result: GenerateContentResult = await model.generateContent({
            contents: attemptContents,
            generationConfig: DEFAULT_GENERATION_CONFIG,
          });
          const resp = result.response;
          const { reply, blocked } = extractReply(resp);

          if (reply) {
            return NextResponse.json({ reply });
          }

          if (!triedSingleMessage && latestUserMessage) {
            triedSingleMessage = true;
            attemptContents = [
              {
                role: 'user',
                parts: [{ text: latestUserMessage }],
              },
            ];
            continue;
          }

          if (blocked) {
            return NextResponse.json({
              reply:
                "I couldn't answer that one just now. Could you try rephrasing your question about Jonathan's work or projects?",
            });
          }

          sawEmptyResponse = true;
          console.warn(
            `Gemini produced an empty response using model "${modelName}".`,
            JSON.stringify(resp ?? null)
          );
          break;
        }
      } catch (error) {
        if (isMissingModelError(error)) {
          console.warn(
            `Gemini model "${modelName}" is not available for this key.`
          );
          continue;
        }

        const errObj =
          error instanceof Error ? error : new Error(String(error ?? ''));

        console.error('Gemini API error', errObj.message);
        return NextResponse.json({ error: errObj.message }, { status: 502 });
      }
    }

    if (sawEmptyResponse) {
      const fallbackReply =
        "I'm sorry—I wasn't able to generate a reply just now. Could you try again or rephrase your question?";
      console.warn('Gemini returned empty responses for all model candidates.');
      return NextResponse.json({ reply: fallbackReply });
    }

    const fallbackError =
      'No supported Gemini model is enabled for this API key.';
    console.error('Gemini model negotiation failed', fallbackError);
    return NextResponse.json({ error: fallbackError }, { status: 502 });
  } catch (error) {
    console.error('Chat route error', error);
    return NextResponse.json(
      { error: 'Unexpected server error while contacting Gemini.' },
      { status: 500 }
    );
  }
}
