'use client';

import { Spotlight } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import Carousel, { CarouselItem } from './Carousel';
import { useModalContext } from '@/context/ModalContext';
import HighlightFeature from './HighlightFeature';
import { getHighlightsData } from '@/data/highlights';

export default function Highlights() {
  const { openExperienceModal } = useModalContext();

  const carouselItemStyle = 'w-[300px] md:w-[400px]';

  const highlights = getHighlightsData(openExperienceModal);

  return (
    <SectionWrapper
      icon={Spotlight}
      title="Highlights"
      className="rounded-2xl"
      styles={{
        background:
          'linear-gradient(to bottom, color-mix(in srgb, var(--color-foreground), transparent 90%), transparent 50%)',
      }}
    >
      <Carousel>
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
      </Carousel>
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        <HighlightDetailed
          imagery={myheloLogo}
          title="Software Engineer at myhELO"
          subtitle="Current Fulltime Experience"
          color="#2396F0"
          onClick={() => {
            setOpenedExperienceId('myhelo');
            openModal();
          }}
          actionButton={
            <Button
              icon={Plus}
              text="More"
              clickDetail={() => {
                setOpenedExperienceId('myhelo');
                openModal();
              }}
            />
          }
          nested
        ></HighlightDetailed>
        <HighlightDetailed
          imagery={htfLogoWhite}
          title="Design Director for Hack the Future"
          subtitle="Leadership experience in branding, UI/UX design, and marketing"
          color="#00EB88"
          onClick={() => {
            setOpenedExperienceId('htf-design-director');
            openModal();
          }}
          actionButton={
            <Button
              icon={Plus}
              text="More"
              clickDetail={() => {
                setOpenedExperienceId('htf-design-director');
                openModal();
              }}
            />
          }
          nested
        ></HighlightDetailed>
      </div> */}
      {/* <ButtonRow>
        <div>Quick links...</div>
        <Button
          text={'myhELO'}
          imagery={myheloLogo}
          clickDetail={() => {
            setOpenedExperienceId('myhelo');
            openModal();
          }}
          newTab={false}
        />
        <Button
          text={'Design Director'}
          imagery={htfLogo}
          clickDetail={() => {
            setOpenedExperienceId('htf-design-director');
            openModal();
          }}
          newTab={false}
        />
        <Button
          text={'This Site'}
          imagery={jsLogo}
          clickDetail={() => {
            setOpenedExperienceId('this-site');
            openModal();
          }}
          newTab={false}
        />
      </ButtonRow> */}
    </SectionWrapper>
  );
}
