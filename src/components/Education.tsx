'use client';
import { ChevronDown, ChevronUp, GraduationCap, Plus } from 'lucide-react';
import HighlightDetailed from './HighlightDetailed';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Button } from './Button';
import { getEducationData, getMoreEducationData } from '@/data/education';
import Chips from './Chips';
import { useModalContext } from '@/context/ModalContext';

export default function Work() {
  const { openExperienceModal } = useModalContext();
  const [showMore, setShowMore] = useState<boolean>(false);

  const EDUCATION = getEducationData();
  const MORE_EDUCATION = getMoreEducationData();

  return (
    <SectionWrapper icon={GraduationCap} title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full">
        {EDUCATION.map((education, index) => (
          <div key={index} className={`${index === 2 ? 'col-span-full' : ''}`}>
            <HighlightDetailed
              color={education.color}
              imagery={education.imagery}
              title={education.title}
              subtitle={education.subtitle}
              subheading={education.subheading}
              body={education.body}
              onClick={
                (education.highlights && education.highlights.length > 0) ||
                (education.coreBullets && education.coreBullets.length > 0) ||
                (education.moreAccomplishments &&
                  education.moreAccomplishments.length > 0) ||
                (education.moreBullets && education.moreBullets.length > 0) ||
                education.modalChildren
                  ? () => {
                      openExperienceModal(education.id);
                    }
                  : undefined
              }
              actionButton={
                (education.highlights && education.highlights.length > 0) ||
                (education.coreBullets && education.coreBullets.length > 0) ||
                (education.moreAccomplishments &&
                  education.moreAccomplishments.length > 0) ||
                (education.moreBullets && education.moreBullets.length > 0) ||
                education.modalChildren ? (
                  <Button
                    imagery={Plus}
                    text="More"
                    clickDetail={() => {
                      openExperienceModal(education.id);
                    }}
                  />
                ) : undefined
              }
            >
              {education.highlightChildren ||
                (education.keywords && <Chips strings={education.keywords} />)}
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <Button
        text={showMore ? 'Show less' : 'Show more'}
        clickDetail={() => setShowMore(!showMore)}
        imagery={showMore ? ChevronUp : ChevronDown}
      />
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full">
          {MORE_EDUCATION.map((education, index) => (
            <div
              key={index}
              className={`${education.id === 'noblesville-high-school' || education.id === 'sundae' ? 'col-span-full' : ''}`}
            >
              <HighlightDetailed
                color={education.color}
                imagery={education.imagery}
                title={education.title}
                subtitle={education.subtitle}
                subheading={education.subheading}
                body={education.body}
                onClick={
                  (education.highlights && education.highlights.length > 0) ||
                  (education.coreBullets && education.coreBullets.length > 0) ||
                  (education.moreAccomplishments &&
                    education.moreAccomplishments.length > 0) ||
                  (education.moreBullets && education.moreBullets.length > 0) ||
                  education.modalChildren
                    ? () => {
                        openExperienceModal(education.id);
                      }
                    : undefined
                }
                actionButton={
                  (education.highlights && education.highlights.length > 0) ||
                  (education.coreBullets && education.coreBullets.length > 0) ||
                  (education.moreAccomplishments &&
                    education.moreAccomplishments.length > 0) ||
                  (education.moreBullets && education.moreBullets.length > 0) ||
                  education.modalChildren ? (
                    <Button
                      imagery={Plus}
                      text="More"
                      clickDetail={() => {
                        openExperienceModal(education.id);
                      }}
                    />
                  ) : undefined
                }
              >
                {education.highlightChildren ||
                  (education.keywords && (
                    <Chips strings={education.keywords} />
                  ))}
              </HighlightDetailed>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  );
}
