'use client';

import { Star } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Carousel, { CarouselItem } from '../Carousel';
import { useModal } from '@/hooks/useModal';
import { useState } from 'react';
import Modal from '../Modal';
import ExperienceDetails from '@/components/ExperienceDetails';
import { getJobsData } from '@/data/jobs';
import { getEducationData } from '@/data/education';
import HighlightFeature from '../HighlightFeature';
import { getHighlightsData } from '@/data/highlights';
import { Button } from '../Button';
import ButtonRow from '../ButtonRow';
import { getFooterData } from '@/data/footer';
import myheloLogo from '@/assets/images/myhelo_logo.png';
import htfLogo from '@/assets/images/hack_the_future/htf_logo.png';
import jsLogo from '@/app/Js_logo.png';

export default function Highlights() {
  const { modalOpened, openModal, closeModal } = useModal();
  const [openedExperienceId, setOpenedExperienceId] = useState<string | null>(
    null
  );

  const EDUCATION = getEducationData();
  const JOBS = getJobsData();
  const FOOTER = getFooterData();

  const openedExperience = openedExperienceId
    ? JOBS.find((job) => job.id === openedExperienceId) ||
      EDUCATION.find((education) => education.id === openedExperienceId) ||
      FOOTER.find((footer) => footer.id === openedExperienceId)
    : null;
  const carouselItemStyle = 'w-[300px] md:w-[400px]';

  const highlights = getHighlightsData(setOpenedExperienceId, openModal);

  return (
    <SectionWrapper
      icon={Star}
      title="Highlights"
      subtext={
        <div className="flex flex-col gap-2">
          <div>Major experiences and accomplishments worth noting.</div>
          <ButtonRow>
            <div>Featured links:</div>
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
          </ButtonRow>
        </div>
      }
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
                      setOpenedExperienceId(highlight.experienceId || null);
                      openModal();
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
      <Modal
        open={modalOpened && !!openedExperience}
        onCloseCallback={() => {
          setOpenedExperienceId(null);
          closeModal();
        }}
        color={openedExperience?.color || ''}
      >
        {openedExperience && <ExperienceDetails data={openedExperience} />}
      </Modal>
    </SectionWrapper>
  );
}
