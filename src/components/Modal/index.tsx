'use client';
import { X } from 'lucide-react';

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
  if (!open) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/40 ${color ? 'backdrop-blur-sm' : 'backdrop-blur-2xl'} overscroll-contain touch-none`}
      onClick={onCloseCallback}
    >
      <div
        className="absolute left-6 right-6 top-6 md:left-12 md:right-12 md:top-12 bottom-0 rounded-t-xl max-w-5xl mx-auto"
        style={{
          backgroundImage: `
          linear-gradient(
            to top,
            ${color},
            color-mix(in srgb, ${color} 35%, black)
          )
        `,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-6 top-6 z-10 rounded-full bg-white/20 w-fit h-fit p-1"
          onClick={onCloseCallback}
        >
          <X size={24} color="white" />
        </button>
        <div className="h-full overflow-y-auto overscroll-contain touch-auto p-6 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
