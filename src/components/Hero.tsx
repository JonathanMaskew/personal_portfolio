'use client';

import { Plus, Maximize2 } from 'lucide-react';
import { useModalContext } from '@/context/ModalContext';
import { useHashScroll } from '@/hooks/useHashScroll';
import { Button } from './Button';
import ButtonRow from './Button/ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import InnerHighlight from './InnerHighlight';
import SectionWrapper from './SectionWrapper';
import Carousel, { CarouselItem } from './Carousel';
import Chatbot from './Chatbot';
import { getJobsData } from '@/data/jobs';
import { getEducationData } from '@/data/education';

export default function Hero() {
  const { openExperienceModal } = useModalContext();
  const { scrollToHash } = useHashScroll();

  const jobsData = getJobsData();
  const educationData = getEducationData();

  const highlightIds = [
    { id: 'myhelo', type: 'job' },
    { id: 'allegion', type: 'job' },
    { id: 'htf-design-director', type: 'edu' },
    { id: 'purdue', type: 'edu' },
  ];

  const highlights = highlightIds
    .map(({ id, type }) => {
      const data =
        type === 'job'
          ? jobsData.find((j) => j.id === id)
          : educationData.find((e) => e.id === id);

      if (!data) return null;

      return {
        title: data.heroTitle || data.title,
        text: data.heroSubtitle || data.subtitle,
        color: data.color,
        onClick: id === 'purdue' ? undefined : () => openExperienceModal(id),
        children: (
          <div className="flex flex-col gap-0.5 text-[10px] leading-tight">
            {data.highlights
              ?.filter((h) => h.heroTitle)
              .map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-1.5 items-center opacity-80"
                  >
                    <Icon size={11} className="shrink-0" />
                    <span>{item.heroTitle}</span>
                  </div>
                );
              })}
          </div>
        ),
      };
    })
    .filter((h) => h !== null);

  return (
    <SectionWrapper className="min-h-[calc(100dvh-3.5rem)] md:min-h-dvh">
      <div className="flex-grow flex flex-col justify-center items-center gap-8 md:gap-16 w-full">
        {/* {!isMobileLandscape && (
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
        )} */}

        {/* Text */}
        <div className="flex flex-col items-center gap-8 md:gap-10 w-full">
          <div
            className={`font-bold font-header text-center flex flex-col items-center gap-2 md:gap-3 w-full`}
          >
            <span className="text-4xl lg:text-5xl">Hello 👋</span>
            <span
              className="text-5xl lg:text-6xl underline underline-offset-[4px] md:underline-offset-[5px] decoration-[5px] md:decoration-[6px]"
              style={{
                textDecorationColor: 'var(--color-primary)',
              }}
            >
              I'm Jonathan
            </span>{' '}
          </div>

          <span className="text-lg/7 lg:text-2xl/8 lg:max-w-[55%] text-center opacity-90">
            As a Full-stack Engineer passionate about Front-end Development, I
            combine technical expertise with creative leadership to build
            scalable, user-focused experiences.
          </span>

          <ButtonRow className="justify-center">
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
              {highlight.onClick && (
                <div className="absolute right-3 bottom-3 opacity-60 z-10">
                  <Maximize2 size={14} />
                </div>
              )}
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
                  {highlight.onClick && (
                    <div className="absolute right-3 bottom-3 opacity-60 z-10">
                      <Maximize2 size={14} />
                    </div>
                  )}
                </InnerHighlight>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    </SectionWrapper>
  );
}
