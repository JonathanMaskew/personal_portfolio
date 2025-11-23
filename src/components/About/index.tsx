'use client';

import {
  ArrowDown,
  Blend,
  BriefcaseBusiness,
  CalendarCheck,
  ChevronRight,
  Cog,
  GraduationCap,
  HistoryIcon,
  RefreshCcw,
  Sunrise,
  TriangleAlert,
} from 'lucide-react';
import { useState, useEffect } from 'react';
import SectionWrapper from '../SectionWrapper';
import Carousel, { CarouselImageItem } from '../Carousel';
import tennis from '@/assets/images/tennis.jpg';
import manatee from '@/assets/images/manatee_oof.gif';
import lucy from '@/assets/images/lucy.png';
import reeses from '@/assets/images/reeses.jpg';
import taterTots from '@/assets/images/tater_tots.png';
import dinosaur from '@/assets/images/raptor_encounter.png';
import travel from '@/assets/images/travel.png';
import roundabouts from '@/assets/images/roundabouts.jpg';
import HighlightFeature from '../HighlightFeature';
import carouselOfProgress from '@/assets/images/carousel_of_progress.png';
import { Button } from '../Button';
import ButtonRow from '../ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import { useHashScroll } from '@/hooks/useHashScroll';
import type React from 'react';
import Chips from '../Chips';
import JurassicParkEasterEgg from '../JurassicParkEasterEgg';
import { useTheme } from '@/context/ThemeContext';

