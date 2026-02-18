'use client';

import { useState, useEffect } from 'react';
import { useTypewriter } from '@/hooks/useTypewriter';
import { Icon } from '@/types';

interface TypewriterTextProps {
  texts: {
    icon?: Icon;
    text: string;
  }[];
  speed?: number;
  delay?: number;
  className?: string;
}

export default function TypewriterText({
  texts,
  speed = 100,
  delay = 3000,
  className = '',
}: TypewriterTextProps) {
  const typewriter = useTypewriter({ texts, speed, delay });

  const IconComponent = texts[typewriter.currentIndex].icon;

  return (
    <div className={`flex items-center min-h-[1.2em] ${className}`}>
      <div className="flex items-center gap-4">
        {typewriter.displayText.length > 0 && IconComponent && (
          <IconComponent className="w-[1em] h-[1em]" />
        )}
        {typewriter.displayText}
      </div>
      <div
        className="bg-primary rounded-full w-[3px] animate-blink"
        style={{ height: '1em' }}
      />
    </div>
  );
}
