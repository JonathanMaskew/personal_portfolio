'use client';
import { GraduationCap, LayoutGrid, Spotlight, Maximize2 } from 'lucide-react';
import HighlightDetailed from './HighlightDetailed';
import { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { Button } from './Button';
import { getEducationData, getMoreEducationData } from '@/data/education';
import Chips from './Chips';
import { useModalContext } from '@/context/ModalContext';
import InnerHighlight from './InnerHighlight';
import Accordion from './Accordion';

export default function Education() {
  const { openExperienceModal } = useModalContext();
  const [showAll, setShowAll] = useState<boolean>(false);

  const EDUCATION = getEducationData();
  const MORE_EDUCATION = getMoreEducationData();
  const ALL_EDUCATION = showAll ? [...EDUCATION, ...MORE_EDUCATION] : EDUCATION;

  const headerAction = (
    <Button
      text={showAll ? 'Show highlights' : 'Show all'}
      clickDetail={() => setShowAll(!showAll)}
      imagery={showAll ? Spotlight : LayoutGrid}
    />
  );

  const renderEducationContent = (
    education: any,
    keyProp: string | number,
    collapsed?: boolean,
    onExpand?: () => void
  ) => (
    <HighlightDetailed
      key={keyProp}
      color={education.color}
      imagery={education.imagery}
      title={education.title}
      subtitle={education.subtitle}
      subheading={education.subheading}
      body={education.body}
      collapsed={collapsed}
      onExpand={onExpand}
      onClick={
        (education.highlights && education.highlights.length > 0) ||
        (education.coreBullets && education.coreBullets.length > 0) ||
        (education.moreAccomplishments &&
          education.moreAccomplishments.length > 0) ||
        (education.moreBullets && education.moreBullets.length > 0) ||
        education.modalChildren
          ? () => openExperienceModal(education.id)
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
            imagery={Maximize2}
            text="Show details"
            clickDetail={() => openExperienceModal(education.id)}
          />
        ) : undefined
      }
    >
      <div className="flex flex-col gap-5">
        {education.highlightChildren}
        {education.highlights && (
          <InnerHighlight>
            <div className="flex flex-col gap-2">
              {education.highlights.map((hl: any, i: number) => (
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
        {education.keywords && <Chips strings={education.keywords} />}
      </div>
    </HighlightDetailed>
  );

  return (
    <SectionWrapper
      title="Education"
      icon={GraduationCap}
      actionButton={headerAction}
    >
      {showAll ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7 w-full">
          {ALL_EDUCATION.map((education, index) => (
            <div
              key={education.id || index}
              className={`${index === 2 || education.id === 'noblesville-high-school' || education.id === 'sundae' ? 'col-span-full' : ''}`}
            >
              {renderEducationContent(education, 'inner')}
            </div>
          ))}
        </div>
      ) : (
        <Accordion>
          {EDUCATION.map((education, index) =>
            renderEducationContent(education, education.id || index)
          )}
        </Accordion>
      )}
    </SectionWrapper>
  );
}
