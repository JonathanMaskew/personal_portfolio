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
import { Button, ButtonType } from '../Button';

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
    icon: FileText,
    href: '/api/resume',
  },
  {
    label: 'LinkedIn',
    id: 'linkedin',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/jonathan-maskew',
  },
  {
    label: 'Email',
    id: 'email',
    icon: Mail,
    href: 'email-protection',
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
        type={'A-TAG' as ButtonType}
        iconOnly={iconOnly}
      />
    </div>
  );
}
