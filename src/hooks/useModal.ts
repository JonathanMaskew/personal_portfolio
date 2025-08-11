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

    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('keydown', onKey);
    };
  }, [modalOpened, closeModal]);

  return { modalOpened, openModal, closeModal };
}
