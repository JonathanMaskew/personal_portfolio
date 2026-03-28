import React from 'react';
import type { Experience } from '@/types';
import {
  PillBottle,
  SplinePointer,
  Megaphone,
  Maximize2,
  Sparkles,
  Shield,
} from 'lucide-react';
import { Button } from '@/components/Button';

export const getHighlightsData = (
  openExperienceModal: (id: string) => void
): Experience[] => [
  {
    id: 'strengthened-user-security',
    color: 'var(--color-myhelo)',
    imagery: Shield,
    title:
      'Introduced Multi-Factor Authentication, Strengthening User Security',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Re-architected the authentication infrastructure in JavaScript and PHP, integrating Passkeys, TOTP, SMS/email MFA, and traditional methods into a scalable architecture to ensure compliance on login, identity verification, and the prescribing of controlled substances.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        imagery={Maximize2}
        text="More myhELO"
        color="var(--color-myhelo)"
        clickDetail={() => {
          openExperienceModal('myhelo');
        }}
      />
    ),
  },
  {
    id: 'myhelo-eprescribe',
    color: 'var(--color-myhelo)',
    imagery: PillBottle,
    title: 'Architected a Modern, Scalable ePrescribing Infrastructure',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Re-engineered the ePrescribing infrastructure by re-building the full-stack JavaScript and PHP codebase for increased reliability and a streamlined workflow. The infrastructure now reliably processes around 4,000 prescription transactions each month, with fewer operational issues (and more providers are expected to begin using ePrescribe in the coming months).',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        imagery={Maximize2}
        text="More myhELO"
        color="var(--color-myhelo)"
        clickDetail={() => {
          openExperienceModal('myhelo');
        }}
      />
    ),
  },
  {
    id: 'myhelo-llm',
    color: 'var(--color-myhelo)',
    imagery: Sparkles,
    title: 'Pioneered AI Automation for Data Imports',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Implemented an intelligent pipeline that leverages a Large Language Model to parse and import unstructured user data. This LLM-assisted import tool introduced automation to a tedious task, eliminating hours of manual data entry.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        imagery={Maximize2}
        text="More myhELO"
        color="var(--color-myhelo)"
        clickDetail={() => {
          openExperienceModal('myhelo');
        }}
      />
    ),
  },
  {
    id: 'allegion-announcements',
    color: 'var(--color-allegion)',
    imagery: Megaphone,
    title: 'Engineered a Targeted Communication System',
    subtitle: 'Software Engineer @ Allegion',
    body: 'Developed a notification system in Angular to enable targeted communications. By integrating APIs with an intuitive interface, administrators could send announcements to specific employee groups without the messages getting lost in Teams conversations or emails.',
    experienceId: 'allegion',
    highlightChildren: (
      <Button
        imagery={Maximize2}
        text="More Allegion"
        clickDetail={() => {
          openExperienceModal('allegion');
        }}
      />
    ),
  },
  {
    id: 'htf-outreach',
    color: 'var(--color-htf)',
    imagery: SplinePointer,
    title: 'Led a Branding Overhaul, Driving Growth by 90%',
    subtitle: 'Design Director @ Hack the Future',
    body: 'Unified branding and messaging across print, digital, and social presences. This strategic approach increased visibility and interest, leading to a record-shattering nearly 90% year-over-year increase in applicants.',
    experienceId: 'htf-design-director',
    highlightChildren: (
      <Button
        imagery={Maximize2}
        text="More Design Director"
        clickDetail={() => {
          openExperienceModal('htf-design-director');
        }}
      />
    ),
  },
  // {
  //   id: 'this-site',
  //   color: 'var(--color-generic)',
  //   imagery: HandHeart,
  //   title: 'Designed and Developed an Interactive Portfolio',
  //   subtitle: 'Independently built this website',
  //   body: 'Designed from scratch and built using Next.js and TypeScript. This fully responsive site goes beyond a showcase, serving as a live demonstration of modern front-end frameworks, custom design systems, and integrated AI features.',
  //   experienceId: 'this-site',
  //   highlightChildren: (
  //     <Button
  //       imagery={Maximize2}
  //       text="About this Site"
  //       clickDetail={() => {
  //         openExperienceModal('this-site');
  //       }}
  //     />
  //   ),
  // },
  // {
  //   id: 'myhelo-components',
  //   color: 'var(--color-myhelo)',
  //   imagery: Component,
  //   title: 'Optimized Development with Reusable Components',
  //   subtitle: 'Software Engineer @ myhELO',
  //   body: 'Built a library of documented, reusable front-end components to minimize code redundancy. This streamlined the development process and ensured consistent implementation across the application.',
  //   experienceId: 'myhelo',
  //   highlightChildren: (
  //     <Button
  //       imagery={Maximize2}
  //       text="More myhELO"
  //       clickDetail={() => {
  //         setOpenedExperienceId('myhelo');
  //         openModal();
  //       }}
  //     />
  //   ),
  // },
];

export const generateChatContext = (): string => {
  const highlights = getHighlightsData(() => {});

  const highlightStrings: string[] = [];

  highlights.forEach((h) => {
    let highlightStr = `${h.title || ''} | ${h.subtitle || ''}`;
    if (h.body) {
      highlightStr += `\n\n->Summary:\n- ${h.body}`;
    }
    highlightStrings.push(highlightStr);
  });

  return (
    '-| Highlights (Major Achievements) |-\n\n' + highlightStrings.join('\n\n')
  );
};
