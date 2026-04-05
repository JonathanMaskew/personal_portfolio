'use client';

import {
  Quote,
  History as HistoryIcon,
  Sunrise,
  CalendarCheck,
} from 'lucide-react';
import { Button } from '@/components/Button';
import ButtonRow from '@/components/Button/ButtonRow';
import { useTheme } from '@/context/ThemeContext';
import { useHashScroll } from '@/hooks/useHashScroll';
import PersonalCarousel from '@/components/About/PersonalCarousel';
import SectionWrapper from '../SectionWrapper';

export default function Misc() {
  const { setTheme } = useTheme();
  const { scrollToHash } = useHashScroll();

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 w-full">
        <div
          className="flex gap-6 rounded-2xl p-6 md:p-8 border-l-4 border-[var(--color-primary)]"
          style={{
            background:
              'linear-gradient(to right, color-mix(in srgb, white, transparent 90%), transparent)',
          }}
        >
          <Quote size={40} className="mt-1 -scale-x-100 shrink-0" />
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 text-2xl md:text-4xl">
                <div>Man has a dream and that's the start</div>
                <div>He follows his dream with mind and heart</div>
                <div>And when it becomes a reality</div>
                <div>It's a dream come true for you and me</div>
              </div>
              <div className="italic text-xs opacity-80">
                Carousel of Progress (Sherman Brothers)
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>Rotate site theme to the...</div>
              <ButtonRow>
                <Button
                  imagery={HistoryIcon}
                  text="Good Ol' Days"
                  clickDetail={() => {
                    setTheme('past');
                    scrollToHash('#carousel-of-progress-easter-egg');
                  }}
                />
                <Button
                  imagery={CalendarCheck}
                  text="Possible Present"
                  clickDetail={() => {
                    setTheme('default');
                    scrollToHash('#carousel-of-progress-easter-egg');
                  }}
                />
                <Button
                  imagery={Sunrise}
                  text="Beautiful Tomorrow"
                  clickDetail={() => {
                    setTheme('future');
                    scrollToHash('#carousel-of-progress-easter-egg');
                  }}
                />
              </ButtonRow>
            </div>
          </div>
        </div>
      </div>

      <PersonalCarousel />
      {/* <ArtGallery /> */}
    </SectionWrapper>
  );
}
