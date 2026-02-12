'use client';

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from 'react';
import type { Experience } from '@/types';
import Modal from '@/components/Modal';
import ExperienceDetails from '@/components/Modal/ExperienceDetails';
import { getJobsData, getMoreJobsData } from '@/data/jobs';
import { getEducationData, getMoreEducationData } from '@/data/education';
import { getFooterData } from '@/data/footer';

interface ModalContextType {
  openExperienceModal: (experienceId: string) => void;
  closeModal: () => void;
  modalOpened: boolean;
  openedExperience: Experience | null;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modalOpened, setModalOpened] = useState(false);
  const [openedExperienceId, setOpenedExperienceId] = useState<string | null>(
    null
  );

  const JOBS = useMemo(() => getJobsData(), []);
  const MORE_JOBS = useMemo(() => getMoreJobsData(), []);
  const EDUCATION = useMemo(() => getEducationData(), []);
  const MORE_EDUCATION = useMemo(() => getMoreEducationData(), []);
  const FOOTER = useMemo(() => getFooterData(), []);

  const allExperiences = useMemo(
    () => [...JOBS, ...MORE_JOBS, ...EDUCATION, ...MORE_EDUCATION, ...FOOTER],
    [JOBS, MORE_JOBS, EDUCATION, MORE_EDUCATION, FOOTER]
  );

  const openedExperience = useMemo(
    () =>
      openedExperienceId
        ? allExperiences.find((exp) => exp.id === openedExperienceId) || null
        : null,
    [openedExperienceId, allExperiences]
  );

  const openExperienceModal = useCallback((id: string) => {
    setOpenedExperienceId(id);
    setModalOpened(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpened(false);
    setOpenedExperienceId(null);
  }, []);

  return (
    <ModalContext.Provider
      value={{ openExperienceModal, closeModal, modalOpened, openedExperience }}
    >
      {children}
      <Modal
        open={modalOpened && !!openedExperience}
        onCloseCallback={closeModal}
        color={openedExperience?.color || ''}
      >
        {openedExperience && <ExperienceDetails data={openedExperience} />}
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModalContext() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
}
