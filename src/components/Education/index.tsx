'use client';
import { BriefcaseBusiness, GraduationCap, Plus } from 'lucide-react';
import purdueLogo from '@/assets/images/purdue_logo.png';
import htfLogo from '@/assets/images/htf_logo_white.png';
import Image from 'next/image';
import SectionHeader from '../SectionHeader';
import HighlightDetailed from '../HighlightDetailed';
import HighlightFeature from '../HighlightFeature';

export default function Work() {
  const htfEducationData = [
    {
      color: '#00EB88',
      image: htfLogo,
      title: 'Design Director',
      subtitle: 'Hack the Future',
      subheading: 'Spring 2022 - Spring 2024',
      body: 'Make things look pretty',
    },
    {
      color: '#03C652',
      image: htfLogo,
      title: 'Secretary',
      subtitle: 'Hack the Future',
      subheading: 'Spring 2022 - Spring 2024',
      body: 'Secretate',
    },
    {
      color: '#277D4A',
      image: htfLogo,
      title: 'Software Developer',
      subtitle: 'Hack the Future',
      subheading: 'Spring 2022 - Spring 2024',
      body: 'Develop soft things',
    },
  ];

  return (
    <div className="flex flex-col gap-8 p-12 h-screen w-full">
      <SectionHeader icon={GraduationCap} title="Education" />

      <HighlightFeature
        color="#CFB991"
        image={purdueLogo}
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
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              subheading={item.subheading}
              body={item.body}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
