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
      className={`fixed inset-0 z-[100] bg-[var(--background)]/60 backdrop-blur-2xl overscroll-contain`}
      onClick={onCloseCallback}
    >
      <div
        className="absolute left-6 right-6 top-6 md:left-12 md:right-12 md:top-12 bottom-0 rounded-t-xl max-w-5xl mx-auto"
        style={{
          background: `${color}70`,
          boxShadow: `0 0 0 1px ${color}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-6 top-6 z-10 rounded-full bg-white/20 w-fit h-fit p-1 backdrop-blur-xs"
          onClick={onCloseCallback}
        >
          <X size={24} color="white" />
        </button>
        <div className="h-full overflow-y-auto overscroll-contain p-6 md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
