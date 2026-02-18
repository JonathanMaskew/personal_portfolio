'use client';

import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import ButtonRow from '../Button/ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import HighlightHero from '../HighlightHero';
import { getAboutData } from '@/data/about';
import { useModalContext } from '@/context/ModalContext';
import Highlights from '../Highlights';

export default function About() {
  const aboutData = getAboutData();
  const { openExperienceModal } = useModalContext();

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-2 md:gap-4">
        <div
          className={`font-bold underline underline-offset-[3px] md:underline-offset-[4px] decoration-[4px] md:decoration-[5px] font-header text-4xl md:text-5xl`}
          style={{
            textDecorationColor: 'var(--color-primary)',
          }}
        >
          Hi, I'm Jonathan!{' '}
        </div>

        <span className="text-base lg:text-lg max-w-[90%] lg:max-w-[75%]">
          As a Full-stack Engineer passionate about Front-end Development, I
          combine technical expertise with creative leadership to build
          scalable, user-focused experiences.
        </span>

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

      {/* <Carousel>
        {highlights.map((highlight, index) => (
          <CarouselItem
            key={highlight.id || index}
            className={carouselItemStyle}
          >
            <HighlightFeature
              title={highlight.title}
              imagery={highlight.imagery}
              subtitle={highlight.subtitle}
              body={highlight.body}
              color={highlight.color}
              onClick={
                highlight.experienceId
                  ? () => {
                      openExperienceModal(highlight.experienceId!);
                    }
                  : undefined
              }
              actionButton={highlight.highlightChildren}
            />
          </CarouselItem>
        ))}
      </Carousel> */}

      {/* <SectionWrapper className="!py-0"> */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 w-full">
        {aboutData.map((data) => {
          const styles: {
            className?: string;
            subtitleClassName?: string;
            chipsClassName?: string;
          } =
            {
              'modern-tech-stack': { className: 'md:row-span-2' },
              'design-engineering': {
                subtitleClassName: 'max-w-[70%]',
                chipsClassName: 'max-w-[55%]',
              },
            }[data.id] || {};

          return (
            <HighlightHero
              key={data.id}
              title={data.title || ''}
              subtitle={data.subtitle}
              chips={data.keywords}
              className={styles.className}
              subtitleClassName={styles.subtitleClassName}
              chipsClassName={styles.chipsClassName}
              color={data.color}
            >
              {data.highlightChildren}
            </HighlightHero>
          );
        })}
      </div>
      {/* </SectionWrapper> */}
    </SectionWrapper>
  );
}
