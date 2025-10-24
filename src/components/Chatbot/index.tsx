'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowUp, Sparkles, X } from 'lucide-react';
import { useHoverPressHandlers } from '@/hooks/useHoverPressHandlers';
import Messages from '@/components/Chatbot/messages';
import { useChatSession } from '@/hooks/useChatSession';

export default function Chatbot() {
  const session = useChatSession();
  const { sendMessage, isLoading } = session;

  const [draft, setDraft] = useState('');
  // Single source of truth for whether the widget is expanded
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

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

  const handleBlur = () => {
    // keep open until user explicitly closes
  };

  const shouldShowMessages = isOpen;

  const handleDismiss = () => {
    setIsOpen(false);
    setDraft('');
  };

  // Match modal close-button hover/press behavior
  const {
    onPointerEnter: onCloseEnter,
    onPointerLeave: onCloseLeave,
    onPointerDown: onCloseDown,
    onPointerUp: onCloseUp,
    onPointerCancel: onCloseCancel,
  } = useHoverPressHandlers<HTMLButtonElement>(
    (el) => {
      (el as HTMLButtonElement).style.backgroundColor = '#FF6B18';
    },
    (el) => {
      (el as HTMLButtonElement).style.backgroundColor = '#ffffff1A';
    }
  );

  const formElement = (
    <form
      onSubmit={handleSubmit}
      className="flex items-center gap-2 rounded-2xl ring-1 ring-white/10 backdrop-blur-lg bg-[var(--background)]/30 px-4 py-2 pr-2 w-full"
    >
      <Sparkles size={20} className="text-[#FF6B18]" aria-hidden />
      <input
        ref={inputRef}
        className="w-full bg-transparent text-sm outline-none placeholder:text-white/60"
        value={draft}
        placeholder="Ask AI about my experience…"
        onFocus={() => setIsOpen(true)}
        onBlur={handleBlur}
        onChange={(event) => setDraft(event.target.value)}
        disabled={isLoading}
        aria-label="Ask a question"
      />
      <button
        type="submit"
        className="flex min-h-8 min-w-8 items-center justify-center rounded-full text-white disabled:text-black"
        disabled={!draft.trim() || isLoading}
        style={{
          backgroundColor: draft.trim() ? '#FF6B18' : `${'#FF6B18'}40`,
        }}
      >
        <ArrowUp aria-hidden />
      </button>
    </form>
  );

  // Open state - full chat widget
  if (shouldShowMessages) {
    return (
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 ml-4 mt-4 md:ml-6 md:mt-6 flex flex-col w-fit md:w-1/3 xl:w-1/4 max-w-7xl h-1/2 rounded-2xl bg-[var(--background)]/30 p-4 gap-3 justify-between ring-1 ring-white/10 backdrop-blur-lg">
        {/* Header */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Sparkles size={18} aria-hidden />
            <span className="font-bold text-base">Ask AI</span>
          </div>
          <button
            type="button"
            onClick={handleDismiss}
            className="rounded-full p-1 text-white transition-all duration-200 backdrop-blur-2xl"
            style={{ backgroundColor: '#ffffff1A' }}
            onPointerEnter={onCloseEnter}
            onPointerLeave={onCloseLeave}
            onPointerDown={onCloseDown}
            onPointerUp={onCloseUp}
            onPointerCancel={onCloseCancel}
          >
            <X size={18} className="text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto">
          <Messages session={session} />
        </div>

        {/* Input Form */}
        {formElement}
      </div>
    );
  }

  // Collapsed state - mobile shows just button, desktop shows input
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 ml-4 mt-4 md:ml-6 md:mt-6 flex flex-col w-fit md:w-1/3 xl:w-1/4 max-w-7xl">
      {/* Mobile: Just the button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="md:hidden flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-white/60 ring-1 ring-white/10 backdrop-blur-lg bg-[var(--background)]/30"
        aria-label="Open chat"
      >
        <Sparkles className="h-4 w-4 text-[#FF6B18]" aria-hidden />
        <span>Ask AI</span>
      </button>

      {/* Desktop: Input form */}
      <div className="hidden md:flex">{formElement}</div>
    </div>
  );
}
