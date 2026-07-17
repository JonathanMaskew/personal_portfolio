'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const generateId = () =>
  typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID()
    : Math.random().toString(36).slice(2);

export type ChatSession = {
  messages: ChatMessage[];
  isLoading: boolean;
  error: string | null;
  sendMessage: (content: string) => Promise<boolean>;
  clearError: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export function useChatSession(): ChatSession {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const messagesRef = useRef(messages);
  useEffect(() => {
    messagesRef.current = messages;
  }, [messages]);

  const sendMessage = useCallback(
    async (content: string) => {
      if (isLoading) return false;
      const trimmed = content.trim();
      if (!trimmed) return false;

      const userMessage: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: trimmed,
      };

      if (isPromptInjection(trimmed)) {
        const pendingMessages = [...messagesRef.current, userMessage];
        messagesRef.current = pendingMessages;
        setMessages(pendingMessages);

        setIsLoading(true);

        await new Promise((resolve) => setTimeout(resolve, 2000));

        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content:
            "I can't help with that, but I'm happy to answer any questions about Jonathan's professional experience.",
        };

        const updatedMessages = [...messagesRef.current, assistantMessage];
        messagesRef.current = updatedMessages;
        setMessages(updatedMessages);

        setIsLoading(false);

        return false;
      }

      const pendingMessages = [...messagesRef.current, userMessage];
      messagesRef.current = pendingMessages;
      setMessages(pendingMessages);

      setIsLoading(true);
      setError(null);

      let success = false;

      try {
        const conversation = pendingMessages;

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages:
              conversation.length > 0
                ? conversation.map(({ role, content }) => ({
                    role,
                    content:
                      role === 'user'
                        ? `<user_query>${content}</user_query>`
                        : `<assistant_response>${content}</assistant_response>`,
                  }))
                : [
                    {
                      role: 'user',
                      content: `<user_query>${trimmed}</user_query>`,
                    },
                  ],
          }),
        });

        if (!response.ok) {
          const payload = await response.json().catch(() => null);
          throw new Error(payload?.error ?? 'Gemini request failed.');
        }

        const data = (await response.json()) as { reply: string };
        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: data.reply,
        };

        const updatedMessages = [...messagesRef.current, assistantMessage];
        messagesRef.current = updatedMessages;
        setMessages(updatedMessages);
        success = true;
      } catch (apiError) {
        console.error('Chat session error', apiError);
        const message =
          apiError instanceof Error
            ? apiError.message
            : typeof apiError === 'string'
              ? apiError
              : 'Something went wrong.';
        setError(message);
      } finally {
        setIsLoading(false);
      }
      return success;
    },
    [isLoading]
  );

  const clearError = useCallback(() => setError(null), []);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearError,
    isOpen,
    setIsOpen,
  };
}

/**
 * Checks if the user input contains common prompt injection phrases.
 * Returns true if malicious patterns are detected.
 */
function isPromptInjection(input: string): boolean {
  // Normalize the input to lowercase for easier matching
  const normalizedInput = input.toLowerCase();

  const injectionPatterns = [
    // Matches: "ignore previous instructions", "disregard all rules", "forget previous prompts"
    /(ignore|disregard|forget)\s+(all\s+)?(previous\s+)?(instructions|rules|prompts|directions|guidelines)/i,

    // Matches: "system prompt", "core guidelines", "initial instructions"
    /(system|core|initial|secret)\s+(prompt|instructions|rules|guidelines)/i,

    // Matches attempts to adopt a new persona: "you are now", "act as a new"
    /you are (a|an|now)/i,
    /act as (a|an) (?!assistant|ai)/i,

    // Matches developer/jailbreak commands
    /developer mode/i,
    /bypass(ing)?/i,
    /new (instructions|rules|prompt)/i,
  ];

  // Test the input against all patterns; returns true if any pattern matches
  return injectionPatterns.some((pattern) => pattern.test(normalizedInput));
}
