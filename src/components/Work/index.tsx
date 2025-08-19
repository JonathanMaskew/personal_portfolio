'use client';

import { BriefcaseBusiness, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import Chips from '../Chips';
import HighlightDetailed from '../HighlightDetailed';
import { useModal } from '@/hooks/useModal';
import { useState } from 'react';
import Modal from '../Modal';
import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import { JOBS, MORE_JOBS } from '@/data/jobs';
import DetailsModal from '@/components/DetailsModal';

export default function Work() {
  const { modalOpened, openModal } = useModal();
  const [openedJobId, setOpenedJobId] = useState<string | null>(null);

  const [showMore, setShowMore] = useState<boolean>(false);

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
              color={job.bgColor}
              imagery={job.imagery}
              title={job.jobTitle}
              subtitle={job.company}
              subheading={job.timeRange}
              body={job.jobDescription}
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
              <Chips strings={job.keywords ?? []} />
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <div>
        <Button
          text={showMore ? 'Show less' : 'Show more'}
          clickDetail={() => setShowMore(!showMore)}
          icon={showMore ? ChevronUp : ChevronDown}
          className="opacity-60 hover:opacity-100"
        />
      </div>

      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {MORE_JOBS.map((job, index) => (
            <div key={index}>
              <HighlightDetailed
                color={job.bgColor}
                imagery={job.imagery}
                title={job.jobTitle}
                subtitle={job.company}
                subheading={job.timeRange}
                body={job.jobDescription}
              >
                <Chips strings={job.keywords ?? []} />
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
        color={openedJob && openedJob.bgColor ? openedJob.bgColor : ''}
      >
        {openedJob && <DetailsModal data={openedJob} />}
      </Modal>
    </SectionWrapper>
  );
}
