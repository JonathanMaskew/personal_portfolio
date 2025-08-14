import { Icon } from '@/types';
import {
  House,
  Mail,
  FileText,
  User,
  GraduationCap,
  BriefcaseBusiness,
  Linkedin,
} from 'lucide-react';
import { Button } from '../Button';

export type NavItem = {
  label: string;
  id: string;
  icon: Icon;
  href: string;
  newTab?: boolean;
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
  // {
  //   label: 'About',
  //   id: 'about',
  //   icon: User,
  //   href: '#about',
  // },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  {
    label: 'Resume',
    id: 'resume',
    icon: FileText,
    href: '/api/resume',
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
    label: 'Email',
    id: 'email',
    icon: Mail,
    href: 'email-protection',
    newTab: true,
  },
];
interface NavLinkProps {
  item: NavItem;
  iconOnly?: boolean;
  isActive?: boolean;
}

export function NavLink({ item, iconOnly, isActive }: NavLinkProps) {
  const linkStyle = isActive
    ? 'opacity-100 font-bold'
    : 'opacity-60 hover:opacity-100';

  return (
    <div className={linkStyle}>
      <Button
        text={item.label}
        icon={item.icon}
        clickDetail={item.href}
        newTab={item.newTab}
        iconOnly={iconOnly}
      />
    </div>
  );
}
