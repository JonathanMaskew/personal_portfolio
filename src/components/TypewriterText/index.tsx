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
  cursorClassName?: string;
  size?: number;
}

export default function TypewriterText({
  texts,
  speed = 100,
  delay = 3000,
  cursorClassName = 'text-orange-500',
  size = 32,
}: TypewriterTextProps) {
  const typewriter = useTypewriter({ texts, speed, delay });
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(interval);
  }, []);

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
        className={`${cursorClassName} ${showCursor && typewriter.displayText.length > 0 ? 'opacity-100' : 'opacity-0'} rounded-full w-[3px] h-full transition-opacity duration-150`}
      />
    </div>
  );
}
