'use client';
import { useState, useCallback, useEffect } from 'react';

export function useModal() {
  const [modalOpened, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useEffect(() => {
    if (!modalOpened) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };

    // Store current scroll position and body styles
    const scrollY = window.scrollY;
    const bodyStyle = window.getComputedStyle(document.body);
    const prevPosition = bodyStyle.position;
    const prevTop = bodyStyle.top;
    const prevWidth = bodyStyle.width;

    // Use position: fixed instead of overflow: hidden for Safari compatibility
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);

      // Restore body styles
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.width = prevWidth;

      // Restore scroll position
      window.scrollTo(0, scrollY);
    };
  }, [modalOpened, closeModal]);

  return { modalOpened, openModal, closeModal };
}
