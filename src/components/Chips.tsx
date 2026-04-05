import Image from 'next/image';
import type { Keyword } from '@/types';

type ChipsProps = {
  strings: Array<Keyword | string>;
  color?: string;
  className?: string;
};

export default function Chips({ strings, color, className }: ChipsProps) {
  const chipStyle = {
    background: `color-mix(in srgb, ${color || 'var(--color-foreground)'} ${color ? '20%' : '10%'}, transparent)`,
  } as React.CSSProperties;

  return (
    <div className="flex flex-wrap gap-2">
      {strings.map((chip, index) => {
        const label = typeof chip === 'string' ? chip : chip.label;
        const logo = typeof chip === 'string' ? undefined : chip.logo;

        return (
          <div
            key={index}
            className={`px-3 py-1.5 text-sm rounded-full text-nowrap flex items-center gap-1.5 ${className}`}
            style={chipStyle}
          >
            <div className="flex items-center gap-1.5 opacity-80">
              {logo && (
                <Image
                  src={logo}
                  alt={`${label} logo`}
                  width={16}
                  height={16}
                  className="shrink-0"
                />
              )}
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
