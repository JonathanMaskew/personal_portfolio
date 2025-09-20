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

  useEffect(() => {
    if (open) {
      setIsAnimating(true);
    } else {
      setIsAnimating(false);
    }
  }, [open]);

  const {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = useHoverPressHandlers<HTMLButtonElement>(
    (el) => {
      (el as HTMLButtonElement).style.backgroundColor = color;
    },
    (el) => {
      (el as HTMLButtonElement).style.backgroundColor = '#ffffff1A';
    }
  );

  if (!open) return null;

  const closeButton = (
    <button
      className="fixed right-8 top-8 md:right-12 md:top-12 z-[200] rounded-full w-fit h-fit p-1 group transition-all duration-200 backdrop-blur-2xl"
      onClick={onCloseCallback}
      style={{
        backgroundColor: '#ffffff1A',
      }}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <X size={24} className="text-white" />
    </button>
  );

  return (
    <>
      {createPortal(closeButton, document.body)}
      {createPortal(
        <div
          className={`fixed inset-0 z-[100] backdrop-blur-2xl overscroll-contain transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'} overflow-y-auto overscroll-contain`}
          style={{
            background: `radial-gradient(circle at bottom, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
          }}
        >
          <div className="flex justify-center p-6 md:p-12">
            <div
              className={`relative w-full max-w-5xl rounded-t-2xl md:rounded-2xl transition-transform duration-350 ease-out ${isAnimating ? 'translate-y-0' : 'translate-y-full'}`}
              style={{
                background: `radial-gradient(circle at top middle, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
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
