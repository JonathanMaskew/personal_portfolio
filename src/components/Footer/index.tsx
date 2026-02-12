'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import HighlightDetailed from '../HighlightDetailed';
import { Plus } from 'lucide-react';
import { Button } from '../Button';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import { useState } from 'react';
import ButtonRow from '../Button/ButtonRow';
import { getFooterData } from '@/data/footer';
import ExperienceDetails from '@/components/Modal/ExperienceDetails';
import { useTheme } from '@/context/ThemeContext';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function Footer() {
  const { modalOpened, openModal, closeModal } = useModal();
  const { setTheme } = useTheme();
  const { scrollToHash } = useHashScroll();
  const [openFooterId, setOpenedFooterId] = useState<string | null>(null);

  const FOOTER = getFooterData();

  const openedFooter = openFooterId
    ? FOOTER.find((footer) => footer.id === openFooterId)
    : null;

  return (
    <SectionWrapper
      title="I hope to hear from you!"
      subtext={
        <div className="flex flex-col gap-2">
          Please don&apos;t hesitate to reach out. I&apos;d love to connect to
          discuss anything and everything!
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
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
