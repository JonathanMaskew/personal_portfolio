import type { Experience } from '@/types';
import myheloLogo from '@/assets/images/experience/myhelo-logo.png';
import allegionLogo from '@/assets/images/experience/allegion-logo.png';
import qualifiLogo from '@/assets/images/experience/qualifi-logo.png';
import texMexyLogo from '@/assets/images/experience/texy-mexy-logo.png';
import noblesvilleAthleticClubLogo from '@/assets/images/experience/noblesville-athletic-club-logo.png';
import {
  ChefHat,
  ExternalLink,
  Megaphone,
  Pill,
  PillBottle,
  Shield,
  Sparkles,
  SquarePlay,
  Users,
  Code,
} from 'lucide-react';
import { Button } from '@/components/Button';
import ButtonRow from '@/components/Button/ButtonRow';
import ModalSection from '@/components/Modal/ModalSection';

export const getJobsData = (): Experience[] => [
  {
    id: 'myhelo',
    imagery: myheloLogo,
    color: 'var(--color-myhelo)',
    subtitle: 'myhELO',
    title: 'Software Engineer',
    heroTitle: 'Full-stack Engineer',
    heroSubtitle: 'myhELO',
    subheading: 'Full-time, June 2024 - Present',
    body: 'Engineer full-stack solutions within a nationwide healthcare platform using a custom JavaScript framework and PHP. Deliver high-impact infrastructure including an authentication overhaul, ePrescribing system, and an AI-powered data importer.',
    highlights: [
      {
        icon: Shield,
        title: 'Architected a Modern, Scalable Authentication Infrastructure',
        text: 'Re-architect the authentication infrastructure in JavaScript and PHP, integrating Passkeys, TOTP, SMS/email MFA, and traditional methods into a scalable architecture to ensure compliance on login, identity verification, prescribing of controlled substances, etc.',
        heroTitle: 'Architect authentication infrastructure',
      },
      {
        icon: PillBottle,
        title:
          'Re-engineered ePrescribing Infrastructure, Increasing Reliability',
        text: 'Re-engineer the full-stack ePrescribing infrastructure for increased reliability and a streamlined workflow while processing around 4,000 prescription transactions per month.',
        heroTitle: 'Re-engineer full-stack ePrescribe',
      },
      {
        icon: Sparkles,
        title: 'Pioneered AI Automation for Data Import',
        text: 'Pioneer an intelligent pipeline that leverages a Large Language Model to parse and import from unstructured user data, eliminating hours of manual data entry.',
        heroTitle: 'Pioneer AI-automation',
      },
    ],
    keywords: [
      'JavaScript',
      'PHP',
      'Front-end',
      'Full-stack',
      'Large Language Models',
      'System Architecture',
      'APIs',
      'UI/UX Design',
      'Figma',
      'Sentry',
    ],
    moreAccomplishments: [
      'Redesign the site-wide UI template in JavaScript and CSS to prioritize critical patient data, increase layout flexibility, and reduce front-end complexity.',
      'Build a workflow guiding users through password creation, profile setup, and interactive training that is curated based on role to improve user activation rates and reduce support requests.',
    ],
    coreBullets: [
      'Streamline design-to-development workflows by establishing a Figma design library to ensure front-end consistency, visualized expectations, and efficient development.',
      'Drive technical growth by conducting interviews, onboarding new engineers, and presenting milestones to executive leadership.',
    ],
    moreBullets: [],
  },
  {
    id: 'allegion',
    imagery: allegionLogo,
    color: 'var(--color-allegion)',
    subtitle: 'Allegion',
    title: 'Software Engineer',
    heroTitle: 'Front-end Engineer',
    heroSubtitle: 'Allegion',
    subheading: 'Intern, May 2023 - August 2023',
    body: 'Built Angular components and integrated with back-end APIs to deliver a seamless announcements system. The system allows administrators to rapidly communicate important updates to employees, preventing announcements from getting lost in Teams threads or emails.',
    highlights: [
      {
        icon: Megaphone,
        title: 'Engineered a Targeted Communication System',
        text: 'Developed an intuitive announcements feature within a component-based Angular site by integrating with back-end APIs, allowing administrators to target messages to hundreds of employees.',
        heroTitle: 'Developed announcements system',
      },
      {
        icon: Code,
        heroTitle: 'Translated mockups to code',
      },
      {
        icon: Users,
        heroTitle: 'Collaborated with Product & Design',
      },
    ],
    keywords: [
      'Angular',
      'Angular Material',
      'Front-end',
      'APIs',
      'Scrum / Agile',
    ],
    coreBullets: [
      'Collaborated with Product Owners, Interaction Designers, and Back-end Developers to translate mockups into production-ready interfaces.',
    ],
    modalChildren: (
      <ButtonRow className="justify-center">
        <Button
          imagery={ExternalLink}
          newTab={true}
          text="PDF of Report Out Presentation"
          clickDetail="/pdfs/allegion-report-out.pdf"
          background
          color="var(--color-allegion)"
        />
      </ButtonRow>
    ),
  },
  {
    id: 'qualifi',
    imagery: qualifiLogo,
    color: 'var(--color-qualifi)',
    subtitle: 'Qualifi',
    title: 'Software Engineer',
    subheading: 'Intern, May 2022 - August 2022',
    body: 'Developed new features within a Next.js and TypeScript codebase, implementing responsive design and providing usability enhancements. Ensured relaiability by implementing unit test cases.',
    keywords: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Front-end',
      'Scrum / Agile',
      'Unit Testing',
      'React Testing Library',
    ],
    coreBullets: [
      'Shipped features and usability improvements by translating high-fidelity mockups into Next.js and TypeScript components.',
      'Enforced system reliability by implementing unit test cases using React Testing Library.',
    ],
  },
];

