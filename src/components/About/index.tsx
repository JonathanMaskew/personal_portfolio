'use client';

import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import ButtonRow from '../Button/ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import { getAboutData } from '@/data/about';
import { useModalContext } from '@/context/ModalContext';
import { BadgeCheck } from 'lucide-react';
import Chips from '../Chips';

export default function About() {
  const aboutData = getAboutData();
  const { openExperienceModal } = useModalContext();

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-10 md:gap-12 w-full">
        {aboutData.map((data) => {
          return (
            <div key={data.id} className="flex flex-col gap-4 md:gap-5">
              <div className="flex flex-col gap-2 md:gap-3">
                <div className="flex items-center gap-2 md:gap-3">
                  <BadgeCheck
                    size={40}
                    className="shrink-0"
                    style={{ color: 'var(--color-primary)' }}
                  />
                  <h3 className="font-header font-bold text-3xl md:text-4xl">
                    {data.title}
                  </h3>
                </div>

                {data.subtitle && (
                  <p className="text-md/6 md:text-xl/7 lg:max-w-[85%]">
                    {data.subtitle}
                  </p>
                )}
              </div>

              {data.keywords && (
                <div className="w-full lg:max-w-[75%]">
                  <Chips
                    strings={data.keywords}
                    color="var(--color-primary)"
                    className="md:!text-sm"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
