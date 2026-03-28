import type { NavItem } from '@/types';
import {
  Mail,
  FileText,
  GraduationCap,
  BriefcaseBusiness,
  Linkedin,
  House,
  User,
  CircleEllipsis,
  Spotlight,
} from 'lucide-react';

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'Intro',
    id: 'intro',
    icon: House,
    href: '#intro',
  },
  {
    label: 'Highlights',
    id: 'highlights',
    icon: Spotlight,
    href: '#highlights',
  },
  // {
  //   label: 'Overview',
  //   id: 'overview',
  //   icon: User,
  //   href: '#about',
  // },
  {
    label: 'Work',
    id: 'work',
    icon: BriefcaseBusiness,
    href: '#work',
  },
  {
    label: 'Education',
    id: 'education',
    icon: GraduationCap,
    href: '#education',
  },
  {
    label: 'More',
    id: 'footer',
    icon: CircleEllipsis,
    href: '#footer',
  },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  {
    label: 'Email',
    id: 'email',
    icon: Mail,
    href: 'email-protection',
    newTab: true,
  },
  {
    label: 'LinkedIn',
    id: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/jonathan-maskew',
    newTab: true,
  },
  {
    label: 'Resume',
    id: 'resume',
    icon: FileText,
    href: '/pdfs/jonathan-maskew-resume-software-engineer.pdf',
    newTab: true,
  },
];

export const generateChatContext = (): string => {
  const sections: string[] = [];

  sections.push('-| Website Structure & Navigation |-');
  sections.push(
    'The portfolio website is organized into the following main sections you can refer to. You should never assume subheadings or attempt to name any other heading that is not listed below.'
  );

  const descriptions: Record<string, string> = {
    Intro: 'The hero section.',
    About: "Overview of Jonathan's skills, and some of his interests.",
    Highlights: 'A showcase of his most impactful projects and achievements.',
    Work: 'A detailed breakdown of his professional experience.',
    Education:
      'Details on his university degree, academic projects, and leadership roles.',
    More: 'Contains additional details, including the history of his personal brand and information about this website.',
  };

  const navItems = MAIN_NAV_ITEMS.map(
    (item) => `- ${item.label}: ${descriptions[item.label] || ''}`
  );
  sections.push(navItems.join('\n'));

  return sections.join('\n\n');
};
