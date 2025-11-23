'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { lockBodyScroll, unlockBodyScroll } from '@/utils/scrollLock';
import { createPortal } from 'react-dom';

type ModalProps = {
  open: boolean;
  onCloseCallback: () => void;
  color: string;
  children: React.ReactNode;
};

export default function Modal({
  open,
  onCloseCallback,
  color,
  children,
}: ModalProps) {
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [open]);

  // thanks ChatGPT
  // Lock body scroll only while the modal is open
  useEffect(() => {
    if (!open) return;
    lockBodyScroll();
    return () => {
      unlockBodyScroll();
    };
  }, [open]);

  if (!open) return null;

  const closeButton = (
    <button
      onClick={onCloseCallback}
      className="fixed right-8 top-8 md:right-12 md:top-12 z-[200] rounded-full p-1 transition-all duration-200 bg-foreground/10 hover:bg-[var(--modal-hover-color)] active:bg-[var(--modal-hover-color)]"
      style={{ '--modal-hover-color': color } as React.CSSProperties}
    >
      <X size={24} className="text-foreground" />
    </button>
  );

  return (
    <>
      {createPortal(closeButton, document.body)}
      {createPortal(
        <div
          className={`fixed inset-0 z-[100] backdrop-blur-2xl overscroll-contain transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'} overflow-y-auto overscroll-contain`}
          style={{
            background: color.startsWith('var(')
              ? `radial-gradient(circle at bottom, color-mix(in srgb, ${color} 75%, transparent) 0%, color-mix(in srgb, ${color} 30%, black) 100%)`
              : `radial-gradient(circle at bottom, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
          }}
        >
          <div className="flex justify-center p-6 md:p-12">
            <div
              className={`relative w-full max-w-5xl rounded-t-2xl md:rounded-2xl transition-transform duration-350 ease-out ${isAnimating ? 'translate-y-0' : 'translate-y-full'}`}
              style={{
                background: color.startsWith('var(')
                  ? `radial-gradient(circle at top middle, color-mix(in srgb, ${color} 75%, transparent) 0%, color-mix(in srgb, ${color} 30%, black) 100%)`
                  : `radial-gradient(circle at top middle, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
              }}
            >
              <div className="">{children}</div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
