'use client';

import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import ButtonRow from '../Button/ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import { useHashScroll } from '@/hooks/useHashScroll';
import type React from 'react';
import HighlightHero from '../HighlightHero';
import SkillsComputer from './SkillsComputer';
import SmileyLines from '@/assets/images/site-graphics/smiley-lines.svg';
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
      className={`px-1 box-decoration-clone font-bold ${className} ${onClick ? 'cursor-pointer hover:brightness-75 transition-all' : ''}`}
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
        textDecorationThickness: '3px',
        textUnderlineOffset: '2px',
      }}
    >
      {children}
    </span>
  );
}

export default function About() {
  const { scrollToHash } = useHashScroll();
  const { openExperienceModal } = useModalContext();

  return (
    <SectionWrapper>
      {/* <div className="font-header font-bold text-4xl md:text-5xl">
        <TextUnderline>Hi, I'm Jonathan!</TextUnderline>{' '}
      </div> */}

      <div className="text-xl md:text-2xl lg:text-3xl leading-normal md:max-w-[80%]">
        Combining <TextUnderline>technical expertise</TextUnderline> with{' '}
        <TextUnderline>creative leadership</TextUnderline>, I build{' '}
        <TextHighlight color="var(--color-primary)">
          scalable, user-focused experiences
        </TextHighlight>
        . As a{' '}
        <TextHighlight
          color="var(--color-myhelo)"
          onClick={() => openExperienceModal('myhelo')}
        >
          Full-stack Engineer at myhELO
        </TextHighlight>
        , I&apos;ve delivered high-impact features such as a{' '}
        <TextUnderline color="var(--color-myhelo)">
          rebuild of ePrescribe
        </TextUnderline>{' '}
        and{' '}
        <TextUnderline color="var(--color-myhelo)">
          AI-powered automation
        </TextUnderline>
        . Serving as{' '}
        <TextHighlight
          color="var(--color-htf)"
          onClick={() => openExperienceModal('htf-design-director')}
        >
          Design Director for Hack the Future
        </TextHighlight>
        , I guided{' '}
        <TextUnderline color="var(--color-htf)">UI/UX principles</TextUnderline>{' '}
        and drove a nearly{' '}
        <TextUnderline color="var(--color-htf)">
          90% YoY increase in applicants
        </TextUnderline>
        . I hold a{' '}
        <TextHighlight
          color="var(--color-purdue)"
          onClick={() => scrollToHash('#education')}
        >
          BS in Computer Science from Purdue University
        </TextHighlight>{' '}
        .
      </div>

      <div className="flex gap-x-8 gap-y-1 flex-wrap">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 w-full">
        <HighlightHero
          title="Modern Tech Stack"
          subtitle="Building scalable products using popular frameworks and languages, like React and TypeScript, and practical AI integrations."
          chips={[
            'Next.js',
            'TypeScript',
            'JavaScript',
            'React',
            'Tailwind CSS',
            'Angular',
            'LLMs / Prompt Engineering',
            'CSS',
            'HTML',
            'PHP',
            'Node.js',
          ]}
          className="md:row-span-2"
          color="var(--color-generic)"
        >
          <div className="w-full flex items-end justify-center -mt-20">
            <SkillsComputer />
          </div>
        </HighlightHero>

        <HighlightHero
          title="Design Engineering"
          subtitle="Bridging the gap between engineering and design by translating complex requirements into intuitive full-stack experiences."
          chips={[
            'Front-end',
            'Tailwind CSS',
            'Core Web Vitals',
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
          title="Production-Ready Code"
          subtitle="Ensuring code is reliable and maintainable through rigorous testing and agile collaboration."
          chips={[
            'System Architecture',
            'CI/CD Pipeline',
            'Git',
            'Scrum / Agile',
            'Code Quality & Reviews',
            'APIs',
            'End-to-End Testing',
            'Error Monitoring',
            'Web Security',
          ]}
          color="var(--color-generic)"
          // actionButton={
          //   <Button
          //     text="Jump to Work"
          //     imagery={ArrowDown}
          //     clickDetail="#work"
          //   />
          // }
        />
      </div>
    </SectionWrapper>
  );
}
