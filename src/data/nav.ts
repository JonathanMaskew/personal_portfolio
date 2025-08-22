import type { NavItem } from '@/types';
import {
  Mail,
  FileText,
  GraduationCap,
  BriefcaseBusiness,
  Linkedin,
  House,
  User,
  Sparkles,
  CircleEllipsis,
} from 'lucide-react';

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'Intro',
    id: 'intro',
    icon: House,
    href: '#intro',
  },
  {
    label: 'About',
    id: 'about',
    icon: User,
    href: '#about',
  },
  {
    label: 'Highlights',
    id: 'highlights',
    icon: Sparkles,
    href: '#highlights',
  },
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
    href: '/api/resume',
    newTab: true,
  },
];
