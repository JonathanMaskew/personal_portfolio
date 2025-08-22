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
    ? JOBS.find((job) => job.id === openedJobId) || null
    : null;

  return (
    <SectionWrapper
      icon={BriefcaseBusiness}
      title="Work Experience"
      subtext="Experienced in full-stack development, with a focus on building
            user-focused front-end interfaces using frameworks including
            Next.js, React, Angular, and more."
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
              onClick={() => {
                if (JOBS[index]?.id) {
                  setOpenedJobId(JOBS[index].id as string);
                  openModal();
                }
              }}
              actionButton={
                <Button
                  icon={Plus}
                  text="More"
                  clickDetail={() => {
                    if (JOBS[index]?.id) {
                      setOpenedJobId(JOBS[index].id as string);
                      openModal();
                    }
                  }}
                />
              }
            >
              {job.highlightChildren}
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <div className="w-fit">
        <Button
          text={
            showMore ? 'Hide earlier experience' : 'Show earlier experience'
          }
          clickDetail={() => setShowMore(!showMore)}
          icon={showMore ? ChevronUp : ChevronDown}
        />
      </div>

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
