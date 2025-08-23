'use client';

import {
  ArrowDown,
  Blend,
  BriefcaseBusiness,
  GraduationCap,
} from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Carousel, { CarouselImageItem } from '../Carousel';
import tennis from '@/assets/images/tennis.jpg';
import manatee from '@/assets/images/manatee_oof.gif';
import lucy from '@/assets/images/lucy.png';
import reeses from '@/assets/images/reeses.jpg';
import tater_tots from '@/assets/images/tater_tots.jpg';
import dinosaur from '@/assets/images/dinosaur.png';
import travel from '@/assets/images/travel.png';
import roundabouts from '@/assets/images/roundabouts.jpg';
import HighlightFeature from '../HighlightFeature';
import carousel_of_progress from '@/assets/images/carousel_of_progress.png';
import { Button } from '../Button';
import ButtonRow from '../ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import { useHashScroll } from '@/hooks/useHashScroll';
import type React from 'react';
import Chips from '../Chips';

export default function About() {
  const { scrollToHash } = useHashScroll();

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-4 md:gap-6 items-center">
        <div
          className="text-3xl font-bold underline"
          style={{
            textDecorationColor: '#FF6B18',
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
                icon={item.icon}
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
          color="#FF6B18"
          onClick={() => scrollToHash('#work')}
          actionButton={
            <Button
              icon={ArrowDown}
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
          color="#FF6B18"
          onClick={() => scrollToHash('#education')}
          actionButton={
            <Button
              icon={ArrowDown}
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
            color="#FF6B18"
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
                'Scrum',
                'Agile',
                'Code Reviews',
                'APIs',
                'LLMs',
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
        <Carousel color="#f97316">
          <CarouselImageItem
            image={tennis}
            text="I played varisty tennis in high school and continue to play recreationally."
            color="#f97316"
          />
          <CarouselImageItem
            image={travel}
            text="I love to explore new places, having travelled to 13 countries and 40 US states."
            color="#f97316"
          />
          <CarouselImageItem
            image={lucy}
            text="A goofy little cockapoo named Lucy."
            color="#f97316"
          />
          <CarouselImageItem
            image={reeses}
            text="I am addicted to Reese's Peanut Butter Cups in every shape and size."
            color="#f97316"
          />
          <CarouselImageItem
            image={dinosaur}
            text="Jurassic Park is a great movie! You just can't beat the original."
            color="#f97316"
          />
          <CarouselImageItem
            image={tater_tots}
            text="Tater Tots are superior to french fries. Try to convince me otherwise."
            color="#f97316"
          />
          <CarouselImageItem
            image={roundabouts}
            text="I love roundabouts. Give me a roundabout over a traffic light any day."
            color="#f97316"
          />
          <CarouselImageItem
            image={carousel_of_progress}
            text="I could ride the Carousel of Progress in a loop. There's a Great Big Beautiful Tomorrow!"
            color="#f97316"
          />
          <CarouselImageItem
            image={manatee}
            text="This is a gif of a manatee. You're welcome."
            color="#f97316"
          />
        </Carousel>
      </div>
    </SectionWrapper>
  );
}
