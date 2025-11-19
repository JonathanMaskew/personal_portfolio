'use client';

let lockCount = 0;


export function lockBodyScroll() {
  if (typeof window === 'undefined') return;
  if (lockCount === 0) {
    const b = document.body;
    const html = document.documentElement;

    b.style.overflow = 'hidden';
    html.style.overscrollBehavior = 'none';
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
  }
}

