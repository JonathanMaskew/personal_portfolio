'use client';

import {
  BriefcaseBusiness,
  LayoutGrid,
  Spotlight,
  Maximize2,
} from 'lucide-react';
import HighlightDetailed from './HighlightDetailed';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Button } from './Button';
import { getJobsData, getMoreJobsData } from '@/data/jobs';
import Chips from './Chips';
import { useModalContext } from '@/context/ModalContext';
import InnerHighlight from './InnerHighlight';
import Accordion from './Accordion';
import type { Experience, ExperienceHighlight } from '@/types';
import { hasModalContent } from '@/types';

export default function Work() {
  const { openExperienceModal } = useModalContext();
  const [showAll, setShowAll] = useState<boolean>(false);

  const JOBS = getJobsData();
  const MORE_JOBS = getMoreJobsData();
  const ALL_JOBS = showAll ? [...JOBS, ...MORE_JOBS] : JOBS;

  const headerAction = (
    <Button
      text={showAll ? 'Show highlights' : 'Show all'}
      clickDetail={() => setShowAll(!showAll)}
      imagery={showAll ? Spotlight : LayoutGrid}
    />
  );

  const renderJobContent = (
    job: Experience,
    keyProp: string | number,
    collapsed?: boolean,
    onExpand?: () => void
  ) => (
    <HighlightDetailed
      key={keyProp}
      color={job.color}
      imagery={job.imagery}
      title={job.title}
      subtitle={job.subtitle}
      subheading={job.subheading}
      body={job.body}
      collapsed={collapsed}
      onExpand={onExpand}
      onClick={
        hasModalContent(job) ? () => openExperienceModal(job.id) : undefined
      }
      actionButton={
        hasModalContent(job) ? (
          <Button
            text="Show details"
            clickDetail={() => openExperienceModal(job.id)}
            imagery={Maximize2}
          />
        ) : undefined
      }
    >
      {(job.highlights?.length || job.keywords?.length) ? (
        <div className="flex flex-col gap-5">
          {job.highlights && job.highlights.length > 0 && (
            <InnerHighlight>
              <div className="flex flex-col gap-2">
                {job.highlights
                  .filter((hl: ExperienceHighlight) => hl.title)
                  .map((hl: ExperienceHighlight, i: number) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 text-base/5 md:text-lg/6 opacity-80"
                    >
                      <hl.icon size={20} className="shrink-0" />
                      <span>{hl.title}</span>
                    </div>
                  ))}
              </div>
            </InnerHighlight>
          )}
          {job.keywords && job.keywords.length > 0 && <Chips strings={job.keywords} />}
        </div>
      ) : null}
    </HighlightDetailed>
  );

  return (
    <SectionWrapper
      title="Work"
      imagery={BriefcaseBusiness}
      actionButton={headerAction}
    >
      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full">
          {ALL_JOBS.map((job, index) => (
            <div
              key={job.id || index}
              className={`${index === 0 ? 'col-span-full' : ''}`}
            >
              {renderJobContent(job, job.id || index)}
            </div>
          ))}
        </div>
      ) : (
        <Accordion>
          {JOBS.map((job, index) => renderJobContent(job, job.id || index))}
        </Accordion>
      )}
    </SectionWrapper>
  );
}
