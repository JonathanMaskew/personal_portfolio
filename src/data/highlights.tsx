import React from 'react';
import type { Experience } from '@/types';
import {
  PillBottle,
  SplinePointer,
  UserPlus,
  Megaphone,
  LayoutTemplate,
  Plus,
  Sparkles,
  HandHeart,
} from 'lucide-react';
import { Button } from '@/components/Button';

export const getHighlightsData = (
  openExperienceModal: (id: string) => void
): Experience[] => [
  {
    id: 'myhelo-eprescribe',
    color: 'var(--color-myhelo)',
    imagery: PillBottle,
    title: 'Architected a Modern, Scalable ePrescribing Infrastructure',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Re-engineered the e-prescribing infrastructure by migrating legacy code to a full-stack architecture for increased reliability and a streamlined workflow.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="More myhELO"
        color="var(--color-myhelo)"
        clickDetail={() => {
          openExperienceModal('myhelo');
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
    body: 'Unified branding and messaging across print, digital, and social presences. This cohesive, strategic approach shattered records, bringing a nearly 90% year-over-year increase in applicants.',
    experienceId: 'htf-design-director',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="More Design Director"
        clickDetail={() => {
          openExperienceModal('htf-design-director');
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
    body: 'Engineered an intelligent pipeline that leverages a Large Language Model to parse and import unstructured user data. This agentic workflow introduced automation to a tedious task, reducing manual entry bottlenecks.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        imagery={Plus}
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
    title: 'Introduced a Targeted Communication System',
    subtitle: 'Software Engineer @ Allegion',
    body: 'Developed a notification system in Angular to enable targeted communications. By integrating APIs with an intuitive interface, administrators could send announcements to specific user groups.',
    experienceId: 'allegion',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="More Allegion"
        clickDetail={() => {
          openExperienceModal('allegion');
        }}
      />
    ),
  },
  {
    id: 'this-site',
    color: 'var(--color-generic)',
    imagery: HandHeart,
    title: 'Designed and Developed an Interactive Portfolio',
    subtitle: 'Independently built this website',
    body: 'Designed from scratch and built using Next.js and TypeScript. This fully responsive site goes beyond a showcase, serving as a live demonstration of modern front-end frameworks, custom design systems, and integrated AI features.',
    experienceId: 'this-site',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="About this Site"
        clickDetail={() => {
          openExperienceModal('this-site');
        }}
      />
    ),
  },
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
  //       imagery={Plus}
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
      highlightStr += `\n\n->Descriptive Bullet:\n- ${h.body}`;
    }
    highlightStrings.push(highlightStr);
  });

  return (
    '-| Highlights (Major Achievements) |-\n\n' + highlightStrings.join('\n\n')
  );
};
