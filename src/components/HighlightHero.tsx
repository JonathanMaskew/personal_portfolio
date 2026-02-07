import React from 'react';
import Chips from './Chips';

interface HighlightHeroProps {
  title: string;
  subtitle?: string;
  chips?: string[];
  className?: string;
  subtitleClassName?: string;
  chipsClassName?: string;
  children?: React.ReactNode;
  color?: string;
}

export default function HighlightHero({
  title,
  subtitle,
  chips,
  className = '',
  subtitleClassName = '',
  chipsClassName = '',
  children,
  color = 'var(--color-generic)',
}: HighlightHeroProps) {
  const containerStyle = {
    '--highlight-color': color,
  } as React.CSSProperties;

  return (
    <div
      className={`highlight-feature relative rounded-4xl ${className}`}
      style={containerStyle}
    >
      <div className="p-6 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h3 className="font-header font-bold text-2xl md:text-3xl">
            {title}
          </h3>
          {subtitle && (
            <p
              className={`text-md md:text-lg w-[90%] opacity-80 ${subtitleClassName}`}
            >
              {subtitle}
            </p>
          )}
        </div>

        {chips && (
          <div className={`w-full ${chipsClassName}`}>
            <Chips strings={chips} />
          </div>
        )}
      </div>

      {children && <div>{children}</div>}
    </div>
  );
}
