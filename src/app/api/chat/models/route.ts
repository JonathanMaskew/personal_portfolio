import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET(_req: NextRequest) {
  const apiKey = process.env.GEMINI_API_KEY?.trim();
  if (!apiKey) {
    return NextResponse.json(
      { error: 'Missing GEMINI_API_KEY' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1/models?key=${apiKey}`
    );
    if (!res.ok) {
      const err = await res.text().catch(() => '');
      return NextResponse.json(
        { error: `ListModels failed (${res.status})`, detail: err },
        { status: 502 }
      );
    }

    const data = (await res.json()) as {
      models?: Array<{ name?: string; supportedGenerationMethods?: string[] }>;
    };
    const models = (data.models ?? []).map((m) => ({
      name: m.name,
      supportsGenerateContent: (m.supportedGenerationMethods || []).includes(
        'generateContent'
      ),
    }));
    return NextResponse.json({ models });
  } catch (e) {
    return NextResponse.json(
      { error: 'ListModels threw', detail: String(e) },
      { status: 500 }
    );
  }
}

