'use client';
import { GraduationCap, Plus } from 'lucide-react';
import purdueLogo from '@/assets/images/purdue_logo.png';
import htf_logo_white from '@/assets/images/hack_the_future/htf_logo_white.png';
import HighlightDetailed from '../HighlightDetailed';
import HighlightFeature from '../HighlightFeature';
import htf_spooky from '@/assets/images/hack_the_future/htf_spooky.png';
import htf_thankful from '@/assets/images/hack_the_future/htf_thankful.png';
import htf_your_future from '@/assets/images/hack_the_future/htf_your_future.png';
import htf_snowglobe from '@/assets/images/hack_the_future/htf_snowglobe.png';
import htf_profile from '@/assets/images/hack_the_future/htf_profile.png';
import htf_pizza from '@/assets/images/hack_the_future/htf_pizza.png';
import htf_ornament from '@/assets/images/hack_the_future/htf_ornament.png';
import htf_neon from '@/assets/images/hack_the_future/htf_neon.png';
import htf_logo from '@/assets/images/hack_the_future/htf_logo.png';
import htf_jurassic from '@/assets/images/hack_the_future/htf_jurassic.png';
import htf_innovateher from '@/assets/images/hack_the_future/htf_innovateher.png';
import htf_graduation from '@/assets/images/hack_the_future/htf_graduation.png';
import htf_gameshow from '@/assets/images/hack_the_future/htf_gameshow.png';
import htf_code from '@/assets/images/hack_the_future/htf_code.png';
import htf_code_round from '@/assets/images/hack_the_future/htf_code_round.png';
import htf_catapult from '@/assets/images/hack_the_future/htf_catapult.png';
import htf_carousel_of_progress from '@/assets/images/hack_the_future/htf_carousel_of_progress.png';
import htf_back_to_the_future from '@/assets/images/hack_the_future/htf_back_to_the_future.png';
import { useState } from 'react';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import SectionWrapper from '../SectionWrapper';
import Chips from '../Chips';
import Image from 'next/image';
import { Button } from '../Button';
import Carousel, { CarouselItem } from '../Carousel';
import ExperienceDetails from '../ExperienceDetails';
import { EDUCATION } from '@/data/education';

export default function Work() {
  const htfEducationData = EDUCATION;

  const { modalOpened, openModal, closeModal } = useModal();
  const [openedEducationIndex, setOpenedEducationIndex] = useState<
    number | null
  >(null);
  const openedEducation =
    openedEducationIndex !== null && htfEducationData[openedEducationIndex]
      ? htfEducationData[openedEducationIndex]
      : null;

  return (
    <SectionWrapper icon={GraduationCap} title="Education">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
        <div className="col-span-full">
          <HighlightDetailed
            color="#CFB991"
            imagery={purdueLogo}
            title="Bachelor of Science in Computer Science"
            subtitle="Concentration in Software Engineering"
            subheading="Purdue University, 2020 - 2024"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
              <HighlightDetailed
                color="#000000"
                title="GPA"
                subtitle="3.69 /4.0"
                nested={true}
              />
              <HighlightDetailed
                color="#000000"
                title="Dean's List"
                subtitle="Spring 2022 - Fall 2023"
                nested={true}
              />
              <HighlightDetailed
                color="#000000"
                title="Semester Honors"
                subtitle="Fall 2021 - Fall 2023"
                nested={true}
              />
            </div>
          </HighlightDetailed>
        </div>

        {htfEducationData.map((item, index) => (
          <div key={index} className={`${index === 0 ? 'col-span-full' : ''}`}>
            <HighlightDetailed
              color={item.color}
              imagery={item.imagery}
              title={item.title}
              subtitle={item.subtitle}
              subheading={item.subheading}
              body={item.body}
              onClick={() => {
                setOpenedEducationIndex(index);
                openModal();
              }}
              actionButton={
                <Button
                  icon={Plus}
                  text="More"
                  clickDetail={() => {
                    setOpenedEducationIndex(0);
                    openModal();
                  }}
                />
              }
            >
              <div className="flex flex-col gap-6">
                <Chips strings={item.keywords} />
                {item.images && (
                  <div className="bg-white/30 rounded-2xl p-4">
                    <Carousel color={item.color}>
                      {item.images.map((img, img_index) => (
                        <CarouselItem key={img_index} className="w-18">
                          <Image
                            src={img}
                            alt={`Hack the Future logo ${img_index}`}
                            className="w-18 h-18 object-contain"
                          />
                        </CarouselItem>
                      ))}
                    </Carousel>
                  </div>
                )}
              </div>
            </HighlightDetailed>
          </div>
        ))}
      </div>
      {openedEducation && (
        <Modal
          color={openedEducation.color}
          open={modalOpened && !!openedEducation}
          onCloseCallback={() => {
            setOpenedEducationIndex(null);
            closeModal();
          }}
        >
          {openedEducation && (
            <>
              <ExperienceDetails data={openedEducation} />
            </>
          )}
        </Modal>
      )}
    </SectionWrapper>
  );
}
