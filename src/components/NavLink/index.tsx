import { Icon } from '@/types';
import {
  House,
  Mail,
  File,
  User,
  GraduationCap,
  BriefcaseBusiness,
} from 'lucide-react';
import Link from 'next/link';

export type NavItem = {
  label: string;
  id: string;
  icon: Icon;
  href: string;
};

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    label: 'Overview',
    id: 'overview',
    icon: House,
    href: '#overview',
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
    label: 'About',
    id: 'about',
    icon: User,
    href: '#about',
  },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  {
    label: 'Resume',
    id: 'resume',
    icon: File,
    href: '/',
  },
  {
    label: 'Email',
    id: 'email',
    icon: Mail,
    href: '/',
  },
];

const iconSize = 18;
const linkStyle = 'flex items-center gap-3';

interface NavLinkProps {
  item: NavItem;
}

export function NavLink({ item }: NavLinkProps) {
  const Icon = item.icon;

  if (item.href.startsWith('#')) {
    return (
      <a href={item.href} className={`${linkStyle}`}>
        <Icon size={iconSize} />
        <div>{item.label}</div>
      </a>
    );
  }

  return (
    <Link href={item.href} className={`${linkStyle}`}>
      <Icon size={iconSize} />
      <div>{item.label}</div>
    </Link>
  );
}
