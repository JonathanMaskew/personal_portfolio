'use client';

import { LucideIcon } from 'lucide-react';

interface FloatingButtonProps {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  icon: LucideIcon;
  text: string;
  className?: string;
}

export default function FloatingButton({
  onClick,
  icon: Icon,
  text,
  className = '',
}: FloatingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`group flex h-fit w-fit items-center gap-2 rounded-2xl px-4 py-2 text-sm border-1 backdrop-blur-lg transition-colors bg-background/30 border-foreground/10 text-foreground/70 hover:bg-primary hover:text-foreground hover:border-primary active:bg-primary active:text-foreground active:border-primary ${className}`}
      aria-label={text}
    >
      <Icon className="h-4 w-4 text-primary group-hover:text-foreground group-active:text-foreground transition-colors" />
      <span>{text}</span>
    </button>
  );
}
