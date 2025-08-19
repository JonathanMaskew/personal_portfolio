'use client';

import { useState, useEffect } from 'react';

export function useMobile() {
  const [isLandscape, setIsLandscape] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      // Check if mobile (screen width < 768px)
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);

      // Check if landscape
      const isLandscapeOrientation = window.innerWidth > window.innerHeight;
      setIsLandscape(isLandscapeOrientation);
    };

    // Check on mount
    checkOrientation();

    // Listen for resize events
    window.addEventListener('resize', checkOrientation);

    // Listen for orientation change events
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  return {
    isLandscape,
    isMobile,
    isMobileLandscape: isMobile && isLandscape,
    isMobilePortrait: isMobile && !isLandscape,
  };
}
