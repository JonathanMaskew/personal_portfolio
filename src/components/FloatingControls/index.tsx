'use client';

import { useTheme } from '@/context/ThemeContext';
import FloatingButton from '@/components/FloatingButton';
import Chatbot from '@/components/Chatbot';
import { Undo2 } from 'lucide-react';

export default function FloatingControls() {
  const { theme, setTheme } = useTheme();

  const showRevert = theme === 'future' || theme === 'past';

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 ml-4 mt-4 md:ml-6 md:mt-6 z-50 flex items-end gap-3">
      {showRevert && (
        <FloatingButton
          onClick={() => setTheme('default')}
          icon={Undo2}
          text="Revert theming"
        />
      )}
      <Chatbot />
    </div>
  );
}
