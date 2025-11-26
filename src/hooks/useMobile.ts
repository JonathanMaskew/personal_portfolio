'use client';

import { useState, useEffect } from 'react';

// Initialize with actual values if window is available (client-side)
// This prevents the race condition on mount
const getInitialMobile = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth < 768;
  }
  return false; // SSR fallback
};

const getInitialLandscape = () => {
  if (typeof window !== 'undefined') {
    return window.innerWidth > window.innerHeight;
  }
  return false; // SSR fallback
};

export function useMobile() {
  const [isLandscape, setIsLandscape] = useState(getInitialLandscape);
  const [isMobile, setIsMobile] = useState(getInitialMobile);

  useEffect(() => {
    const checkOrientation = () => {
      // Check if mobile (screen width < 768px)
      const isMobileDevice = window.innerWidth < 768;
      setIsMobile(isMobileDevice);

      // Check if landscape
      const isLandscapeOrientation = window.innerWidth > window.innerHeight;
      setIsLandscape(isLandscapeOrientation);
    };

    // Check on mount (in case window size changed)
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
