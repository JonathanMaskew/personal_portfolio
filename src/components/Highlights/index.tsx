'use client';

import { PillBottle, Plus, Sparkles, SplinePointer } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Carousel, { CarouselItem } from '../Carousel';
import HighlightDetailed from '../HighlightDetailed';
import { Button } from '../Button';

import { useModal } from '@/hooks/useModal';
import { useState } from 'react';
import Modal from '../Modal';
import DetailsModal from '@/components/DetailsModal';
import { JOBS } from '@/data/jobs';
import { EDUCATION } from '@/data/education';
import HighlightFeature from '../HighlightFeature';

export default function Highlights() {
  const { modalOpened, openModal, closeModal } = useModal();
  const [openedJobId, setOpenedJobId] = useState<string | null>(null);
  const [openedEducationId, setOpenedEducationId] = useState<string | null>(
    null
  );
  const openedJob = openedJobId
    ? JOBS.find((job) => job.id === openedJobId) || null
    : null;
  const openedEducation = openedEducationId
    ? EDUCATION.find((education) => education.id === openedEducationId) || null
    : null;
  const carouselItemStyle = 'w-[300px] md:w-[400px]';

  return (
    <SectionWrapper
      icon={Sparkles}
      title="Highlights"
      subtext="Some accomplishments worth noting."
    >
      <Carousel>
        <CarouselItem className={carouselItemStyle}>
          <HighlightFeature
            title="Increased Reliability and Functionality Through Full-Stack Rebuild of ePrescribe"
            imagery={PillBottle}
            subtitle="Software Engineer @ myhELO"
            body="Led a full-stack rebuilding of the e-prescribing infrastructure by rewriting all front-end and back-end files and integrating with third-party APIs, increasing reliability and functionality."
            color="#2396F0"
            onClick={() => {
              setOpenedJobId('myhelo');
              openModal();
            }}
            actionButton={
              <Button
                icon={Plus}
                text="More myhELO"
                color="#2396F0"
                clickDetail={() => {
                  setOpenedJobId('myhelo');
                  openModal();
                }}
              />
            }
          />
        </CarouselItem>
        <CarouselItem className={carouselItemStyle}>
          <HighlightFeature
            title="Revamp Outreach Efforts to Achieve a Nearly 90% Increase in Applicants"
            imagery={SplinePointer}
            subtitle="Design Director @ Hack the Future"
            body="Initiated by a branding refresh, our new handouts, collaborations, events, and revamped social media presence led to a nearly 90% increase in applicants year-over-year, shattering previous records."
            color="#00EB88"
            onClick={() => {
              setOpenedEducationId('htf-design-director');
              openModal();
            }}
            actionButton={
              <Button
                icon={Plus}
                text="More Hack the Future"
                clickDetail={() => {
                  setOpenedEducationId('htf-design-director');
                  openModal();
                }}
              />
            }
          />
        </CarouselItem>
      </Carousel>
      <Modal
        open={modalOpened && (!!openedJob || !!openedEducation)}
        onCloseCallback={() => {
          setOpenedJobId(null);
          setOpenedEducationId(null);
          closeModal();
        }}
        color={
          (openedJob && openedJob.bgColor ? openedJob.bgColor : '') ||
          (openedEducation && openedEducation.color
            ? openedEducation.color
            : '')
        }
      >
        {openedJob && <DetailsModal data={openedJob} />}
        {openedEducation && <DetailsModal data={openedEducation} />}
      </Modal>
    </SectionWrapper>
  );
}
