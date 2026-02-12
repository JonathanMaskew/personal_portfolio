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
  size?: number;
}

export default function TypewriterText({
  texts,
  speed = 100,
  delay = 3000,
  size = 24,
}: TypewriterTextProps) {
  const typewriter = useTypewriter({ texts, speed, delay });

  const IconComponent = texts[typewriter.currentIndex].icon;

  return (
    <div
      className="flex items-center"
      style={{ height: `${size}px`, fontSize: `${size}px` }}
    >
      <div className="flex items-center gap-4">
        {typewriter.displayText.length > 0 && IconComponent && (
          <IconComponent size={size + 4} />
        )}
        {typewriter.displayText}
      </div>
      <div
        className="bg-primary rounded-full w-[3px] animate-blink"
        style={{ height: `${size}px` }}
      />
    </div>
  );
}
