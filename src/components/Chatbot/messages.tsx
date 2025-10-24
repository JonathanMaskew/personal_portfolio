'use client';

import { useEffect, useRef } from 'react';
import { ChatSession, useChatSession } from '@/hooks/useChatSession';

type MessagesProps = {
  session?: ChatSession;
};

export default function Messages({ session }: MessagesProps) {
  const chatSession = session ?? useChatSession();
  const { messages, isLoading, error, clearError } = chatSession;
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isLoading]);

  return (
    <div className="flex flex-col gap-4 text-xs h-full">
      <div
        ref={listRef}
        className="h-full overflow-y-auto flex min-h-0 flex-col gap-3"
      >
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex px-1 ${
              message.role === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            <div
              className="rounded-2xl px-3 py-2 text-white ring-1 ring-white/10 whitespace-pre-wrap"
              style={{
                backgroundColor:
                  message.role === 'user' ? `${'#000000'}90` : `${'#FF6B18'}90`,
              }}
            >
              {message.content}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-center w-full h-16">
            <video
              className=""
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/ai_searching.webm" type="video/webm" />
            </video>
          </div>
        )}
      </div>

      {error && (
        <div className="text-xs text-red-400">
          {error}{' '}
          <button
            type="button"
            className="underline"
            onClick={() => clearError()}
          >
            Dismiss
          </button>
        </div>
      )}
    </div>
  );
}
