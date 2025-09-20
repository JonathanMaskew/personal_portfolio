'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useHoverPressHandlers } from '@/hooks/useHoverPressHandlers';
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

  useEffect(() => setIsAnimating(open), [open]);

  const {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = useHoverPressHandlers<HTMLButtonElement>(
    (el) => ((el as HTMLButtonElement).style.backgroundColor = color),
    (el) => ((el as HTMLButtonElement).style.backgroundColor = '#ffffff1A')
  );

  if (!open) return null;

  return (
    <>
      {createPortal(
        <button
          className="fixed right-8 top-8 md:right-12 md:top-12 z-[200] rounded-full w-fit h-fit p-1 group transition-all duration-200 backdrop-blur-2xl"
          onClick={onCloseCallback}
          style={{
            backgroundColor: '#ffffff1A',
            top: 'calc(2rem + env(safe-area-inset-top))',
          }}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
        >
          <X size={24} className="text-white" />
        </button>,
        document.body
      )}

      {createPortal(
        <div className="fixed inset-0 z-[100]">
          <div
            className="pointer-events-none fixed left-0 top-0 w-screen h-[100dvh] backdrop-blur-2xl"
            style={{
              background: `radial-gradient(circle at bottom, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
            }}
          />

          <div
            className={`fixed left-0 top-0 w-screen h-[100dvh] overflow-y-auto overscroll-contain transition-opacity duration-300 ${
              isAnimating ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="min-h-[100dvh] flex justify-center p-6 md:p-12">
              <div
                className={`relative w-full max-w-5xl rounded-t-2xl md:rounded-2xl transition-transform duration-350 ease-out ${
                  isAnimating ? 'translate-y-0' : 'translate-y-full'
                }`}
              >
                <div className="pb-[calc(1.25rem+env(safe-area-inset-bottom))]">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
