'use client';

import SectionWrapper from '@/components/SectionWrapper';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import HighlightDetailed from '../HighlightDetailed';
import { Maximize2 } from 'lucide-react';
import { Button } from '../Button';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import { useState } from 'react';
import ButtonRow from '../Button/ButtonRow';
import { getFooterData } from '@/data/footer';
import ExperienceDetails from '@/components/Modal/ExperienceDetails';
import Accordion from '../Accordion';

export default function Footer() {
  const { modalOpened, openModal, closeModal } = useModal();
  const [openFooterId, setOpenedFooterId] = useState<string | null>(null);

  const FOOTER = getFooterData();

  const openedFooter = openFooterId
    ? FOOTER.find((footer) => footer.id === openFooterId)
    : null;

  return (
    <SectionWrapper
      title="Let's build something extraordinary"
      subtext={
        <div className="flex flex-col gap-2">
          Open to new opportunities, great conversations, and everything in
          between.
          <br />
          Please feel free to reach out!
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
      <Accordion>
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
                imagery={Maximize2}
                text="Show details"
                clickDetail={() => {
                  setOpenedFooterId(item.id);
                  openModal();
                }}
              />
            }
          />
        ))}
      </Accordion>
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
