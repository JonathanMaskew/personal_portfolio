'use client';

let lockCount = 0;
let savedScrollY = 0;

export function lockBodyScroll() {
  if (typeof window === 'undefined') return;
  if (lockCount === 0) {
    const b = document.body;
    const html = document.documentElement;

    savedScrollY = window.scrollY || document.documentElement.scrollTop || 0;

    b.style.position = 'fixed';
    b.style.top = `-${savedScrollY}px`;
    b.style.left = '0';
    b.style.right = '0';
    b.style.width = '100%';
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

    b.style.position = '';
    b.style.top = '';
    b.style.left = '';
    b.style.right = '';
    b.style.width = '';
    b.style.overflow = '';
    html.style.overscrollBehavior = '';

    const y = Math.abs(parseInt(`${savedScrollY}`, 10)) || 0;
    window.scrollTo(0, y);
  }
}

