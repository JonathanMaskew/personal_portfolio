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
  const [openedEducationIndex, setOpenedEducationIndex] = useState<
    number | null
  >(null);
  const openedEducation =
    openedEducationIndex !== null && EDUCATION[openedEducationIndex]
      ? EDUCATION[openedEducationIndex]
      : null;

  return (
    <SectionWrapper icon={GraduationCap} title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {EDUCATION.map((item, index) => (
          <div key={index} className={`${index < 2 ? 'col-span-full' : ''}`}>
            <HighlightDetailed
              color={item.color}
              imagery={item.imagery}
              title={item.title}
              subtitle={item.subtitle}
              subheading={item.subheading}
              body={item.body}
              onClick={() => {
                setOpenedEducationIndex(index);
                openModal();
              }}
              actionButton={
                <Button
                  icon={Plus}
                  text="More"
                  clickDetail={() => {
                    setOpenedEducationIndex(0);
                    openModal();
                  }}
                />
              }
            >
              {item.highlightChildren}
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <div className="w-fit">
        <Button
          text={showMore ? 'Show less' : 'Show more'}
          clickDetail={() => setShowMore(!showMore)}
          icon={showMore ? ChevronUp : ChevronDown}
        />
      </div>
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
            setOpenedEducationIndex(null);
            closeModal();
          }}
        >
          {openedEducation && <ExperienceDetails data={openedEducation} />}
        </Modal>
      )}
    </SectionWrapper>
  );
}
