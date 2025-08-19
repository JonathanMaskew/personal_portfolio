'use client';
import { X } from 'lucide-react';
import { useEffect, useState } from 'react';

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

  if (!open) return;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[var(--background)]/60 backdrop-blur-2xl overscroll-contain transition-opacity duration-300 ${
        isAnimating ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={onCloseCallback}
    >
      <div
        className={`absolute left-6 right-6 top-6 md:left-12 md:right-12 md:top-12 bottom-0 rounded-t-2xl max-w-5xl mx-auto transition-transform duration-350 ease-out ${
          isAnimating ? 'translate-y-0' : 'translate-y-full'
        }`}
        style={{
          background: `${color}80`,
          // boxShadow: `0 0 0 1px ${color}`,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-6 top-6 z-10 rounded-full bg-white/20 w-fit h-fit p-1 hover:bg-white group transition-all duration-200"
          onClick={onCloseCallback}
        >
          <X size={24} className="text-white group-hover:text-black" />
        </button>
        <div className="h-full overscroll-contain p-6 md:p-12">{children}</div>
      </div>
    </div>
  );
}
