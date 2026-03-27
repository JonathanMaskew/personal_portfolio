// this file was never used
// and therefore never reviewed
// it was written by AI

'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@/types';

interface FadeInTextProps {
  texts: {
    icon?: Icon;
    text: string;
  }[];
  delay?: number;
  className?: string;
}

export default function FadeInText({
  texts,
  delay = 4000,
  className = '',
}: FadeInTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, delay);

    return () => clearInterval(intervalId);
  }, [texts.length, delay]);

  const currentItem = texts[currentIndex];
  const IconComponent = currentItem?.icon;

  return (
    <div
      className={`flex items-center min-h-[1.3em] justify-center ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={{
            visible: { transition: { staggerChildren: 0.05 } },
            hidden: {},
            exit: { opacity: 0, transition: { duration: 0.3 } },
          }}
          className="flex items-center gap-4"
        >
          {IconComponent && (
            <motion.div
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { duration: 0.3 } },
              }}
            >
              <IconComponent className="w-[1em] h-[1em]" />
            </motion.div>
          )}
          <div className="flex">
            {currentItem?.text.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { duration: 0.3 } },
                }}
                style={{ whiteSpace: 'pre' }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
