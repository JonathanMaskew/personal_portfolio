'use client';

import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import ButtonRow from '../Button/ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import { getAboutData } from '@/data/about';
import { useModalContext } from '@/context/ModalContext';
import HighlightFeature from '../HighlightFeature';
import { BadgeCheck, User } from 'lucide-react';
import Chips from '../Chips';

export default function About() {
  const aboutData = getAboutData();
  const { openExperienceModal } = useModalContext();

  return (
    <SectionWrapper title="Overview" icon={User}>
      <div className="flex flex-col gap-4 w-full">
        {aboutData.map((data) => {
          return (
            <HighlightFeature
              key={data.id}
              title={data.title}
              // body={data.subtitle}
              imagery={
                <BadgeCheck
                  size={36}
                  style={{ color: 'var(--color-primary)' }}
                />
              }
              color={'var(--color-generic)'}
              collapsed={false}
            >
              {data.keywords && (
                <div className="w-full lg:max-w-[75%]">
                  <Chips
                    strings={data.keywords}
                    // color={data.color || 'var(--color-primary)'}
                    // className="md:!text-sm"
                  />
                </div>
              )}
            </HighlightFeature>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
