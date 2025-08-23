import type { Experience } from '@/types';
import myheloLogo from '@/assets/images/myhelo_logo.png';
import allegionLogo from '@/assets/images/allegion_logo.png';
import qualifiLogo from '@/assets/images/qualifi_logo.png';
import texMexyLogo from '@/assets/images/texy_mexy_logo.png';
import noblesvilleAthleticClubLogo from '@/assets/images/noblesville_athletic_club_logo.png';
import {
  Bot,
  ChefHat,
  ExternalLink,
  PillBottle,
  ShieldCheck,
  SquarePlay,
  UserRoundPlus,
} from 'lucide-react';
import Chips from '@/components/Chips';
import { Button } from '@/components/Button';
import ButtonRow from '@/components/ButtonRow';
import ModalSection from '@/components/ModalSection';

export const getJobsData = (): Experience[] => [
  {
    id: 'myhelo',
    imagery: myheloLogo,
    color: '#2396F0',
    subtitle: 'myhELO',
    title: 'Software Engineer',
    subheading: 'Full-time, June 2024 - Present',
    body: "Engineer new features using a custom JavaScript framework and PHP, empowering doctor's offices nationwide and giving thousands of patients access to their health data.",
    highlightChildren: (
      <Chips
        strings={[
          'JavaScript',
          'Front-end',
          'Full-stack',
          'Large Language Models',
          'UI/UX Design',
          'Figma',
          'Employee Onboarding',
        ]}
      />
    ),
    coreBullets: [
      'Streamline front-end development by building reusable, documented front-end components that reduce code redundancy.',
      'Onboard new software engineers through training and guidance to accelerate their understanding of the codebase.',
      'Establish a Figma component library to enable design-to-development workflows and ensure intuitive, consistent experiences.',
      'Present progress demonstrations directly to the CEO and Director of Software Development to gain feedback on priority projects.',
    ],
    highlights: [
      {
        icon: Bot,
        title: 'Utilize an LLM to Automate User Import',
        text: 'Pioneer a tool that leverages a Large Language Model to intelligently parse and import user data from an unstructured CSV file, introducing automation to a tedious workflow that significantly reduces user import times.',
      },
      {
        icon: PillBottle,
        title: 'Full-Stack Rebuild of e-Prescribing Infrastructure',
        text: 'Led a full-stack rebuilding of the e-prescribing infrastructure by rewriting all front-end and back-end files and integrating with third-party APIs, increasing reliability and functionality.',
      },
      {
        icon: UserRoundPlus,
        title: 'Improve User Activation Through Improved Onboarding',
        text: 'Improve user activation by building a workflow to guide new users through password creation, profile setup, and initial training.',
      },
      {
        icon: ShieldCheck,
        title: 'Strengthen Security with Multi-Factor Authentication',
        text: 'Strengthen security by implementing a reusable multi-factor authentication component that supports email, text, and passkey.',
      },
    ],
    bullets: [],
  },
  {
    id: 'allegion',
    imagery: allegionLogo,
    color: '#F26F21',
    subtitle: 'Allegion',
    title: 'Software Engineer',
    subheading: 'Intern, May 2023 - August 2023',
    body: 'Integrated with backend APIs to develop a scalable announcements feature within a component-based Angular site, allowing hundreds of users to access announcements and administrators to send targeted announcements.',
    highlightChildren: (
      <Chips strings={['Angular', 'Angular Material', 'Front-end', 'Scrum']} />
    ),
    coreBullets: [
      'Translated high-fidelity mockups to front-end code that conform with user experience specifications and feedback.',
      'Collaborated daily with Product Owner, Interaction Designer, and Backend Developer interns, following the Scrum methodology.',
    ],
    bullets: [],
    modalChildren: (
      <ButtonRow className="justify-center">
        <Button
          icon={ExternalLink}
          newTab={true}
          text="PDF of Report Out Presentation"
          clickDetail="/pdfs/allegion_report_out.pdf"
          background
          color="#F26F21"
        />
      </ButtonRow>
    ),
  },
  {
    id: 'qualifi',
    imagery: qualifiLogo,
    color: '#6952E7',
    subtitle: 'Qualifi',
    title: 'Software Engineer',
    subheading: 'Intern, May 2022 - August 2022',
    body: 'Shipped new features and improved usability within a Next.js codebase by translating designs into front-end code.',
    highlightChildren: (
      <Chips
        strings={[
          'Next.js',
          'Tailwind CSS',
          'TypeScript',
          'Front-end',
          'Scrum',
          'React Testing Library',
        ]}
      />
    ),
    coreBullets: [
      'Followed the Scrum methodology to communicate daily with the Engineering, Product, and Product Designer teams.',
      'Ensured new contributions maintained system reliability and functionality by implementing test cases.',
    ],
    bullets: [],
  },
];

