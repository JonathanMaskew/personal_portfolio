'use client';

import {
  Sparkles,
  Lightbulb,
  Paintbrush,
  SquareMousePointer,
  User,
  Code,
  Award,
  Brain,
  Megaphone,
  Palette,
  Pill,
  Shield,
  SplinePointer,
  TrendingUp,
} from 'lucide-react';
import { useModalContext } from '@/context/ModalContext';
import { useHashScroll } from '@/hooks/useHashScroll';
import TypewriterText from './TypewriterText';
import turkeyRun from '@/assets/images/personal/turkey-run.png';
import costaRica from '@/assets/images/personal/costa-rica.png';
import raptorEncounter from '@/assets/images/personal/raptor-encounter-hero.png';
import graduation from '@/assets/images/personal/graduation.png';
import Image from 'next/image';
import { useMobile } from '@/hooks/useMobile';
import InnerHighlight from './InnerHighlight';
import SectionWrapper from './SectionWrapper';
import Carousel, { CarouselItem } from './Carousel';
import Chatbot from './Chatbot';

export default function Hero() {
  const { isMobileLandscape } = useMobile();
  const { openExperienceModal } = useModalContext();
  const { scrollToHash } = useHashScroll();

  const highlights = [
    {
      title: 'Full-stack Engineer',
      text: 'myhELO',
      color: 'var(--color-myhelo)',
      onClick: () => openExperienceModal('myhelo'),
      children: (
        <div className="flex flex-col gap-0.5 text-[10px] leading-tight">
          <div className="flex gap-1.5 items-center opacity-80">
            <Pill size={11} className="shrink-0" />
            <span>Architect full-stack ePrescribe</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-80">
            <Sparkles size={11} className="shrink-0" />
            <span>Pioneer AI-automation</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-80">
            <Shield size={11} className="shrink-0" />
            <span>Implement 2FA</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Front-end Engineer',
      text: 'Allegion',
      color: 'var(--color-allegion)',
      onClick: () => openExperienceModal('allegion'),
      children: (
        <div className="flex flex-col gap-0.5 text-[10px] leading-tight">
          <div className="flex gap-1.5 items-center opacity-80">
            <Megaphone size={11} className="shrink-0" />
            <span>Developed announcements system</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-80">
            <Code size={11} className="shrink-0" />
            <span>Translated mockups to code</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Design Director',
      text: 'Hack the Future',
      color: 'var(--color-htf)',
      onClick: () => openExperienceModal('htf-design-director'),
      children: (
        <div className="flex flex-col gap-0.5 text-[10px] leading-tight">
          <div className="flex gap-1.5 items-center opacity-80">
            <SplinePointer size={11} className="shrink-0" />
            <span>Guided UX/UI</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-80">
            <Palette size={11} className="shrink-0" />
            <span>Led rebranding</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-80">
            <TrendingUp size={11} className="shrink-0" />
            <span>~90% increase in applicants</span>
          </div>
        </div>
      ),
    },
    {
      title: 'BS in Computer Science',
      text: 'Purdue University',
      color: 'var(--color-purdue)',
      onClick: () => scrollToHash('#education'),
      children: (
        <div className="flex flex-col gap-0.5 text-[10px] leading-tight">
          <div className="flex gap-1.5 items-center opacity-80">
            <Code size={11} className="shrink-0" />
            <span>Software Engineering concentration</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-80">
            <Brain size={11} className="shrink-0" />
            <span>3.69 GPA</span>
          </div>
          <div className="flex gap-1.5 items-center opacity-80">
            <Award size={11} className="shrink-0" />
            <span>Dean's List & Semester Honors</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <SectionWrapper className="min-h-[calc(100dvh-3.5rem)] md:min-h-dvh">
      <div className="flex-grow flex flex-col justify-center items-center gap-8 md:gap-16 w-full">
        {!isMobileLandscape && (
          <div className="relative w-full max-w-[250px] md:max-w-[500px] h-[270px] md:h-[200px] flex justify-center">
            <div className="absolute transform rotate-6 left-0 top-36 md:top-5">
              <div className="animate-slide-in-left">
                <Image
                  src={turkeyRun}
                  alt="Turkey Run hiking"
                  priority
                  unoptimized
                  className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-sm border-6 border-foreground"
                />
              </div>
            </div>
            <div className="absolute transform z-10">
              <div className="animate-scale-in">
                <Image
                  src={graduation}
                  alt="Purdue graduation"
                  priority
                  unoptimized
                  className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-sm border-6 border-foreground shadow-2xl shadow-black"
                />
              </div>
            </div>
            <div className="absolute transform -rotate-6 right-0 top-36 md:top-5">
              <div className="animate-slide-in-right">
                <Image
                  src={costaRica}
                  alt="Costa Rica zip-lining"
                  priority
                  unoptimized
                  className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-sm border-6 border-foreground"
                />
              </div>
            </div>
          </div>
        )}

        {/* Text */}
        <div className="flex flex-col items-center gap-1">
          <div
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-center font-header"
            style={{
              background:
                'linear-gradient(to right, var(--color-primary), var(--color-primary-accent))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Jonathan Maskew
          </div>
          {/* <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">
          Software Engineer
        </div> */}
          <div className="text-center">
            <TypewriterText
              className="text-2xl md:text-3xl lg:text-4xl font-bold"
              texts={[
                { text: 'AI Enthusiast', icon: Sparkles },
                { text: 'Full-stack Engineer', icon: Code },
                { text: 'Front-end Connoisseur', icon: SquareMousePointer },
                { text: 'Design Aficionado', icon: Paintbrush },
                { text: 'Idea Generator', icon: Lightbulb },
                { text: 'User Experience Architect', icon: User },
              ]}
            />
          </div>
        </div>

        {/* <Button
        text="Scroll to see more"
        imagery={ChevronDown}
        clickDetail="#about"
        imageryOnly={true}
      /> */}
      </div>

      <div className="flex flex-col gap-2 lg:gap-3 w-full">
        <span className="text-xs leading-tight font-header font-bold">
          At a Glance...
        </span>

        <Chatbot mode="inline" />

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-4 gap-3 w-full">
          {highlights.map((highlight, index) => (
            <InnerHighlight
              key={index}
              title={highlight.title}
              text={highlight.text}
              onClick={highlight.onClick}
              color={highlight.color}
              className="h-full"
              orientation="horizontal"
              classNames={{
                container: '!p-3 !gap-1 !rounded-2xl',
                header: '!gap-2',
                title: '!text-[10px] leading-tight',
                text: '!text-[10px] leading-tight opacity-80',
              }}
            >
              {highlight.children}
            </InnerHighlight>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden w-full">
          <Carousel className="!gap-2 !pb-0">
            {highlights.map((highlight, index) => (
              <CarouselItem key={index} className="w-[250px]">
                <InnerHighlight
                  title={highlight.title}
                  text={highlight.text}
                  onClick={highlight.onClick}
                  className="text-xs h-full"
                  orientation="horizontal"
                  color={highlight.color}
                  classNames={{
                    container: '!p-3 !gap-1 !rounded-2xl',
                    header: '!gap-2',
                    title: '!text-[10px] leading-tight',
                    text: '!text-[10px] leading-tight opacity-80',
                  }}
                >
                  {highlight.children}
                </InnerHighlight>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </SectionWrapper>
  );
}
