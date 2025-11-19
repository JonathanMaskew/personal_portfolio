'use client';

let lockCount = 0;


let activePreventTouchMove: ((e: TouchEvent) => void) | null = null;

export function lockBodyScroll(targetElement?: HTMLElement | null) {
  if (typeof window === 'undefined') return;
  if (lockCount === 0) {
    const b = document.body;
    const html = document.documentElement;

    b.style.overflow = 'hidden';
    html.style.overscrollBehavior = 'none';

    activePreventTouchMove = (e: TouchEvent) => {
      if (targetElement) {
        let el = e.target as HTMLElement;
        let isInside = false;
        
        // Check if the touch target is within the allowed container
        while (el && el !== document.body) {
          if (el === targetElement) {
            isInside = true;
            break;
          }
          el = el.parentElement as HTMLElement;
        }

        if (isInside) {
          return;
        }
      }
      
      if (e.cancelable) {
        e.preventDefault();
      }
    };

    document.addEventListener('touchmove', activePreventTouchMove, { passive: false });
  }
  lockCount += 1;
}

export function unlockBodyScroll() {
  if (typeof window === 'undefined') return;
  if (lockCount === 0) return;
  lockCount -= 1;
  if (lockCount === 0) {
    const b = document.body;
    const html = document.documentElement;

    b.style.overflow = '';
    html.style.overscrollBehavior = '';

    if (activePreventTouchMove) {
      document.removeEventListener('touchmove', activePreventTouchMove);
      activePreventTouchMove = null;
    }
  }
}

