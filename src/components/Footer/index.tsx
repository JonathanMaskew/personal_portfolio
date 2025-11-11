'use client';

import SectionWrapper from '@/components/SectionWrapper';
import HighlightFeature from '@/components/HighlightFeature';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import HighlightDetailed from '../HighlightDetailed';
import { Plus } from 'lucide-react';
import { Button } from '../Button';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import { useState } from 'react';
import ButtonRow from '../ButtonRow';
import { getFooterData } from '@/data/footer';
import ExperienceDetails from '../ExperienceDetails';

export default function Footer() {
  const { modalOpened, openModal, closeModal } = useModal();
  const [openFooterId, setOpenedFooterId] = useState<string | null>(null);

  const FOOTER = getFooterData();

  const openedFooter = openFooterId
    ? FOOTER.find((footer) => footer.id === openFooterId)
    : null;

  return (
    <SectionWrapper
      title="Thanks for visiting!"
      subtext={
        <div className="flex flex-col gap-2">
          Please don&apos;t hesitate to reach out. I&apos;d love to connect!
          <ButtonRow>
            {SECONDARY_NAV_ITEMS.map((item) => {
              return (
                <Button
                  key={item.id}
                  imagery={item.icon}
                  text={item.label}
                  clickDetail={item.href}
                  newTab={item.newTab}
                />
              );
            })}
          </ButtonRow>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {FOOTER.map((item) => (
          <HighlightDetailed
            key={item.id}
            color={item.color}
            imagery={item.imagery}
            title={item.title}
            subtitle={item.subtitle}
            body={item.body}
            onClick={() => {
              setOpenedFooterId(item.id);
              openModal();
            }}
            actionButton={
              <Button
                imagery={Plus}
                text="More"
                clickDetail={() => {
                  setOpenedFooterId(item.id);
                  openModal();
                }}
              />
            }
          />
        ))}
        <div className="col-span-full">
          <HighlightFeature
            color="#000000"
            //   imagery={Cog}
          >
            <div>
              “Man has a dream and that&apos;s the start
              <br />
              He follows his dream with mind and heart
              <br />
              And when it becomes a reality
              <br />
              It&apos;s a dream come true for you and me”
            </div>
            <div className="italic">
              - Carousel of Progress (Sherman Brothers)
            </div>
          </HighlightFeature>
        </div>
      </div>
      <Modal
        open={modalOpened && !!openedFooter}
        onCloseCallback={closeModal}
        color={openedFooter?.color || ''}
      >
        {openedFooter && <ExperienceDetails data={openedFooter} />}
      </Modal>
    </SectionWrapper>
  );
}
