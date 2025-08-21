import { Button } from '../Button';
import type { NavItem } from '@/types';

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
    <div className={`w-full ${linkStyle}`}>
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
