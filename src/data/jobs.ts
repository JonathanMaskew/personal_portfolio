import type { Experience } from '@/types';
import myheloLogo from '@/assets/images/myhelo_logo.png';
import allegionLogo from '@/assets/images/allegion_logo.png';
import qualifiLogo from '@/assets/images/qualifi_logo.png';
import texMexyLogo from '@/assets/images/texy_mexy_logo.png';
import noblesvilleAthleticClubLogo from '@/assets/images/noblesville_athletic_club_logo.png';
import { Bot, PillBottle, UserRoundPlus } from 'lucide-react';

export const JOBS: Experience[] = [
  {
    id: 'myhelo',
    imagery: myheloLogo,
    bgColor: '#2396F0',
    company: 'myhELO',
    jobTitle: 'Software Engineer',
    title: 'Software Engineer',
    timeRange: 'Full-time, June 2024 - Present',
    jobDescription:
      "Engineer new features using a custom JavaScript framework and PHP, empowering doctor's offices nationwide and giving thousands of patients access to their health data.",
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
    id: 'allegion',
    imagery: allegionLogo,
    bgColor: '#F26F21',
    company: 'Allegion',
    jobTitle: 'Software Engineer',
    title: 'Software Engineer',
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
    id: 'qualifi',
    imagery: qualifiLogo,
    bgColor: '#6952E7',
    company: 'Qualifi',
    jobTitle: 'Software Engineer',
    title: 'Software Engineer',
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

export const MORE_JOBS: Experience[] = [
  {
    bgColor: '#ffffff',
    company: 'Noblesville Youth Tennis',
    jobTitle: 'Tennis Camp Instructor',
    title: 'Tennis Camp Instructor',
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
    imagery: texMexyLogo,
    company: 'Texy Mexy',
    jobTitle: 'Website Designer',
    title: 'Website Designer',
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
    imagery: texMexyLogo,
    company: 'Texy Mexy',
    jobTitle: 'Kitchen Lead',
    title: 'Kitchen Lead',
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
    title: 'Concession Attendant',
    timeRange: 'Part-time, March 2018 - 2021',
    jobDescription:
      'Worked with people of all ages to get food out quickly and accurately at sports stadium concession stands; set up, restock, and tear down.',
    keywords: ['Quick Service', 'Intercultural Communication'],
  },
  {
    bgColor: '#ffffff',
    company: 'Self-employed',
    jobTitle: 'Private Tennis Lessons Instructor',
    title: 'Private Tennis Lessons Instructor',
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
    imagery: noblesvilleAthleticClubLogo,
    jobTitle: 'Website Designer and Manager',
    title: 'Website Designer and Manager',
    timeRange: 'Part-time, December 2015 - November 2017',
    jobDescription:
      'Designed and updated a website for a local gym viewed thousands of times a month.',
    keywords: ['Web Development', 'GoDaddy', 'Web Design', 'Digital Marketing'],
  },
  {
    bgColor: '#D95A00',
    company: 'Noblesville Athletic Club',
    imagery: noblesvilleAthleticClubLogo,
    jobTitle: 'Email Marketing',
    title: 'Email Marketing',
    timeRange: 'Part-time, December 2015 - November 2017',
    jobDescription:
      'Curated a monthly newsletter sent to hundreds of email addresses by working with the leadership team.',
    keywords: ['Digital Marketing'],
  },
  {
    bgColor: '#ffffff',
    company: 'L&L Davis Farms',
    jobTitle: 'Website Designer and Manager',
    title: 'Website Designer and Manager',
    timeRange: 'Part-time, June 2016 - June 2017',
    jobDescription:
      'Produced a public, navigable website for a local farm to grow its small business.',
    keywords: ['Web Development', 'GoDaddy', 'Web Design', 'Digital Marketing'],
  },
];
