import React from 'react';
import type { Experience } from '@/types';
import {
  PillBottle,
  SplinePointer,
  UserPlus,
  View,
  Plus,
  Megaphone,
} from 'lucide-react';
import { Button } from '@/components/Button';

export const getHighlightsData = (
  setOpenedExperienceId: (id: string | null) => void,
  openModal: () => void
): Experience[] => [
  {
    id: 'myhelo-eprescribe',
    color: '#2396F0',
    imagery: PillBottle,
    title:
      'Increased Reliability and Functionality Through Full-Stack Rebuild of ePrescribe',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Led a full-stack rebuilding of the e-prescribing infrastructure by rewriting all front-end and back-end files and integrating with third-party APIs, increasing reliability and functionality.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        icon={Plus}
        text="More myhELO"
        color="#2396F0"
        clickDetail={() => {
          setOpenedExperienceId('myhelo');
          openModal();
        }}
      />
    ),
  },
  {
    id: 'htf-outreach',
    color: '#00EB88',
    imagery: SplinePointer,
    title:
      'Revamped Outreach Efforts, Achieving a Nearly 90% Increase in Applicants',
    subtitle: 'Design Director @ Hack the Future',
    body: 'Initiated by a branding refresh, our new handouts, collaborations, events, and revamped social media presence led to a nearly 90% increase in applicants year-over-year, shattering previous records.',
    experienceId: 'htf-design-director',
    highlightChildren: (
      <Button
        icon={Plus}
        text="More Design Director"
        clickDetail={() => {
          setOpenedExperienceId('htf-design-director');
          openModal();
        }}
      />
    ),
  },
  {
    id: 'allegion-announcements',
    color: '#F26F21',
    imagery: Megaphone,
    title: 'Introduced Rapid Communication through an Announcements System',
    subtitle: 'Software Engineer @ Allegion',
    body: 'Developed an announcements system to allow for rapid communications with 100s of users by translating designs to code that integrates with backend APIs. Allowed administrators to target announcements to specific groups of individuals, with the option to require recipients to acknowledge the announcement.',
    experienceId: 'allegion',
    highlightChildren: (
      <Button
        icon={Plus}
        text="More Allegion"
        clickDetail={() => {
          setOpenedExperienceId('allegion');
          openModal();
        }}
      />
    ),
  },
  {
    id: 'myhelo-onboarding',
    color: '#2396F0',
    imagery: UserPlus,
    title: 'Implemented a New User Onboarding Workflow',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Proptyping first in Figma, improved user activation by implementing a new user oboarding workflow that guides users though password creation, profile setup, and intial training. Prioritization was on intuitiveness and ease of use.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        icon={Plus}
        text="More myhELO"
        clickDetail={() => {
          setOpenedExperienceId('myhelo');
          openModal();
        }}
      />
    ),
  },
  {
    id: 'myhelo-patient-charts',
    color: '#2396F0',
    imagery: View,
    title: 'Designed a Condensed View to Quickly Visualize Patient Charts',
    subtitle: 'Software Engineer @ myhELO',
    body: 'Settled on a consistent, minimalistic view, after many iterations in Figma, that aggregates data into a scannable format in patient charts, allowing providers to quickly visualize patient information. Developed to be reused and scaled to other features within the system.',
    experienceId: 'myhelo',
    highlightChildren: (
      <Button
        icon={Plus}
        text="More myhELO"
        clickDetail={() => {
          setOpenedExperienceId('myhelo');
          openModal();
        }}
      />
    ),
  },
];