export const getMoreJobsData = (): Experience[] => [
  {
    id: 'noblesville-youth-tennis',
    color: '#696969',
    subtitle: 'Noblesville Youth Tennis',
    title: 'Tennis Camp Instructor',
    subheading: 'Seasonal, June 2018 - July 2021',
    body: 'Supervised groups of approximately ten children daily while providing engaging instruction.',
    highlightChildren: <Chips strings={['Leadership', 'Lesson Planning']} />,
    coreBullets: [],
  },
  {
    id: 'texy-mexy-website-designer',
    color: '#E9CD2E',
    imagery: texMexyLogo,
    subtitle: 'Texy Mexy',
    title: 'Website Designer',
    subheading: 'Part-time, October 2018 - January 2021',
    body: 'Created a WordPress website for a local tex-mex restaurant to promote products, market events, and expand reach.',
    highlightChildren: (
      <Chips strings={['WordPress', 'Web Development', 'Web Design']} />
    ),
    coreBullets: [],
  },
  {
    id: 'texy-mexy-kitchen-lead',
    color: '#E9CD2E',
    imagery: texMexyLogo,
    subtitle: 'Texy Mexy',
    title: 'Kitchen Lead',
    subheading: 'Part-time, April 2016 - January 2021',
    body: 'Led and trained the kitchen team of three to six people in a high-paced atmosphere to quickly complete customer orders.',
    highlights: [
      {
        icon: ChefHat,
        title: 'Keep Kitchen Running Efficiently',
        text: 'Designed signage and logging documents to ensure quick, accurate, and efficient kitchen operations.',
        children: (
          <ButtonRow>
            <Button
              icon={ExternalLink}
              newTab={true}
              text="PDF of Assembly Cheat Sheet"
              clickDetail="/pdfs/texy_mexy_limited_assembly_cheat_sheet.pdf"
              background
              color="#E9CD2E"
            />
            <Button
              icon={ExternalLink}
              newTab={true}
              text="PDF of Stovetop Cheat Sheet"
              clickDetail="/pdfs/texy_mexy_limited_stove_top_cheat_sheet.pdf"
              background
              color="#E9CD2E"
            />
            <Button
              icon={ExternalLink}
              newTab={true}
              text="PDF of Product Waste Log"
              clickDetail="/pdfs/texy_mexy_limited_product_waste_log.pdf"
              background
              color="#E9CD2E"
            />
          </ButtonRow>
        ),
      },
    ],
    highlightChildren: (
      <Chips
        strings={['Leadership', 'Document Design', 'Employee Onboarding']}
      />
    ),
    coreBullets: [],
  },
  {
    id: 'premier-youth-concession-attendant',
    color: '#696969',
    subtitle: 'Premier Youth Fundraising Inc',
    title: 'Concession Attendant',
    subheading: 'Part-time, March 2018 - 2021',
    body: 'Worked with people of all ages to get food out quickly and accurately at sports stadium concession stands; set up, restock, and tear down.',
    // highlightChildren: (
    //   <Chips strings={['Quick Service', 'Intercultural Communication']} />
    // ),
    coreBullets: [],
  },
  {
    id: 'private-tennis-lessons-instructor',
    color: '#696969',
    subtitle: 'Self-employed',
    title: 'Private Tennis Lessons Instructor',
    subheading: 'Part-time, June 2018 - July 2020',
    body: 'Instructed elementary and middle school players weekly to enhance their tennis skill set.',
    highlightChildren: (
      <Chips strings={['Entrepreneurship', 'Leadership', 'Lesson Planning']} />
    ),
    coreBullets: [],
  },
  {
    id: 'nac-website-designer-and-manager',
    color: '#D95A00',
    subtitle: 'Noblesville Athletic Club',
    imagery: noblesvilleAthleticClubLogo,
    title: 'Website Designer and Manager',
    subheading: 'Part-time, December 2015 - November 2017',
    body: 'Designed and updated a website for a local gym viewed thousands of times a month.',
    highlightChildren: (
      <Chips strings={['GoDaddy', 'Web Development', 'Web Design']} />
    ),
    modalChildren: (
      <ModalSection title="Website Demo" icon={SquarePlay}>
        <div>A quick demo of the website I designed and managed.</div>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8NI1uC1HxFM?si=e7o09LAt0KIRExJa"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </ModalSection>
    ),
    coreBullets: [],
  },
  {
    id: 'nac-email-marketing',
    color: '#D95A00',
    subtitle: 'Noblesville Athletic Club',
    imagery: noblesvilleAthleticClubLogo,
    title: 'Email Marketing',
    subheading: 'Part-time, December 2015 - November 2017',
    body: 'Curated a monthly newsletter sent to hundreds of email addresses by working with the leadership team.',
    highlightChildren: <Chips strings={['GoDaddy', 'Email Marketing']} />,
    coreBullets: [],
  },
  {
    id: 'nac-childcare',
    color: '#D95A00',
    subtitle: 'Noblesville Athletic Club',
    imagery: noblesvilleAthleticClubLogo,
    title: 'Childcare',
    subheading: 'Part-time, December 2015 - November 2017',
    body: 'Display excellent leadership skills while monitoring a room of kids of all ages while parents exercised in various other parts of the building.',
    highlightChildren: <Chips strings={['Leadership']} />,
    coreBullets: [],
  },
  {
    id: 'll-davis-farms',
    color: '#696969',
    subtitle: 'L&L Davis Farms',
    title: 'Website Designer and Manager',
    subheading: 'Part-time, June 2016 - June 2017',
    body: 'Produced a public, navigable website for a local farm to grow its small business.',
    highlightChildren: (
      <Chips strings={['GoDaddy', 'Web Development', 'Web Design']} />
    ),
    coreBullets: [],
  },
];
