'use client';

import { ArrowDown, ChevronRight, Cog, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
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
import carouselOfProgress from '@/assets/images/carousel_of_progress.png';
import { Button } from '../Button';
import ButtonRow from '../ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import { useHashScroll } from '@/hooks/useHashScroll';
import type React from 'react';
import JurassicParkEasterEgg from '../JurassicParkEasterEgg';
import HighlightHero from '../HighlightHero';
import SkillsComputer from '../SkillsComputer';
import SmileyLines from '@/assets/images/site_graphics/Smiley_lines.svg';
import { useModalContext } from '@/context/ModalContext';

function TextHighlight({
  children,
  color = 'var(--color-primary)',
  className = '',
  onClick,
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <span
      className={`px-2 box-decoration-clone font-bold ${className} ${onClick ? 'cursor-pointer hover:brightness-75 transition-all' : ''}`}
      style={{
        backgroundColor: `color-mix(in srgb, ${color}, transparent 20%)`,
      }}
      onClick={onClick}
    >
      {children}
    </span>
  );
}

function TextUnderline({
  children,
  color = 'var(--color-primary)',
  className = '',
}: {
  children: React.ReactNode;
  color?: string;
  className?: string;
}) {
  return (
    <span
      className={`font-bold underline underline-offset-[4px] decoration-[3px] md:decoration-[4px] lg:decoration-[5px] ${className}`}
      style={{
        textDecorationColor: color,
      }}
    >
      {children}
    </span>
  );
}

export default function About() {
  const { scrollToHash } = useHashScroll();
  const { openExperienceModal } = useModalContext();
  const [showJurassicParkEasterEgg, setShowJurassicParkEasterEgg] =
    useState(false);

  return (
    <SectionWrapper>
      {/* <div className="font-header font-bold text-4xl md:text-5xl">
        <TextUnderline>Hi, I'm Jonathan!</TextUnderline>{' '}
      </div> */}

      <div
        className="text-2xl md:text-3xl lg:text-4xl leading-normal"
        // style={{
        //   color: 'var(--color-generic)',
        // }}
      >
        I am a <TextUnderline>Software Engineer</TextUnderline> passionate about{' '}
        <TextHighlight>Front-end development</TextHighlight>. I've delivered
        high-impact features as a{' '}
        <TextHighlight
          color="var(--color-myhelo)"
          onClick={() => openExperienceModal('myhelo')}
        >
          Full-stack Engineer
        </TextHighlight>{' '}
        at <TextUnderline color="var(--color-myhelo)">myhELO</TextUnderline>,
        and guided UI/UX design as the{' '}
        <TextHighlight
          color="var(--color-htf)"
          onClick={() => openExperienceModal('htf-design-director')}
        >
          Design Director
        </TextHighlight>{' '}
        for{' '}
        <TextUnderline color="var(--color-htf)">Hack the Future</TextUnderline>.
        I hold a{' '}
        <TextHighlight
          color="var(--color-purdue)"
          onClick={() => scrollToHash('#education')}
        >
          BS in Computer Science
        </TextHighlight>{' '}
        from{' '}
        <TextUnderline color="var(--color-purdue)">
          Purdue University
        </TextUnderline>
        .
      </div>

      <div className="flex gap-2 sm:gap-8 flex-wrap">
        I'd love to hear from you...
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <HighlightHero
          title="Technically Skilled"
          subtitle="Significantly experienced in a variety of popular frameworks and languages."
          chips={[
            'Next.js',
            'React',
            'JavaScript',
            'TypeScript',
            'Angular',
            'Agentic AI / LLMs',
            'HTML',
            'CSS',
            'PHP',
            'Node.js',
            'React Testing Library',
          ]}
          className="md:row-span-2"
          color="var(--color-generic)"
        >
          <div className="w-full flex items-end justify-center -mt-20">
            <SkillsComputer />
          </div>
        </HighlightHero>

        <HighlightHero
          title="Front-end Focused"
          subtitle="Passionate about creating beautiful yet practical experiences."
          chips={[
            'Front-end',
            'Tailwind CSS',
            'UX/UI Design',
            'Figma',
            'User Research',
            'Prototyping',
            'Accessibility',
            'Branding',
          ]}
          subtitleClassName="max-w-[70%]"
          chipsClassName="max-w-[55%]"
          color="var(--color-generic)"
        >
          <img
            src={SmileyLines.src}
            alt="Smiley"
            className="absolute bottom-0 right-2 w-[40%] h-auto max-h-[220px] object-contain"
          />
        </HighlightHero>

        <HighlightHero
          title="Real-World Experienced"
          subtitle="Prepared to navigate the complexities of real-world engineering."
          chips={[
            'Component-based Architecture',
            'Responsive Web Development',
            'Git',
            'Prompt Engineering',
            'Scrum & Agile',
            'Code Reviews',
            'APIs',
            'Unit Testing',
            'Sentry',
          ]}
          color="var(--color-generic)"
          actionButton={
            <Button
              text="Jump to Work"
              imagery={ArrowDown}
              clickDetail="#work"
            />
          }
        />
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-xl md:text-2xl font-header leading-tight">
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
              <div className="flex items-center gap-2 font-bold text-red-500">
                {' '}
                {/*animate-urgent-flash*/}
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
          ></CarouselImageItem>
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
