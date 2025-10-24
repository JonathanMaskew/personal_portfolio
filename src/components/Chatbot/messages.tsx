'use client';

import { useEffect, useRef } from 'react';
import type { AnimationItem, LottiePlayer } from 'lottie-web';
import { ChatSession, useChatSession } from '@/hooks/useChatSession';

type MessagesProps = {
  session?: ChatSession;
};

export default function Messages({ session }: MessagesProps) {
  // Always call hooks unconditionally; prefer prop session when provided
  const fallbackSession = useChatSession();
  const chatSession = session ?? fallbackSession;
  const { messages, isLoading, error, clearError } = chatSession;
  const listRef = useRef<HTMLDivElement | null>(null);
  const lottieRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, isLoading]);

  // Initialize Lottie animation for the thinking indicator when loading
  useEffect(() => {
    if (!isLoading || !lottieRef.current) return;

    let disposed = false;
    let anim: AnimationItem | undefined;

    const load = async () => {
      try {
        const mod = await import('lottie-web');
        if (disposed || !lottieRef.current) return;
        const lottie = mod.default as LottiePlayer;
        anim = lottie.loadAnimation({
          container: lottieRef.current,
          renderer: 'svg',
          loop: true,
          autoplay: true,
          path: '/ai_thinking.json',
          rendererSettings: {
            preserveAspectRatio: 'xMidYMid meet',
          },
        });
      } catch (e) {
        // If lottie fails to load, quietly fall back to no animation
        console.warn('Failed to load lottie-web', e);
      }
    };

    load();
    return () => {
      disposed = true;
      try {
        anim?.destroy();
      } catch {
        // ignore
      }
    };
  }, [isLoading]);

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
            <div
              ref={lottieRef}
              className="h-16 w-16"
              aria-label="Thinking animation"
            />
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
