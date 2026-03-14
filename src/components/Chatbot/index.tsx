'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, Sparkles, X } from 'lucide-react';
import { useMobile } from '@/hooks/useMobile';
import ChatMessages from './ChatMessages';
import { lockBodyScroll, unlockBodyScroll } from '@/utils/scrollLock';
import { useSharedChatSession } from '@/context/ChatSessionContext';
import FloatingButton from '@/components/Button/FloatingButton';

type ChatbotProps = {
  /** 'inline' renders only the input bar (for the Hero section).
   *  'floating' renders the floating button/input (for bottom-right controls). */
  mode?: 'inline' | 'floating';
};

export default function Chatbot({ mode = 'inline' }: ChatbotProps) {
  const session = useSharedChatSession();
  const { sendMessage, isLoading, isOpen, setIsOpen } = session;

  const [draft, setDraft] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { isMobile } = useMobile();

  useEffect(() => {
    if (isOpen && !isMobile && !isLoading) {
      inputRef.current?.focus();
    }
  }, [isOpen, isMobile, isLoading]);

  useEffect(() => {
    if (!isOpen || !isMobile) return;
    lockBodyScroll();
    return () => {
      unlockBodyScroll();
    };
  }, [isOpen, isMobile]);

  const submitDraft = useCallback(
    async (value: string) => {
      const trimmed = value.trim();
      if (!trimmed) return false;
      return sendMessage(trimmed);
    },
    [sendMessage]
  );

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isLoading) return;
    const currentDraft = draft;
    setDraft('');
    setIsOpen(true);
    const succeeded = await submitDraft(currentDraft);
    if (!succeeded) {
      setDraft(currentDraft);
      inputRef.current?.focus();
    }
  };

  const onCloseCallback = () => {
    setIsOpen(false);
    setDraft('');
  };

  const inlineFormClasses =
    'flex items-center gap-3 rounded-2xl bg-foreground/10 px-4 py-3 pr-2 w-full transition-all duration-200 hover:bg-foreground/20';

  const floatingFormClasses =
    'flex items-center gap-3 rounded-2xl border-1 border-foreground/10 backdrop-blur-lg bg-background/30 px-4 py-2 pr-2 w-full';

  const formElement = (
    <form
      onSubmit={handleSubmit}
      className={
        mode === 'inline' && !isOpen ? inlineFormClasses : floatingFormClasses
      }
    >
      <Sparkles size={24} className="text-primary" aria-hidden />
      <input
        ref={inputRef}
        className="w-full bg-transparent text-[16px] outline-none placeholder:text-foreground/70"
        value={draft}
        placeholder="Ask AI about my experience…"
        onFocus={() => {
          if (mode !== 'inline') setIsOpen(true);
        }}
        onChange={(event) => setDraft(event.target.value)}
        disabled={isLoading}
        aria-label="Ask a question"
      />
      <button
        type="submit"
        className="flex min-h-8 min-w-8 items-center justify-center rounded-full text-foreground disabled:text-black"
        disabled={!draft.trim() || isLoading}
        style={{
          backgroundColor: 'var(--color-primary)',
          opacity: draft.trim() ? '1' : '0.4',
        }}
      >
        <ArrowUp aria-hidden />
      </button>
    </form>
  );

  // Open state - full chat widget (same modal regardless of mode)
  if (isOpen) {
    return (
      <div className="fixed bottom-3 inset-x-3 md:inset-x-auto md:right-3 md:w-1/2 lg:w-1/3 h-2/3 rounded-2xl bg-background z-40 flex flex-col overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.45)] border-1 border-foreground/10">
        <button
          className="absolute right-4 top-4 z-50 rounded-full w-fit h-fit p-1 grouop transition-all duration-200 backdrop-blur-2xl bg-foreground/10 hover:bg-[var(--color-primary)] active:bg-[var(--color-primary)]"
          onClick={onCloseCallback}
        >
          <X size={24} className="text-foreground" />
        </button>

        <div className="flex-1 min-h-0 overflow-y-auto" data-chat-scroller>
          <ChatMessages session={session} />
        </div>

        <div className="absolute bottom-4 inset-x-4">{formElement}</div>
      </div>
    );
  }

  // ── Collapsed states differ by mode ──

  if (mode === 'inline') {
    // Hero: just the input bar, no floating button
    // Always render the inline input visibly underneath the opened modal
    return <div className="w-full">{formElement}</div>;
  }

  // If floating mode and already open, don't show the floating duplicate element
  if (isOpen) return null;

  // Floating mode: mobile shows button, desktop shows input
  return (
    <>
      {/* Mobile: Just the button */}
      <FloatingButton
        onClick={() => setIsOpen(true)}
        className="md:hidden"
        icon={Sparkles}
        text="Ask AI"
        aria-label="Open chat"
      />

      {/* Desktop: Input form */}
      <div className="hidden md:flex md:w-[50vw] lg:w-[33vw] flex-grow">
        {formElement}
      </div>
    </>
  );
}
