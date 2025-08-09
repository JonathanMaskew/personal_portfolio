'use client';
import { X } from 'lucide-react';
import { useEffect } from 'react';

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
  if (!open) return;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/40 ${color ? 'backdrop-blur-sm' : 'backdrop-blur-2xl'}`}
      onClick={onCloseCallback}
    >
      <div
        className="absolute inset-12 rounded-t-xl p-12 bottom-0 overflow-y-auto max-w-5xl mx-auto"
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
          className="absolute right-6 top-6 rounded-full bg-white/20 w-fit h-fit p-1"
          onClick={onCloseCallback}
        >
          <X size={24} color="white" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
