'use client';

import { useTheme } from '@/context/ThemeContext';
import FloatingButton from '@/components/FloatingButton';
import Chatbot from '@/components/Chatbot';
import { ArrowDown, ArrowUp, Undo2 } from 'lucide-react';
import { useHashScroll } from '@/hooks/useHashScroll';
import { useActiveSection } from '@/hooks/useActiveSection';
import { MAIN_NAV_ITEMS } from '@/data/nav';
import { useEffect, useState } from 'react';

export default function FloatingControls() {
  const { theme, setTheme } = useTheme();
  const { scrollToHash } = useHashScroll();
  const [hasScrolledToTop, setHasScrolledToTop] = useState(false);

  const { current } = useActiveSection({
    items: MAIN_NAV_ITEMS,
    activationOffset: 0,
  });

  const showRevert = theme === 'future' || theme === 'past';

  useEffect(() => {
    setHasScrolledToTop(false);
  }, [theme]);

  useEffect(() => {
    if (current.id === 'intro') {
      setHasScrolledToTop(true);
    }
  }, [current]);

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 ml-4 mt-4 md:ml-6 md:mt-6 z-50 flex items-end gap-3">
      {showRevert && (
        <>
          {current.id !== 'intro' && !hasScrolledToTop && (
            <FloatingButton
              onClick={() => {
                setHasScrolledToTop(true);
                scrollToHash('#intro');
              }}
              icon={ArrowUp}
              text="Top"
            />
          )}
          <FloatingButton
            onClick={() => setTheme('default')}
            icon={Undo2}
            text="Reset theme"
          />
        </>
      )}
      <Chatbot />
    </div>
  );
}
