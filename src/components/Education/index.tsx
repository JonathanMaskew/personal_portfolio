'use client';
import { ChevronDown, ChevronUp, GraduationCap, Plus } from 'lucide-react';
import HighlightDetailed from '../HighlightDetailed';
import { useState } from 'react';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import ExperienceDetails from '../ExperienceDetails';
import { getEducationData, getMoreEducationData } from '@/data/education';

export default function Work() {
  const [showMore, setShowMore] = useState<boolean>(false);

  const EDUCATION = getEducationData();
  const MORE_EDUCATION = getMoreEducationData();

  const { modalOpened, openModal, closeModal } = useModal();
  const [openedEducationId, setOpenedEducationId] = useState<string | null>(
    null
  );
  const openedEducation = openedEducationId
    ? EDUCATION.find((education) => education.id === openedEducationId) ||
      MORE_EDUCATION.find((education) => education.id === openedEducationId) ||
      null
    : null;

  return (
    <SectionWrapper
      icon={GraduationCap}
      title="Education"
      subtext="Graduated in May 2024 with a BS in Computer Science from Purdue University. Served as the Design Director for Hack the Future, a volunteer-based organization that builds software for non-profits."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {EDUCATION.map((education, index) => (
          <div key={index} className={`${index < 2 ? 'col-span-full' : ''}`}>
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
                (education.bullets && education.bullets.length > 0) ||
                education.modalChildren
                  ? () => {
                      setOpenedEducationId(education.id);
                      openModal();
                    }
                  : undefined
              }
              actionButton={
                (education.highlights && education.highlights.length > 0) ||
                (education.coreBullets && education.coreBullets.length > 0) ||
                (education.bullets && education.bullets.length > 0) ||
                education.modalChildren ? (
                  <Button
                    icon={Plus}
                    text="More"
                    clickDetail={() => {
                      setOpenedEducationId(education.id);
                      openModal();
                    }}
                  />
                ) : undefined
              }
            >
              {education.highlightChildren}
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <Button
        text={showMore ? 'Show less' : 'Show more'}
        clickDetail={() => setShowMore(!showMore)}
        icon={showMore ? ChevronUp : ChevronDown}
      />
      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
          {MORE_EDUCATION.map((education, index) => (
            <div
              key={index}
              className={`${education.id === 'noblesville-high-school' ? 'col-span-full' : ''}`}
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
                  (education.bullets && education.bullets.length > 0) ||
                  education.modalChildren
                    ? () => {
                        setOpenedEducationId(education.id);
                        openModal();
                      }
                    : undefined
                }
                actionButton={
                  (education.highlights && education.highlights.length > 0) ||
                  (education.coreBullets && education.coreBullets.length > 0) ||
                  (education.bullets && education.bullets.length > 0) ||
                  education.modalChildren ? (
                    <Button
                      icon={Plus}
                      text="More"
                      clickDetail={() => {
                        setOpenedEducationId(education.id);
                        openModal();
                      }}
                    />
                  ) : undefined
                }
              >
                {education.highlightChildren}
              </HighlightDetailed>
            </div>
          ))}
        </div>
      )}
      {openedEducation && (
        <Modal
          color={openedEducation?.color || ''}
          open={modalOpened && !!openedEducation}
          onCloseCallback={() => {
            setOpenedEducationId(null);
            closeModal();
          }}
        >
          {openedEducation && <ExperienceDetails data={openedEducation} />}
        </Modal>
      )}
    </SectionWrapper>
  );
}
