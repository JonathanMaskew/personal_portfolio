'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
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

  return (
    <div className="fixed top-0 left-0 right-0 rounded-full mx-4 mt-4 z-50 ring-1 ring-white/10 backdrop-blur-xl px-6 py-3 flex justify-between">
      <div className="relative">
        <button
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 rounded px-2 py-1 text-white/90 hover:text-white"
        >
          <span className="text-sm font-semibold">{current.label}</span>
          <ChevronDown size={16} />
        </button>

        {open && (
          <ul
            role="listbox"
            className="absolute left-0 mt-2 w-40 overflow-hidden rounded-md border border-white/10 bg-zinc-900/95 shadow-xl"
          >
            {MAIN_NAV_ITEMS.map((item) => (
              <li
                key={item.id}
                role="option"
                aria-selected={current.id === item.id}
              >
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex items-center gap-6">
        {SECONDARY_NAV_ITEMS.map((item) => {
          return <NavLink key={item.id} item={item} iconOnly={true} />;
        })}
      </div>
    </div>
  );
}
