import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, VolumeOff } from 'lucide-react';
import { lockBodyScroll, unlockBodyScroll } from '@/utils/scrollLock';
import { useMobile } from '@/hooks/useMobile';
import { useHoverPressHandlers } from '@/hooks/useHoverPressHandlers';

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

interface YTPlayer {
  mute: () => void;
  unMute: () => void;
  destroy: () => void;
}

declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    YT: {
      Player: new (
        elementId: string,
        options: {
          events: {
            onReady: (event: { target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
    };
  }
}

function RetroWindow({ title, onClose, children, className = '' }: RetroWindowProps) {
  const {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = useHoverPressHandlers<HTMLButtonElement>(
    (el) => {
      el.style.backgroundColor = '#ef4444';
      el.style.color = 'white';
    },
    (el) => {
      el.style.backgroundColor = '';
      el.style.color = 'black';
    }
  );

  return (
    <div className={`relative border-4 border-gray-500 shadow-2xl overflow-hidden flex flex-col text-xl ${className}`}>
      {/* Header */}
      <div className="bg-gray-300 pl-3 pr-1 py-1 flex justify-between items-center border-b-4 border-gray-500">
        <div className="text-black">
          {title}
        </div>
        <button
          onClick={onClose}
          className="text-black p-1 rounded transition-colors"
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
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
  ]);
  const [locked, setLocked] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const logsEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const playerRef = useRef<YTPlayer | null>(null);
  const { isMobile } = useMobile();

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

  useEffect(() => {
    if (!isMobile && !locked) {
      inputRef.current?.focus();
    }
  }, [isMobile, locked]);

  // Load YouTube IFrame API
  useEffect(() => {
    if (!showVideo) return;

    // Always start muted
    setIsMuted(true);

    const createPlayer = () => {
      playerRef.current = new window.YT.Player('youtube-player', {
        events: {
          onReady: (event) => {
            // Always start muted
            event.target.mute();
          },
        },
      });
    };

    if (window.YT && window.YT.Player) {
      createPlayer();
    } else {
      // Load YouTube API if not loaded
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
      }

      // Create player when API is ready
      window.onYouTubeIframeAPIReady = createPlayer;
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
        playerRef.current = null;
      }
      // Clean up the global callback if it was set by this component
      if (window.onYouTubeIframeAPIReady === createPlayer) {
        window.onYouTubeIframeAPIReady = () => {};
      }
    };
  }, [showVideo]);

  const handleAccess = () => {
    if (locked) return;
    setLocked(true);

    const newLogs = [...logs, `> ${input}`, 'access: PERMISSION DENIED...and...'];
    setLogs(newLogs);

    let count = 0;
    setTimeout(() => {
      const spamInterval = setInterval(() => {
        setLogs((prev) => [...prev, "YOU DIDN'T SAY THE MAGIC WORD!"]);
        count++;
        if (count > 20) {
          setShowVideo(true);
        }
        if (count > 100) {
          clearInterval(spamInterval);
        }
      }, 150);
    }, 500);
  };

  // Handlers for Authenticate Button
  const {
    onPointerEnter: onAuthEnter,
    onPointerLeave: onAuthLeave,
    onPointerDown: onAuthDown,
    onPointerUp: onAuthUp,
    onPointerCancel: onAuthCancel,
  } = useHoverPressHandlers<HTMLButtonElement>(
    (el) => {
      if (!locked) {
        el.style.backgroundColor = '#6b7280'; // gray-500
        el.style.borderColor = '#374151'; // gray-700
      }
    },
    (el) => {
      if (!locked) {
        el.style.backgroundColor = '';
        el.style.borderColor = '';
      }
    }
  );

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-2xl shadow-2xl p-4 font-retro">
      <RetroWindow
        title="Central Park Control Console"
        onClose={onClose}
        className="w-full max-w-2xl h-[450px]"
      >
        {/* Terminal Screen */}
        <div className="relative flex-1 flex flex-col min-h-0 bg-blue-800 font-retro text-white">
          <div className="flex-1 p-4 overflow-y-auto">
            <div className="flex flex-col gap-1">
              {logs.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
              <div ref={logsEndRef} />
            </div>

            {!locked && (
              <div className="mt-6 flex items-center gap-2">
                <span>&gt;</span>
                <input
                  ref={inputRef}
                  type="password"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAccess()}
                  className="bg-transparent border-none outline-none text-white-400 w-full font-retro"
                  placeholder="Enter any password..."
                />
              </div>
            )}
          </div>

          <button
            onClick={handleAccess}
            disabled={locked}
            className={`absolute bottom-4 right-4 px-3 py-1 transition-all border-2 z-10 ${
              locked
                ? 'bg-red-900 border-red-700 text-red-300 !cursor-not-allowed'
                : 'bg-gray-300 border-gray-500 text-black'
            }`}
            onPointerEnter={onAuthEnter}
            onPointerLeave={onAuthLeave}
            onPointerDown={onAuthDown}
            onPointerUp={onAuthUp}
            onPointerCancel={onAuthCancel}
          >
            {locked ? 'SYSTEM LOCKOUT' : 'AUTHENTICATE'}
          </button>
        </div>

      </RetroWindow>

      {/* Video Modal - appears after spam sequence */}
      {showVideo && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4"
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
            className="w-full max-w-lg"
          >
            <div className="aspect-video w-full relative">
              <iframe
                id="youtube-player"
                src="https://www.youtube.com/embed/g_vZasFzMN4?si=A-c_Z1fI4QlJJUIl&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&fs=0&iv_load_policy=3&disablekb=1&playsinline=1&enablejsapi=1"
                title="You didn't say the magic word!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                className="w-full h-full"
              />
              
              {/* Unmute Button - only shows when muted */}
              {isMuted && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                     if (playerRef.current) {
                      playerRef.current.unMute();
                      setIsMuted(false);
                    }
                  }}
                  className="absolute bottom-2 left-2 flex items-center gap-2 rounded-2xl px-4 py-2 text-sm text-white border-1 border-white/10 backdrop-blur-lg bg-[var(--background)]/30 transition-all"
                >
                  <VolumeOff className="h-4 w-4 text-[#FF6B18]" aria-hidden />
                  <span>UNMUTE</span>
                </button>
              )}
            </div>
          </RetroWindow>
        </div>
      )}
    </div>,
    document.body
  );
}
