'use client';
import { GraduationCap, Plus } from 'lucide-react';
import HighlightDetailed from '../HighlightDetailed';
import { useState } from 'react';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import SectionWrapper from '../SectionWrapper';
import Chips from '../Chips';
import { Button } from '../Button';
import ExperienceDetails from '../ExperienceDetails';
import { EDUCATION } from '@/data/education';

export default function Work() {
  const htfEducationData = EDUCATION;

  const { modalOpened, openModal, closeModal } = useModal();
  const [openedEducationIndex, setOpenedEducationIndex] = useState<
    number | null
  >(null);
  const openedEducation =
    openedEducationIndex !== null && htfEducationData[openedEducationIndex]
      ? htfEducationData[openedEducationIndex]
      : null;

  return (
    <SectionWrapper icon={GraduationCap} title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        {htfEducationData.map((item, index) => (
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
              <div className="flex flex-col gap-6">
                {item.keywords && item.keywords.length > 0 && (
                  <Chips strings={item.keywords} />
                )}
              </div>
              {item.highlightChildren}
            </HighlightDetailed>
          </div>
        ))}
      </div>
      {openedEducation && (
        <Modal
          color={openedEducation?.color || ''}
          open={modalOpened && !!openedEducation}
          onCloseCallback={() => {
            setOpenedEducationIndex(null);
            closeModal();
          }}
        >
          {openedEducation && (
            <>
              <ExperienceDetails data={openedEducation}>
                {openedEducation.modalChildren}
              </ExperienceDetails>
            </>
          )}
        </Modal>
      )}
    </SectionWrapper>
  );
}
