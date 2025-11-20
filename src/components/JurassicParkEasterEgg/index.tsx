import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { lockBodyScroll, unlockBodyScroll } from '@/utils/scrollLock';

interface JurassicParkEasterEggProps {
  onClose: () => void;
}

// Reusable retro window component
interface RetroWindowProps {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

function RetroWindow({ title, onClose, children, className = '' }: RetroWindowProps) {
  return (
    <div className={`relative border-4 border-gray-500 rounded-2xl shadow-2xl overflow-hidden flex flex-col ${className}`}>
      {/* Header */}
      <div className="bg-gray-300 px-4 py-2 flex justify-between items-center border-b-4 border-gray-500">
        <div className="font-bold text-black text-lg">
          {title}
        </div>
        <button
          onClick={onClose}
          className="text-black hover:bg-red-500 hover:text-white p-1 rounded transition-colors"
        >
          <X size={24} />
        </button>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}

export default function JurassicParkEasterEgg({
  onClose,
}: JurassicParkEasterEggProps) {
  const [input, setInput] = useState('');
  const [logs, setLogs] = useState<string[]>([
    'Jurassic Park, Security Systems Interface',
    'Version 4.0.5, Alpha E',
    'Ready...',
    'Password required to access security',
  ]);
  const [locked, setLocked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    logsEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [logs]);

  useEffect(() => {
    lockBodyScroll();
    return () => {
      unlockBodyScroll();
    };
  }, []);

  const handleAccess = () => {
    if (locked) return;
    setLocked(true);

    const newLogs = [...logs, `> ${input}`, 'access: PERMISSION DENIED...and...'];
    setLogs(newLogs);

    let count = 0;
    const spamInterval = setInterval(() => {
      setLogs((prev) => [...prev, "YOU DIDN'T SAY THE MAGIC WORD!"]);
      count++;
      if (count > 20) {
        clearInterval(spamInterval);
        setShowVideo(true);
      }
    }, 100);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl shadow-2xl p-4 font-mono">
      <RetroWindow
        title="Central Park Control Console"
        onClose={onClose}
        className="w-full max-w-3xl h-[600px]"
      >
        {/* Terminal Screen */}
        <div className="flex-1 bg-black p-6 overflow-y-auto text-green-400 text-lg font-bold font-mono">
          <div className="flex flex-col gap-1">
            {logs.map((log, i) => (
              <div key={i}>{log}</div>
            ))}
            <div ref={logsEndRef} />
          </div>

          {!locked && (
            <div className="mt-4 flex items-center gap-2">
              <span>&gt;</span>
              <input
                type="password"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleAccess()}
                className="bg-transparent border-none outline-none text-green-400 w-full font-mono"
                autoFocus
                placeholder="Enter anything..."
              />
            </div>
          )}
        </div>

        {/* Footer / Controls */}
        <div className="bg-gray-800 p-4 border-t-4 border-gray-500 flex justify-end">
          <button
            onClick={handleAccess}
            disabled={locked}
            className={`px-4 py-2 font-bold text-lg transition-all border-2 ${
              locked
                ? 'bg-red-900 border-red-700 text-red-300 !cursor-not-allowed'
                : 'bg-blue-600 border-blue-400 text-white hover:bg-blue-800 hover:border-blue-600'
            }`}
          >
            {locked ? 'SYSTEM LOCKOUT' : 'AUTHENTICATE'}
          </button>
        </div>
      </RetroWindow>

      {/* Video Modal - appears after spam sequence */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center shadow-2xl p-4"
          onClick={() => {
            setShowVideo(false);
            onClose();
          }}
        >
          <RetroWindow
            title="Ah ah ah! You didn't say the magic word!"
            onClose={() => {
              setShowVideo(false);
              onClose();
            }}
            className="w-full max-w-2xl"
          >
            <div className="aspect-video w-full relative">
              <iframe
                src="https://www.youtube.com/embed/g_vZasFzMN4?si=A-c_Z1fI4QlJJUIl&autoplay=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1"
                title="You didn't say the magic word!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full pointer-events-none"
              />
            </div>
          </RetroWindow>
        </div>
      )}
    </div>,
    document.body
  );
}
