'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  MAIN_NAV_ITEMS,
  SECONDARY_NAV_ITEMS,
  type NavItem,
  NavLink,
} from '../NavLink';

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<NavItem>(MAIN_NAV_ITEMS[0]);

  useEffect(() => {
    const sections = MAIN_NAV_ITEMS.map((n) =>
      document.getElementById(n.id)
    ).filter(Boolean) as HTMLElement[];

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const topMost = visible[0];
        if (topMost?.target?.id) {
          const match = MAIN_NAV_ITEMS.find((n) => n.id === topMost.target.id);
          if (match) setCurrent(match);
        }
      },
      {
        threshold: [0.25, 1],
      }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const IconComponent = current.icon;

  return (
    <div
      className={`fixed top-0 left-0 right-0 ${open ? 'rounded-2xl' : 'rounded-full'} mx-4 mt-4 z-50 ring-1 ring-white/10 backdrop-blur-xl px-6 py-3 flex flex-col`}
    >
      <div className="flex justify-between">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded text-white font-bold"
        >
          <IconComponent size={18} />
          <div>{current.label}</div>
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        <div className="flex items-center gap-6">
          {SECONDARY_NAV_ITEMS.map((item) => {
            return <NavLink key={item.id} item={item} iconOnly={true} />;
          })}
        </div>
      </div>

      <div
        className={`overflow-hidden transition-[max-height,opacity,margin] ${
          open
            ? 'duration-500 ease-in-out max-h-96 mt-4'
            : 'duration-250 ease-in-out max-h-0 mt-0'
        }`}
      >
        <div className="flex flex-col gap-4" onClick={() => setOpen(false)}>
          {MAIN_NAV_ITEMS.filter((item) => item.id !== current.id).map(
            (item) => (
              <NavLink
                key={item.id}
                item={item}
                isActive={current.id === item.id}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}
