'use client';

import {
  Bot,
  BriefcaseBusiness,
  ChevronDown,
  ChevronUp,
  PillBottle,
  Plus,
  UserRoundPlus,
} from 'lucide-react';
import Chips from '../Chips';
import myheloLogo from '@/assets/images/myhelo_logo.png';
import allegionLogo from '@/assets/images/allegion_logo.png';
import qualifiLogo from '@/assets/images/qualifi_logo.png';
import texMexyLogo from '@/assets/images/texy_mexy_logo.png';
import noblesvilleAthleticClubLogo from '@/assets/images/noblesville_athletic_club_logo.png';
import HighlightDetailed from '../HighlightDetailed';
import { useModal } from '@/hooks/useModal';
import { useState } from 'react';
import Modal from '../Modal';
import HighlightFeature from '../HighlightFeature';
import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import type { StaticImageData } from 'next/image';

export default function Work() {
  const jobData = [
    {
      logo: myheloLogo,
      bgColor: '#2396F0',
      company: 'myhELO',
      jobTitle: 'Software Engineer',
      timeRange: 'Full-time, June 2024 - Present',
      jobDescription:
        'Engineer new features using a custom JavaScript framework and PHP, empowering doctor’s offices nationwide and giving thousands of patients access to their health data.',
      keywords: [
        'JavaScript',
        'Full-stack',
        'Large Language Models',
        'UI/UX Design',
        'Figma',
      ],
      highlights: [
        {
          icon: Bot,
          text: 'Pioneer a tool that leverages a Large Language Model to intelligently parse and import user data from an unstructured CSV file, introducing automation to a tedious workflow that significantly reduces user import times.',
        },
        {
          icon: PillBottle,
          text: 'Led a full-stack rebuilding of the e-prescribing infrastructure by rewriting all front-end and back-end files and integrating with third-party APIs, increasing reliability and functionality.',
        },
        {
          icon: UserRoundPlus,
          text: 'Improve user activation by building a workflow to guide new users through password creation, profile setup, and initial training.',
        },
      ],
      bullets: [
        'Streamline front-end development by building reusable, documented front-end components that reduce code redundancy.',
        'Strengthen security by implementing a reusable multi-factor authentication component that supports email, text, and passkey.',
        'Onboard new software engineers through training and guidance to accelerate their understanding of the codebase.',
        'Establish a Figma component library to enable design-to-development workflows and ensure intuitive, consistent experiences.',
        'Present progress demonstrations directly to the CEO and Director of Software Development to gain feedback on priority projects.',
      ],
    },
    {
      logo: allegionLogo,
      bgColor: '#F26F21',
      company: 'Allegion',
      jobTitle: 'Software Engineer',
      timeRange: 'Intern, May 2023 - August 2023',
      jobDescription:
        'Integrated with backend APIs to develop a scalable announcements feature within a component-based Angular site, allowing hundreds of users to access announcements and administrators to send targeted announcements.',
      keywords: ['Angular', 'Angular Material', 'Front-end', 'Scrum'],
      bullets: [
        'Translated high-fidelity mockups to front-end code that conform with user experience specifications and feedback.',
        'Collaborated daily with Product Owner, Interaction Designer, and Backend Developer interns, following the Scrum methodology.',
      ],
    },
    {
      logo: qualifiLogo,
      bgColor: '#6952E7',
      company: 'Qualifi',
      jobTitle: 'Software Engineer',
      timeRange: 'Intern, May 2022 - August 2022',
      jobDescription:
        'Shipped new features and improved usability within a Next.js codebase by translating designs into front-end code.',
      keywords: [
        'Next.js',
        'Tailwind CSS',
        'TypeScript',
        'Front-end',
        'Scrum',
        'React Testing Library',
      ],
      bullets: [
        'Followed the Scrum methodology to communicate daily with the Engineering, Product, and Product Designer teams.',
        'Ensured new contributions maintained system reliability and functionality by implementing test cases.',
      ],
    },
  ];

  const moreJobData = [
    {
      bgColor: '#ffffff',
      company: 'Noblesville Youth Tennis',
      jobTitle: 'Tennis Camp Instructor',
      timeRange: 'Seasonal, June 2018 - July 2021',
      jobDescription:
        'Supervised groups of approximately ten children daily while providing engaging instruction.',
      keywords: [
        'Lesson Planning',
        'Sports Development',
        'Working With Children',
        'Tennis Instruction',
      ],
    },
    {
      bgColor: '#E9CD2E',
      logo: texMexyLogo,
      company: 'Texy Mexy',
      jobTitle: 'Website Designer',
      timeRange: 'Part-time, October 2018 - January 2021',
      jobDescription:
        'Created a WordPress website for a local tex-mex restaurant to promote products, market events, and expand reach.',
      keywords: [
        'Web Development',
        'WordPress',
        'Web Design',
        'Digital Marketing',
      ],
    },
    {
      bgColor: '#E9CD2E',
      logo: texMexyLogo,
      company: 'Texy Mexy',
      jobTitle: 'Kitchen Lead',
      timeRange: 'Part-time, April 2016 - January 2021',
      jobDescription:
        'Led and trained the kitchen team of three to six people in a high-paced atmosphere to quickly complete customer orders.',
      keywords: [
        'Quick Service',
        'Cooking',
        'Fast Casual',
        'Intercultural Communication',
        'Employee Training',
        'Multi-Cultural Team Leadership',
      ],
    },
    {
      bgColor: '#ffffff',
      company: 'Premier Youth Fundraising Inc',
      jobTitle: 'Concession Attendant',
      timeRange: 'Part-time, March 2018 - 2021',
      jobDescription:
        'Worked with people of all ages to get food out quickly and accurately at sports stadium concession stands; set up, restock, and tear down.',
      keywords: ['Quick Service', 'Intercultural Communication'],
    },
    {
      bgColor: '#ffffff',
      company: 'Self-employed',
      jobTitle: 'Private Tennis Lessons Instructor',
      timeRange: 'Part-time, June 2018 - July 2020',
      jobDescription:
        'Instructed elementary and middle school players weekly to enhance their tennis skill set.',
      keywords: [
        'Lesson Planning',
        'Sports Development',
        'Working With Children',
        'Tennis Instruction',
      ],
    },
    {
      bgColor: '#D95A00',
      company: 'Noblesville Athletic Club',
      logo: noblesvilleAthleticClubLogo,
      jobTitle: 'Website Designer and Manager',
      timeRange: 'Part-time, December 2015 - November 2017',
      jobDescription:
        'Designed and updated a website for a local gym viewed thousands of times a month.',
      keywords: [
        'Web Development',
        'GoDaddy',
        'Web Design',
        'Digital Marketing',
      ],
    },
    {
      bgColor: '#D95A00',
      company: 'Noblesville Athletic Club',
      logo: noblesvilleAthleticClubLogo,
      jobTitle: 'Email Marketing',
      timeRange: 'Part-time, December 2015 - November 2017',
      jobDescription:
        'Curated a monthly newsletter sent to hundreds of email addresses by working with the leadership team.',
      keywords: ['Digital Marketing'],
    },
    {
      bgColor: '#ffffff',
      company: 'L&L Davis Farms',
      jobTitle: 'Website Designer and Manager',
      timeRange: 'Part-time, June 2016 - June 2017',
      jobDescription:
        'Produced a public, navigable website for a local farm to grow its small business.',
      keywords: [
        'Web Development',
        'GoDaddy',
        'Web Design',
        'Digital Marketing',
      ],
    },
  ];

  const { modalOpened, openModal } = useModal();
  const [openedJobIndex, setOpenedJobIndex] = useState<number | null>(null);

  const [showMore, setShowMore] = useState<boolean>(false);

  const openedJob =
    openedJobIndex !== null && jobData[openedJobIndex]
      ? jobData[openedJobIndex]
      : null;

  return (
    <SectionWrapper
      icon={BriefcaseBusiness}
      title="Work Experience"
      subtext="Experienced in full-stack development, with a focus on building
            user-focused front-end interfaces using frameworks including
            Next.js, React, Angular, and more."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        {jobData.map((job, index) => (
          <div key={index} className={`${index === 0 ? 'col-span-full' : ''}`}>
            <HighlightDetailed
              color={job.bgColor}
              imagery={job.logo}
              title={job.jobTitle}
              subtitle={job.company}
              subheading={job.timeRange}
              body={job.jobDescription}
              onClick={() => {
                setOpenedJobIndex(index);
                openModal();
              }}
              actionButton={
                <Button
                  icon={Plus}
                  text="More"
                  clickDetail={() => {
                    setOpenedJobIndex(index);
                    openModal();
                  }}
                />
              }
            >
              <Chips strings={job.keywords} />
            </HighlightDetailed>
          </div>
        ))}
      </div>
      <div>
        <Button
          text={showMore ? 'Show less' : 'Show more'}
          clickDetail={() => setShowMore(!showMore)}
          icon={showMore ? ChevronUp : ChevronDown}
          className="opacity-60 hover:opacity-100"
        />
      </div>

      {showMore && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
          {moreJobData.map((job, index) => (
            <div key={index}>
              <HighlightDetailed
                color={job.bgColor}
                imagery={job.logo}
                title={job.jobTitle}
                subtitle={job.company}
                subheading={job.timeRange}
                body={job.jobDescription}
              >
                <Chips strings={job.keywords} />
              </HighlightDetailed>
            </div>
          ))}
        </div>
      )}

      <Modal
        open={modalOpened && !!openedJob}
        onCloseCallback={() => {
          setOpenedJobIndex(null);
        }}
        color={openedJob && openedJob.bgColor ? openedJob.bgColor : ''}
      >
        {openedJob && (
          <div className="flex flex-col gap-8">
            <HighlightFeature
              imagery={openedJob.logo}
              title={openedJob.jobTitle}
              subtitle={openedJob.company}
              subheading={openedJob.timeRange}
              body={openedJob.jobDescription}
              nested={true}
            />
            {openedJob.highlights && (
              <div>
                <div className="mb-2 font-bold font-header">Highlights</div>
                <div className="flex flex-col gap-4">
                  {openedJob.highlights.map((highlight, i) => {
                    const IconComponent = highlight.icon;
                    return (
                      <div key={i} className="flex items-start gap-4">
                        <div>
                          <IconComponent size={30} />
                        </div>
                        <div className="text-sm">{highlight.text}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {openedJob.bullets && (
              <div>
                <div className="mb-2 font-bold font-header">
                  Additional responsibilities...
                </div>
                <ul className="list-disc pl-4 space-y-2 text-sm leading-tight">
                  {openedJob.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </Modal>
    </SectionWrapper>
  );
}
