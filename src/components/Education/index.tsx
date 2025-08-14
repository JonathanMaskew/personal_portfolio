'use client';
import { GraduationCap } from 'lucide-react';
import purdueLogo from '@/assets/images/purdue_logo.png';
import htfLogo from '@/assets/images/htf_logo_white.png';
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

export default function Work() {
  const htfEducationData = [
    {
      color: '#00EB88',
      imagery: htfLogo,
      title: 'Design Director',
      subtitle: 'Hack the Future',
      subheading: 'Purdue University, March 2022 - May 2024',
      body: 'Mentored four project teams on UX/UI principles and provided resources to translate Figma mockups into front-end code.',
      bullets: [
        'Established branded components in React to streamline development and maintain consistency across all team projects.',
        'Designed marketing materials in Figma leading to a nearly 90% increase in applicants year-over-year, shattering previous records.',
      ],
      keywords: ['Figma', 'UI/UX Design', 'Front-end', 'Marketing'],
      images: [
        htf_logo,
        htf_profile,
        htf_jurassic,
        htf_code,
        htf_spooky,
        htf_thankful,
        htf_ornament,
        htf_snowglobe,
        htf_your_future,
        htf_innovateher,
        htf_catapult,
        htf_gameshow,
        htf_code_round,
        htf_carousel_of_progress,
        htf_back_to_the_future,
        htf_neon,
        htf_graduation,
        htf_pizza,
      ],
    },
    {
      color: '#03C652',
      imagery: htfLogo,
      title: 'Secretary',
      subtitle: 'Hack the Future',
      subheading: 'Purdue University, November 2023 - May 2024',
      body: 'Oversaw club logistics, including event planning, member communications, and administrative tasks, to keep members engaged.',
      bullets: [],
      keywords: ['Communication', 'Event Planning'],
    },
    {
      color: '#277D4A',
      imagery: htfLogo,
      title: 'Software Developer',
      subtitle: 'Hack the Future',
      subheading: 'Purdue University, Sep 2021 - May 2022',
      body: 'Worked with a team of eight to deliver a website on schedule that allows Leadership Lafayette to collect and browse testimonials.',
      bullets: [
        'Developed front-end interfaces using React that mimicked the Designer’s mockups and integrated with a MongoDB database.',
      ],
      keywords: ['React', 'MongoDB', 'Front-end'],
    },
  ];

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
      <HighlightFeature
        color="#CFB991"
        imagery={purdueLogo}
        title="Bachelor of Science in Computer Science"
        subtitle="with a concentration in Software Engineering"
        subheading="Purdue University, 2020 - 2024"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
          <HighlightFeature
            color="#000000"
            title="GPA"
            subtitle="3.69 /4.0"
            nested={true}
          />
          <HighlightFeature
            color="#000000"
            title="Dean's List"
            subtitle="Spring 2022 - Fall 2023"
            nested={true}
          />
          <HighlightFeature
            color="#000000"
            title="Semester Honors"
            subtitle="Fall 2021 - Fall 2023"
            nested={true}
          />
        </div>
      </HighlightFeature>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        {htfEducationData.map((item, index) => (
          <div key={index} className={`${index === 0 ? 'row-span-2' : ''}`}>
            <HighlightDetailed
              color={item.color}
              imagery={item.imagery}
              title={item.title}
              subtitle={item.subtitle}
              subheading={item.subheading}
              body={item.body}
              onClickCallback={() => {
                setOpenedEducationIndex(index);
                openModal();
              }}
            >
              <div className="flex flex-col gap-6">
                <Chips strings={item.keywords} />
                {item.images && (
                  <div className="flex flex-wrap gap-4 justify-center bg-white/20 rounded-2xl p-4">
                    {item.images.map((img, img_index) => (
                      <Image
                        key={img_index}
                        src={img}
                        alt={`Hack the Future logo ${img_index}`}
                        className="w-18 object-contain"
                      />
                    ))}
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
              <HighlightFeature
                imagery={openedEducation.imagery}
                title={openedEducation.title}
                subtitle={openedEducation.subtitle}
                subheading={openedEducation.subheading}
                body={openedEducation.body}
                nested={true}
              />
            </>
          )}
        </Modal>
      )}
    </SectionWrapper>
  );
}