export default function About() {
  const { scrollToHash } = useHashScroll();
  const { setTheme } = useTheme();
  const [showJurassicParkEasterEgg, setShowJurassicParkEasterEgg] =
    useState(false);
  // const [isSpinning, setIsSpinning] = useState(false);

  // useEffect(() => {
  //   if (isSpinning) {
  //     document.body.classList.add('animate-spin-page');

  //     const handleAnimationEnd = () => {
  //       setIsSpinning(false);
  //     };

  //     document.body.addEventListener('animationend', handleAnimationEnd, {
  //       once: true,
  //     });

  //     return () => {
  //       document.body.classList.remove('animate-spin-page');
  //       document.body.removeEventListener('animationend', handleAnimationEnd);
  //     };
  //   } else {
  //     document.body.classList.remove('animate-spin-page');
  //   }
  // }, [isSpinning]);

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-6 items-center">
        <div
          className="text-3xl font-bold underline font-header"
          style={{
            textDecorationColor: 'var(--color-primary)',
            textDecorationThickness: '4px',
            textUnderlineOffset: '4px',
          }}
        >
          Hi, I&apos;m Jonathan!
        </div>
        <div className="text-center max-w-2xl">
          As one who loves to dream big, I&apos;m always looking to transform
          these dreams into experiences that feel intuitive and engaging.
        </div>
        <ButtonRow>
          {SECONDARY_NAV_ITEMS.map((item) => {
            return (
              <Button
                key={item.id}
                text={item.label}
                imagery={item.icon}
                clickDetail={item.href}
                newTab={item.newTab}
              />
            );
          })}
        </ButtonRow>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        <HighlightFeature
          imagery={BriefcaseBusiness}
          title="Software Engineer"
          subtitle="myhELO"
          body="At myhELO, I've delivered high-impact full-stack solutions, worked with Large Language Models, and designed new user interfaces."
          color="var(--color-primary)"
          onClick={() => scrollToHash('#work')}
          actionButton={
            <Button
              imagery={ArrowDown}
              text="Jump to 'Work'"
              clickDetail="#work"
            />
          }
        />
        <HighlightFeature
          imagery={GraduationCap}
          title="BS in Computer Science"
          subtitle="Purdue University"
          body="In addition to coursework, I served as Design Director of a volunteer-based organization."
          color="var(--color-primary)"
          onClick={() => scrollToHash('#education')}
          actionButton={
            <Button
              imagery={ArrowDown}
              text="Jump to 'Education'"
              clickDetail="#education"
            />
          }
        />
        <div className="col-span-full">
          <HighlightFeature
            imagery={Blend}
            title="Well-Rounded Experience"
            subtitle="User-driven Development"
            body="I've got a robust skillset - from website design & development, to user research and prototyping, to branding and marketing, and more. At the core of everything I do, I'm focused on how it impacts the user."
            color="var(--color-primary)"
          >
            <Chips
              strings={[
                'Front-end',
                'Next.js',
                'React',
                'Tailwind CSS',
                'Angular',
                'Component-based Architecture',
                'Responsive Web Development',
                'TypeScript',
                'Git',
                'UX/UI Design',
                'Figma',
                'AI / LLMs',
                'Prompt Engineering',
                'Scrum',
                'Agile',
                'Code Reviews',
                'APIs',
                'User Research',
                'Prototyping',
                'Full-stack',
                'JavaScript',
                'HTML',
                'CSS',
                'PHP',
                'Java',
                'C',
                'Unit Testing',
                'Accessibility',
                'Branding',
                'Digital Marketing',
                'Graphic Design',
              ]}
            />
          </HighlightFeature>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg font-header leading-tight">
          Get to know me a little better...
        </div>
        <Carousel color="var(--color-primary)">
          <CarouselImageItem
            image={tennis}
            text="I played varsity tennis in high school and continue to play recreationally."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={dinosaur}
            text="Jurassic Park is a great movie!"
            color="var(--color-primary)"
            onClick={() => setShowJurassicParkEasterEgg(true)}
          >
            <div className="flex flex-col gap-1 text-xs leading-tight">
              {/* <div className='flex items-center'>
                Status:
              </div> */}
              <div className="flex items-center gap-2 font-bold text-red-500 animate-urgent-flash">
                <TriangleAlert size={14} />
                SYSTEMS FAILING
              </div>
              <div className="flex items-center text-red-500">
                Investigate failures
                <ChevronRight size={14} />
              </div>
            </div>
          </CarouselImageItem>
          <CarouselImageItem
            image={reeses}
            text="I am addicted to Reese's Peanut Butter Cups in every shape and size."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={taterTots}
            text="Tater Tots are superior to french fries. Try to convince me otherwise."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={carouselOfProgress}
            text="I could ride the Carousel of Progress in a loop."
            color="var(--color-primary)"
            onClick={() => scrollToHash('#carousel-of-progress-easter-egg')}
          >
            <div className="flex items-center text-xs leading-tight text-[#CA94FF]">
              <div className="flex items-center gap-2">
                <Cog size={14} />
                Rotate thru time
              </div>
              <ChevronRight size={14} />
            </div>
            {/* <div className="text-xs leading-tight">
              <ButtonRow>
                <Button
                  imagery={HistoryIcon}
                  text="Past"
                  // imageryOnly
                  clickDetail={() => setTheme('past')}
                />
                <Button
                  imagery={CalendarCheck}
                  text="Present"
                  // imageryOnly
                  clickDetail={() => setTheme('default')}
                />
                <Button
                  imagery={Sunrise}
                  text="Future"
                  // imageryOnly
                  clickDetail={() => setTheme('future')}
                />
              </ButtonRow>
            </div> */}
          </CarouselImageItem>
          <CarouselImageItem
            image={travel}
            text="I love to explore new places, having traveled to 13 countries and dozens of US states."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={roundabouts}
            text="I love roundabouts. Give me a roundabout over a traffic light any day."
            color="var(--color-primary)"
            // onClick={() => setIsSpinning(true)}
          >
            {/* <div className="flex items-center text-xs leading-tight text-[#FFFA94]">
              <div className="flex items-center gap-2">
                <RefreshCcw size={14} />
                Go for a spin
              </div>
              <ChevronRight size={14} />
            </div> */}
          </CarouselImageItem>
          <CarouselImageItem
            image={lucy}
            text="A goofy little cockapoo named Lucy."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={manatee}
            text="This is a gif of a manatee. You're welcome."
            color="var(--color-primary)"
          />
        </Carousel>
      </div>

      {showJurassicParkEasterEgg && (
        <JurassicParkEasterEgg
          onClose={() => setShowJurassicParkEasterEgg(false)}
        />
      )}
    </SectionWrapper>
  );
}
