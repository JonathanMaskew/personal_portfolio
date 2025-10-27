'use client';

import { useEffect, useRef } from 'react';
import type { AnimationItem, LottiePlayer } from 'lottie-web';
import { ChatSession, useChatSession } from '@/hooks/useChatSession';
import { Sparkles } from 'lucide-react';

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
    const scroller = listRef.current.closest(
      '[data-chat-scroller]'
    ) as HTMLElement | null;
    const target = scroller ?? listRef.current;
    target.scrollTop = target.scrollHeight;
  }, [messages, isLoading]);

  // Initialize Lottie animation for the thinking indicator when loading
  useEffect(() => {
    if (!isLoading || !lottieRef.current) return;

    let disposed = false;
    let anim: AnimationItem | undefined;

    const load = async () => {
      try {
        // Import the standard build; support both ESM/CJS shapes
        const mod = (await import('lottie-web')) as typeof import('lottie-web');
        const container = lottieRef.current;
        if (disposed || !container) return;
        const lottie = (mod.default ?? (mod as unknown)) as LottiePlayer;
        // Clear previous DOM (hot reloads, repeated loads)
        container.innerHTML = '';
        anim = lottie.loadAnimation({
          container,
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

  const hasUserMessage = messages.some((m) => m.role === 'user');

  return (
    <div
      className={`flex flex-col gap-3 text-sm ${hasUserMessage ? 'px-4' : ''} h-full`}
    >
      {!hasUserMessage ? (
        <div className="overflow-hidden flex items-center justify-center h-full w-full text-white/70 relative">
          <div className="flex flex-col items-center text-center gap-3 pb-[82px] px-8 z-10">
            <Sparkles size={56} strokeWidth={1.5} aria-hidden />
            <p className="text-lg whitespace-pre-wrap">
              {
                "Ask AI about Jonathan's portfolio, including his work, education, projects, skillset, and more!"
              }
            </p>

            <p className="absolute bottom-19 text-[10px]">
              Jonathan <b>cannot</b> see any requests or responses.
            </p>
          </div>

          <div className="blob-field">
            <div className="blob blob--1" aria-hidden />
            <div className="blob blob--2" aria-hidden />
            <div className="blob blob--3" aria-hidden />
            <div className="blob blob--4" aria-hidden />
            <div className="blob blob--5" aria-hidden />
          </div>
        </div>
      ) : (
        <div ref={listRef} className="flex flex-col gap-3 pt-[64px] pb-[82px]">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.role === 'user'
                  ? 'justify-end pl-6 md:pl-8'
                  : 'justify-start pr-6 md:pr-8'
              }`}
            >
              <div
                className="rounded-2xl px-3 py-2 text-white border-1 border-white/10 whitespace-pre-wrap"
                style={{
                  backgroundColor:
                    message.role === 'user' ? '#00000080' : '#FF6B1880',
                }}
              >
                {message.content}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-center w-full h-16 items-center">
              <div
                ref={lottieRef}
                key={isLoading ? 'loading' : 'idle'}
                className="h-16 w-16 pointer-events-none"
                aria-label="Thinking animation"
              />
            </div>
          )}
        </div>
      )}

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
