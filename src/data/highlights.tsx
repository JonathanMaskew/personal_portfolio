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
} from 'lucide-react';
import { Button } from '@/components/Button';

export const getHighlightsData = (
  setOpenedExperienceId: (id: string | null) => void,
  openModal: () => void
): Experience[] => [
  {
    id: 'myhelo-eprescribe',
    color: 'var(--color-myhelo)',
    imagery: PillBottle,
    title:
      'Increased Reliability and Functionality Through Full-Stack Rebuild of ePrescribe',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Led a full-stack rebuilding of the e-prescribing infrastructure by rewriting all front-end and back-end files and integrating with third-party APIs, increasing reliability and functionality.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="More myhELO"
        color="var(--color-myhelo)"
        clickDetail={() => {
          setOpenedExperienceId('myhelo');
          openModal();
        }}
      />
    ),
  },
  {
    id: 'htf-outreach',
    color: 'var(--color-htf)',
    imagery: SplinePointer,
    title:
      'Revamped Outreach Efforts, Achieving a Nearly 90% Increase in Applicants',
    subtitle: 'Design Director @ Hack the Future',
    body: 'Initiated by a branding refresh, our new handouts, collaborations, events, and revamped social media presence led to a nearly 90% increase in applicants year-over-year, shattering previous records.',
    experienceId: 'htf-design-director',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="More Design Director"
        clickDetail={() => {
          setOpenedExperienceId('htf-design-director');
          openModal();
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
    body: 'Pioneered a tool that leverages a Large Language Model (LLM) to intelligently parse and import user data from unstructured CSV files. This introduced automation to a tedious workflow and significantly reduced user import times.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="More myhELO"
        color="var(--color-myhelo)"
        clickDetail={() => {
          setOpenedExperienceId('myhelo');
          openModal();
        }}
      />
    ),
  },
  {
    id: 'allegion-announcements',
    color: 'var(--color-allegion)',
    imagery: Megaphone,
    title: 'Introduced Rapid Communication through an Announcements System',
    subtitle: 'Software Engineer @ Allegion',
    body: 'Developed an announcements system to allow for rapid communications with 100s of users by translating designs to code that integrates with backend APIs. Allowed administrators to target announcements to specific groups of individuals.',
    experienceId: 'allegion',
    highlightChildren: (
      <Button
        imagery={Plus}
        text="More Allegion"
        clickDetail={() => {
          setOpenedExperienceId('allegion');
          openModal();
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
  const highlights = getHighlightsData(
    () => {},
    () => {}
  );

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
