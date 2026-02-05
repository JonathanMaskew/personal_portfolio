'use client';

import {
  Quote,
  History as HistoryIcon,
  Sunrise,
  CalendarCheck,
} from 'lucide-react';
import { Button } from '@/components/Button';
import ButtonRow from '@/components/ButtonRow';
import { useTheme } from '@/context/ThemeContext';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function CarouselOfProgress() {
  const { setTheme } = useTheme();
  const { scrollToHash } = useHashScroll();

  return (
    <div
      className="flex flex-col gap-4 p-6 md:p-8 w-full max-w-7xl mx-auto"
      id="carousel-of-progress-easter-egg"
    >
      <div className="flex gap-6">
        <Quote size={40} className="mt-1 -scale-x-100" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2 text-2xl md:text-4xl">
            <div>Man has a dream and that's the start</div>
            <div>He follows his dream with mind and heart</div>
            <div>And when it becomes a reality</div>
            <div>It's a dream come true for you and me</div>
          </div>
          <div className="italic">
            - Carousel of Progress (Sherman Brothers)
          </div>
          <div className="flex flex-col gap-2">
            <div>Rotate to the...</div>
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
  );
}
