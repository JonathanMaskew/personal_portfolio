'use client';
import { GraduationCap } from 'lucide-react';
import purdueLogo from '@/assets/images/purdue_logo.png';
import htfLogo from '@/assets/images/htf_logo_white.png';
import SectionHeader from '../SectionHeader';
import HighlightDetailed from '../HighlightDetailed';
import HighlightFeature from '../HighlightFeature';
import { useState } from 'react';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';

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
        'Mentored four project teams on UX/UI principles and provided resources to translate Figma mockups into front-end code.',
        'Established branded components in React to streamline development and maintain consistency across all team projects.',
        'Designed marketing materials in Figma leading to a nearly 90% increase in applicants year-over-year, shattering previous records.',
      ],
    },
    {
      color: '#03C652',
      imagery: htfLogo,
      title: 'Secretary',
      subtitle: 'Hack the Future',
      subheading: 'Purdue University, November 2023 - May 2024',
      body: 'Oversaw club logistics, including event planning, member communications, and administrative tasks, to keep members engaged.',
      bullets: [
        'Oversaw club logistics, including event planning, member communications, and administrative tasks, to keep members engaged.',
      ],
    },
    {
      color: '#277D4A',
      imagery: htfLogo,
      title: 'Software Developer',
      subtitle: 'Hack the Future',
      subheading: 'Purdue University, Sep 2021 - May 2022',
      body: 'Worked with a team of eight to deliver a website on schedule that allows Leadership Lafayette to collect and browse testimonials.',
      bullets: [
        'Worked with a team of eight to deliver a website on schedule that allows Leadership Lafayette to collect and browse testimonials.',
        'Developed front-end interfaces using React that mimicked the Designer’s mockups and integrated with a MongoDB database.',
      ],
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
    <div className="flex flex-col gap-8 p-12 w-full">
      <SectionHeader icon={GraduationCap} title="Education" />

      <HighlightFeature
        color="#CFB991"
        imagery={purdueLogo}
        title="Bachelor of Science in Computer Science"
        subtitle="with a concentration in Software Engineering"
        subheading="Purdue University, 2020 - 2024"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 w-full">
          <HighlightFeature
            color="#4B4B4B"
            title="GPA"
            subtitle="3.69 /4.0"
            nested={true}
          />
          <HighlightFeature
            color="#4B4B4B"
            title="Dean's List"
            subtitle="Spring 2022 - Fall 2023"
            nested={true}
          />
          <HighlightFeature
            color="#4B4B4B"
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
            />
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
    </div>
  );
}
