'use client';

import { BriefcaseBusiness, ChevronDown, ChevronUp, Plus } from 'lucide-react';
import HighlightDetailed from './HighlightDetailed';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Button } from './Button';
import { getJobsData, getMoreJobsData } from '@/data/jobs';
import Chips from './Chips';
import { useModalContext } from '@/context/ModalContext';

export default function Work() {
  const { openExperienceModal } = useModalContext();
  const [showMore, setShowMore] = useState<boolean>(false);

  const JOBS = getJobsData();
  const MORE_JOBS = getMoreJobsData();

  return (
    <SectionWrapper icon={BriefcaseBusiness} title="Work Experience">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full">
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
                (job.moreAccomplishments &&
                  job.moreAccomplishments.length > 0) ||
                (job.moreBullets && job.moreBullets.length > 0) ||
                job.modalChildren
                  ? () => {
                      openExperienceModal(job.id);
                    }
                  : undefined
              }
              actionButton={
                (job.highlights && job.highlights.length > 0) ||
                (job.coreBullets && job.coreBullets.length > 0) ||
                (job.moreAccomplishments &&
                  job.moreAccomplishments.length > 0) ||
                (job.moreBullets && job.moreBullets.length > 0) ||
                job.modalChildren ? (
                  <Button
                    imagery={Plus}
                    text="More"
                    clickDetail={() => {
                      openExperienceModal(job.id);
                    }}
                  />
                ) : undefined
              }
            >
              {job.highlightChildren ||
                (job.keywords && <Chips strings={job.keywords} />)}
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <Button
        text={showMore ? 'Hide earlier experience' : 'Show earlier experience'}
        clickDetail={() => setShowMore(!showMore)}
        imagery={showMore ? ChevronUp : ChevronDown}
      />

      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full">
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
                  (job.moreAccomplishments &&
                    job.moreAccomplishments.length > 0) ||
                  (job.moreBullets && job.moreBullets.length > 0) ||
                  job.modalChildren
                    ? () => {
                        openExperienceModal(job.id);
                      }
                    : undefined
                }
                actionButton={
                  (job.highlights && job.highlights.length > 0) ||
                  (job.coreBullets && job.coreBullets.length > 0) ||
                  (job.moreAccomplishments &&
                    job.moreAccomplishments.length > 0) ||
                  (job.moreBullets && job.moreBullets.length > 0) ||
                  job.modalChildren ? (
                    <Button
                      imagery={Plus}
                      text="More"
                      clickDetail={() => {
                        openExperienceModal(job.id);
                      }}
                    />
                  ) : undefined
                }
              >
                {job.highlightChildren ||
                  (job.keywords && <Chips strings={job.keywords} />)}
              </HighlightDetailed>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
