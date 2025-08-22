'use client';

import { Sparkles } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Carousel, { CarouselItem } from '../Carousel';
import { useModal } from '@/hooks/useModal';
import { useState } from 'react';
import Modal from '../Modal';
import ExperienceDetails from '@/components/ExperienceDetails';
import { getJobsData } from '@/data/jobs';
import { getEducationData } from '@/data/education';
import HighlightFeature from '../HighlightFeature';
import { getHighlightsData } from '@/data/highlights';

export default function Highlights() {
  const { modalOpened, openModal, closeModal } = useModal();
  const [openedExperienceId, setOpenedExperienceId] = useState<string | null>(
    null
  );

  const EDUCATION = getEducationData();
  const JOBS = getJobsData();
  const openedExperience = openedExperienceId
    ? JOBS.find((job) => job.id === openedExperienceId) ||
      EDUCATION.find((education) => education.id === openedExperienceId)
    : null;
  const carouselItemStyle = 'w-[300px] md:w-[400px]';

  const highlights = getHighlightsData(setOpenedExperienceId, openModal);

  return (
    <SectionWrapper
      icon={Sparkles}
      title="Highlights"
      subtext="Some accomplishments worth noting."
    >
      <Carousel>
        {highlights.map((highlight, index) => (
          <CarouselItem
            key={highlight.id || index}
            className={carouselItemStyle}
          >
            <HighlightFeature
              title={highlight.title}
              imagery={highlight.imagery}
              subtitle={highlight.subtitle}
              body={highlight.body}
              color={highlight.color}
              onClick={
                highlight.experienceId
                  ? () => {
                      setOpenedExperienceId(highlight.experienceId || null);
                      openModal();
                    }
                  : undefined
              }
              actionButton={highlight.highlightChildren}
            />
          </CarouselItem>
        ))}
      </Carousel>
      <Modal
        open={modalOpened && !!openedExperience}
        onCloseCallback={() => {
          setOpenedExperienceId(null);
          closeModal();
        }}
        color={openedExperience?.color || ''}
      >
        {openedExperience && <ExperienceDetails data={openedExperience} />}
      </Modal>
    </SectionWrapper>
  );
}
