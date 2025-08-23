'use client';

import { BriefcaseBusiness, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import HighlightDetailed from '../HighlightDetailed';
import { useModal } from '@/hooks/useModal';
import { useState } from 'react';
import Modal from '../Modal';
import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import { getJobsData, getMoreJobsData } from '@/data/jobs';
import ExperienceDetails from '@/components/ExperienceDetails';

export default function Work() {
  const { modalOpened, openModal } = useModal();
  const [openedJobId, setOpenedJobId] = useState<string | null>(null);

  const [showMore, setShowMore] = useState<boolean>(false);

  const JOBS = getJobsData();
  const MORE_JOBS = getMoreJobsData();
  const openedJob = openedJobId
    ? JOBS.find((job) => job.id === openedJobId) ||
      MORE_JOBS.find((job) => job.id === openedJobId) ||
      null
    : null;

  return (
    <SectionWrapper
      icon={BriefcaseBusiness}
      title="Work Experience"
      subtext="Focused on front-end development, with experience in full-stack. Familiar with
            Next.js, React, Angular, and more. Experience working with Product, Design, and Engineering teams."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {JOBS.map((job, index) => (
          <div key={index} className={`${index === 0 ? 'col-span-full' : ''}`}>
            <HighlightDetailed
              color={job.color}
              imagery={job.imagery}
              title={job.title}
              subtitle={job.subtitle}
              subheading={job.subheading}
              body={job.body}
              onClick={
                (job.highlights && job.highlights.length > 0) ||
                (job.coreBullets && job.coreBullets.length > 0) ||
                (job.bullets && job.bullets.length > 0) ||
                job.modalChildren
                  ? () => {
                      setOpenedJobId(job.id);
                      openModal();
                    }
                  : undefined
              }
              actionButton={
                (job.highlights && job.highlights.length > 0) ||
                (job.coreBullets && job.coreBullets.length > 0) ||
                (job.bullets && job.bullets.length > 0) ||
                job.modalChildren ? (
                  <Button
                    icon={Plus}
                    text="More"
                    clickDetail={() => {
                      setOpenedJobId(job.id);
                      openModal();
                    }}
                  />
                ) : undefined
              }
            >
              {job.highlightChildren}
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <Button
        text={showMore ? 'Hide earlier experience' : 'Show earlier experience'}
        clickDetail={() => setShowMore(!showMore)}
        icon={showMore ? ChevronUp : ChevronDown}
      />

      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {MORE_JOBS.map((job, index) => (
            <div key={index}>
              <HighlightDetailed
                color={job.color}
                imagery={job.imagery}
                title={job.title}
                subtitle={job.subtitle}
                subheading={job.subheading}
                body={job.body}
                onClick={
                  (job.highlights && job.highlights.length > 0) ||
                  (job.coreBullets && job.coreBullets.length > 0) ||
                  (job.bullets && job.bullets.length > 0) ||
                  job.modalChildren
                    ? () => {
                        setOpenedJobId(job.id);
                        openModal();
                      }
                    : undefined
                }
                actionButton={
                  (job.highlights && job.highlights.length > 0) ||
                  (job.coreBullets && job.coreBullets.length > 0) ||
                  (job.bullets && job.bullets.length > 0) ||
                  job.modalChildren ? (
                    <Button
                      icon={Plus}
                      text="More"
                      clickDetail={() => {
                        setOpenedJobId(job.id);
                        openModal();
                      }}
                    />
                  ) : undefined
                }
              >
                {job.highlightChildren}
              </HighlightDetailed>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={modalOpened && !!openedJob}
        onCloseCallback={() => {
          setOpenedJobId(null);
        }}
        color={openedJob?.color || ''}
      >
        {openedJob && <ExperienceDetails data={openedJob} />}
      </Modal>
    </SectionWrapper>
  );
}
