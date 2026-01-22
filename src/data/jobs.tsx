import type { Experience } from '@/types';
import myheloLogo from '@/assets/images/myhelo_logo.png';
import allegionLogo from '@/assets/images/allegion_logo.png';
import qualifiLogo from '@/assets/images/qualifi_logo.png';
import texMexyLogo from '@/assets/images/texy_mexy_logo.png';
import noblesvilleAthleticClubLogo from '@/assets/images/noblesville_athletic_club_logo.png';
import {
  ChefHat,
  ExternalLink,
  Megaphone,
  PillBottle,
  ShieldCheck,
  Sparkles,
  SquarePlay,
} from 'lucide-react';
import Chips from '@/components/Chips';
import { Button } from '@/components/Button';
import ButtonRow from '@/components/ButtonRow';
import ModalSection from '@/components/ModalSection';

export const getJobsData = (): Experience[] => [
  {
    id: 'myhelo',
    imagery: myheloLogo,
    color: 'var(--color-myhelo)',
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
    highlights: [
      {
        icon: Sparkles,
        title: 'Utilize an LLM to Automate User Import',
        text: 'Pioneer a tool that leverages a Large Language Model to intelligently parse and import user data from an unstructured CSV file, introducing automation to a tedious workflow that significantly reduces user import times.',
      },
      {
        icon: PillBottle,
        title: 'Full-Stack Rebuild of e-Prescribing Infrastructure',
        text: 'Lead a full-stack rebuild of the e-prescribing infrastructure by rewriting all front-end and back-end files and integrating with third-party APIs, increasing reliability and functionality.',
      },
      {
        icon: ShieldCheck,
        title: 'Strengthen Security with Multi-Factor Authentication',
        text: 'Strengthen security by implementing a reusable multi-factor authentication component that supports email, text, and passkey.',
      },
    ],
    moreAccomplishments: [
      'Re-architect the site-wide UI template to spotlight crucial patient data, increase layout flexibility, and simplify development.',
      'Improve user activation by building a workflow to guide new users through password creation, profile setup, and initial training.',
      'Incorporate persistent logging to visualize real-time loading metrics and locally track events to improve system observability.',
    ],
    coreBullets: [
      // "Engineer new features using a custom JavaScript framework and PHP, empowering doctor's offices nationwide and giving thousands of patients access to their health data.",
      'Earn high-performance evaluation ratings, recognized for dependability, work quality, initiative, and clear communication.',
      'Streamline design-to-development workflows by establishing a Figma design library that translates to consistent, reusable, and documented front-end components that minimize code redundancy.',
      'Lead technical growth by conducting interviews, onboarding new engineers, and presenting milestones to executive leadership.',
    ],
    moreBullets: [],
  },
  {
    id: 'allegion',
    imagery: allegionLogo,
    color: 'var(--color-allegion)',
    subtitle: 'Allegion',
    title: 'Software Engineer',
    subheading: 'Intern, May 2023 - August 2023',
    body: 'Translated mockups to front-end code for a scalable announcements feature within a component-based Angular site, integrating with back-end APIs, to allow hundreds of users to access announcements and administrators to send targeted announcements.',
    highlightChildren: (
      <Chips strings={['Angular', 'Angular Material', 'Front-end', 'Scrum']} />
    ),
    highlights: [
      {
        icon: Megaphone,
        title: 'Establish Announcements System',
        text: 'Translated mockups to front-end code for a scalable announcements feature within a component-based Angular site, integrating with back-end APIs, to allow hundreds of users to access announcements and administrators to send targeted announcements.',
      },
    ],
    coreBullets: [
      'Collaborated daily with Product Owner, Interaction Designer, and Back-end Developer interns, following the Scrum methodology.',
    ],
    modalChildren: (
      <ButtonRow className="justify-center">
        <Button
          imagery={ExternalLink}
          newTab={true}
          text="PDF of Report Out Presentation"
          clickDetail="/pdfs/allegion_report_out.pdf"
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
      // 'Shipped new features and improved usability within a Next.js codebase by translating designs into front-end code.',
      'Communicated daily with the Engineering and Product teams within a Scrum environment to iterate on features.',
      'Ensured contributions maintained system reliability and functionality by implementing unit test cases using React Testing Library.',
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
    highlightChildren: <Chips strings={['Leadership', 'Lesson Planning']} />,
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
    highlightChildren: (
      <Chips strings={['WordPress', 'Web Development', 'Web Design']} />
    ),
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
              clickDetail="/pdfs/texy_mexy_limited_assembly_cheat_sheet.pdf"
              background
              color="var(--color-texy-mexy)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="PDF of Stovetop Cheat Sheet"
              clickDetail="/pdfs/texy_mexy_stovetop_cheat_sheet.pdf"
              background
              color="var(--color-texy-mexy)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="PDF of Product Waste Log"
              clickDetail="/pdfs/texy_mexy_product_waste_log.pdf"
              background
              color="var(--color-texy-mexy)"
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
    color: 'var(--color-generic)',
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
    color: 'var(--color-generic)',
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
    color: 'var(--color-nac)',
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
    color: 'var(--color-nac)',
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
    color: 'var(--color-nac)',
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
    color: 'var(--color-generic)',
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
