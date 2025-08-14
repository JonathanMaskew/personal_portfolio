import { Icon } from '@/types';
import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  texts: {
    icon?: Icon;
    text: string;
  }[];
  speed?: number;
  delay?: number;
}

export function useTypewriter({
  texts,
  speed = 100,
  delay = 3000,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!texts || Object.keys(texts).length === 0) return;

    const text = Object.values(texts)[currentIndex].text;

    if (isTyping) {
      if (currentTextIndex < text.length) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev + text[currentTextIndex]);
          setCurrentTextIndex((prev) => prev + 1);
        }, speed);

        return () => clearTimeout(timeout);
      } else {
        // Finished typing
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, delay);

        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting text
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText((prev) => prev.slice(0, -1));
        }, speed / 2);

        return () => clearTimeout(timeout);
      } else {
        // Finished deleting, start typing again
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1 < texts.length ? prev + 1 : 0));
        setCurrentTextIndex(0);
      }
    }
  }, [
    texts,
    speed,
    delay,
    currentTextIndex,
    currentIndex,
    isTyping,
    displayText,
  ]);

  return { currentIndex, displayText };
}