export const getMoreJobsData = (): Experience[] => [
  {
    id: 'noblesville-youth-tennis',
    color: 'var(--color-generic)',
    subtitle: 'Noblesville Youth Tennis',
    title: 'Tennis Camp Instructor',
    subheading: 'Seasonal, June 2018 - July 2021',
    body: 'Supervised groups of approximately ten children daily while providing engaging instruction.',
    keywords: ['Leadership', 'Lesson Planning'],
    coreBullets: [],
  },
  {
    id: 'texy-mexy-website-designer',
    color: 'var(--color-texy-mexy)',
    imagery: texMexyLogo,
    subtitle: 'Texy Mexy',
    title: 'Website Designer',
    subheading: 'Part-time, October 2018 - January 2021',
    body: 'Created a WordPress website for a local tex-mex restaurant to promote products, market events, and expand reach.',
    keywords: ['WordPress', 'Web Development', 'Web Design'],
    highlights: [
      {
        icon: SquarePlay,
        title:
          'Drove Engagement for Texy Mexy, Creating the Second Most-Viewed Video Ever Posted',
        text: 'Amongst the COVID-19 limitations, I was asked to create a video to advertise the to-go margarita mix. Drove engagement, becoming the second most-viewed video ever posted by Texy Mexy, with over 2,400 views on Facebook.',
        children: (
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/4LQbmkFuNmI?si=-LAr29fl2xR9h_9O"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ),
      },
    ],
    coreBullets: [],
  },
  {
    id: 'texy-mexy-kitchen-lead',
    color: 'var(--color-texy-mexy)',
    imagery: texMexyLogo,
    subtitle: 'Texy Mexy',
    title: 'Kitchen Lead',
    subheading: 'Part-time, April 2016 - January 2021',
    body: 'Led and trained the kitchen team of three to six people in a high-paced atmosphere to quickly complete customer orders.',
    keywords: ['Leadership', 'Document Design', 'Employee Onboarding'],
    highlights: [
      {
        icon: ChefHat,
        title: 'Keep Kitchen Running Efficiently',
        text: 'Designed signage and logging documents to ensure quick, accurate, and efficient kitchen operations.',
        children: (
          <ButtonRow>
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="PDF of Assembly Cheat Sheet"
              clickDetail="/pdfs/texy-mexy-limited-assembly-cheat-sheet.pdf"
              background
              color="var(--color-texy-mexy)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="PDF of Stovetop Cheat Sheet"
              clickDetail="/pdfs/texy-mexy-stovetop-cheat-sheet.pdf"
              background
              color="var(--color-texy-mexy)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="PDF of Product Waste Log"
              clickDetail="/pdfs/texy-mexy-product-waste-log.pdf"
              background
              color="var(--color-texy-mexy)"
            />
          </ButtonRow>
        ),
      },
    ],
    coreBullets: [],
  },
  {
    id: 'premier-youth-concession-attendant',
    color: 'var(--color-generic)',
    subtitle: 'Premier Youth Fundraising Inc',
    title: 'Concession Attendant',
    subheading: 'Part-time, March 2018 - 2021',
    body: 'Worked with people of all ages to get food out quickly and accurately at sports stadium concession stands; set up, restock, and tear down.',
    coreBullets: [],
  },
  {
    id: 'private-tennis-lessons-instructor',
    color: 'var(--color-generic)',
    subtitle: 'Self-employed',
    title: 'Private Tennis Lessons Instructor',
    subheading: 'Part-time, June 2018 - July 2020',
    body: 'Instructed elementary and middle school players weekly to enhance their tennis skill set.',
    keywords: ['Entrepreneurship', 'Leadership', 'Lesson Planning'],
    coreBullets: [],
  },
  {
    id: 'nac-website-designer-and-manager',
    color: 'var(--color-nac)',
    subtitle: 'Noblesville Athletic Club',
    imagery: noblesvilleAthleticClubLogo,
    title: 'Website Designer and Manager',
    subheading: 'Part-time, December 2015 - November 2017',
    body: 'Designed and updated a website for a local gym viewed thousands of times a month.',
    keywords: ['GoDaddy', 'Web Development', 'Web Design'],
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
    color: 'var(--color-nac)',
    subtitle: 'Noblesville Athletic Club',
    imagery: noblesvilleAthleticClubLogo,
    title: 'Email Marketing',
    subheading: 'Part-time, December 2015 - November 2017',
    body: 'Curated a monthly newsletter sent to hundreds of email addresses by working with the leadership team.',
    keywords: ['GoDaddy', 'Email Marketing'],
    coreBullets: [],
  },
  {
    id: 'nac-childcare',
    color: 'var(--color-nac)',
    subtitle: 'Noblesville Athletic Club',
    imagery: noblesvilleAthleticClubLogo,
    title: 'Childcare',
    subheading: 'Part-time, December 2015 - November 2017',
    body: 'Displayed excellent leadership skills while monitoring a room of kids of all ages while parents exercised in various other parts of the building.',
    keywords: ['Leadership'],
    coreBullets: [],
  },
  {
    id: 'll-davis-farms',
    color: 'var(--color-generic)',
    subtitle: 'L&L Davis Farms',
    title: 'Website Designer and Manager',
    subheading: 'Part-time, June 2016 - June 2017',
    body: 'Produced a public, navigable website for a local farm to grow its small business.',
    keywords: ['GoDaddy', 'Web Development', 'Web Design'],
    coreBullets: [],
  },
];

export const generateChatContext = (): string => {
  const jobs = getJobsData();
  const moreJobs = getMoreJobsData();

  const jobStrings: string[] = [];

  [...jobs, ...moreJobs].forEach((job) => {
    let jobStr = `${job.title || ''} | ${job.subtitle || ''} (${job.subheading || ''})`;

    if (job.body) {
      jobStr += `\n\n->Summary:\n- ${job.body}`;
    }

    if (job.coreBullets && job.coreBullets.length > 0) {
      jobStr += `\n\n->Core Responsibilities:\n`;
      jobStr += job.coreBullets.map((b) => `- ${b}`).join('\n');
    }

    if (job.highlights && job.highlights.length > 0) {
      jobStr += '\n\n->Highlights:\n';
      jobStr += job.highlights.map((h) => `- ${h.title}: ${h.text}`).join('\n');
    }

    if (job.moreAccomplishments && job.moreAccomplishments.length > 0) {
      jobStr += '\n\n->Additional Accomplishments:\n';
      jobStr += job.moreAccomplishments.map((ma) => `- ${ma}`).join('\n');
    }

    if (job.keywords && job.keywords.length > 0) {
      jobStr += `\n\n->Keywords: ${job.keywords.map((k) => (typeof k === 'string' ? k : k.label)).join(', ')}`;
    }

    jobStrings.push(jobStr);
  });

  return '-| Work Experience |-\n\n' + jobStrings.join('\n\n');
};
