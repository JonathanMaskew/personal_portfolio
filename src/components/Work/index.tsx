'use client';

import {
  Bot,
  BriefcaseBusiness,
  PillBottle,
  UserRoundPlus,
} from 'lucide-react';
import Chips from '../Chips';
import myheloLogo from '@/assets/images/myhelo_logo.png';
import allegionLogo from '@/assets/images/allegion_logo.png';
import qualifiLogo from '@/assets/images/qualifi_logo.png';
import HighlightDetailed from '../HighlightDetailed';
import { useModal } from '@/hooks/useModal';
import { useState } from 'react';
import Modal from '../Modal';
import HighlightFeature from '../HighlightFeature';
import SectionWrapper from '../SectionWrapper';

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

  const { modalOpened, openModal, closeModal } = useModal();
  const [openedJobIndex, setOpenedJobIndex] = useState<number | null>(null);

  const openedJob =
    openedJobIndex !== null && jobData[openedJobIndex]
      ? jobData[openedJobIndex]
      : null;

  return (
    <SectionWrapper
      icon={BriefcaseBusiness}
      title="Work Experience"
      subtext={
        <>
          <div>
            Passionate about building exceptional user experience, much of my
            experience has been front-end focused, using frameworks including
            Next.js, React, Angular, and more.
          </div>
          <div>
            Recent major tasks at myhELO include a full-stack overhaul of an
            e-prescribing workflow, pioneering a data-import tool that leverages
            an open-sourced Large Language Model, and improving security through
            multi-factor authentication.
          </div>
        </>
      }
    >
      <div className="flex flex-col items-center w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {jobData.map((job, index) => (
            <div
              key={index}
              className={`${index === 0 ? 'col-span-full' : ''}`}
            >
              <HighlightDetailed
                color={job.bgColor}
                imagery={job.logo}
                title={job.jobTitle}
                subtitle={job.company}
                subheading={job.timeRange}
                body={job.jobDescription}
                onClickCallback={() => {
                  setOpenedJobIndex(index);
                  openModal();
                }}
              >
                <Chips strings={job.keywords} />
              </HighlightDetailed>
            </div>
          ))}
        </div>
      </div>
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
