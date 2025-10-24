'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  content: string;
};

const SYSTEM_GREETING_ID = 'greeting';

const systemGreeting: ChatMessage = {
  id: SYSTEM_GREETING_ID,
  role: 'assistant',
  content:
    "Hi there! Ask me anything about Jonathan's portfolio, experience, education, or projects.",
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
};

export function useChatSession(): ChatSession {
  const [messages, setMessages] = useState<ChatMessage[]>([systemGreeting]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

      const pendingMessages = [...messagesRef.current, userMessage];
      messagesRef.current = pendingMessages;
      setMessages(pendingMessages);

      setIsLoading(true);
      setError(null);

      let success = false;

      try {
        const conversation = pendingMessages.filter(
          (message) => message.id !== SYSTEM_GREETING_ID
        );

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            messages:
              conversation.length > 0
                ? conversation.map(({ role, content }) => ({
                    role,
                    content,
                  }))
                : [
                    {
                      role: 'user',
                      content: trimmed,
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
  };
}
