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
  actionButton?: React.ReactNode;
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
  actionButton,
  color = 'var(--color-generic)',
}: HighlightHeroProps) {
  const containerStyle = {
    '--highlight-color': color,
  } as React.CSSProperties;

  return (
    <div
      className={`highlight-feature relative rounded-2xl p-6 flex flex-col gap-6 ${actionButton ? 'pb-18' : ''} ${className}`}
      style={containerStyle}
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-header font-bold text-2xl lg:text-3xl">{title}</h3>
        {subtitle && (
          <p
            className={`text-base lg:text-lg w-[90%] opacity-80 ${subtitleClassName}`}
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

      {children && <div>{children}</div>}

      {actionButton && (
        <div className="self-center absolute bottom-4">{actionButton}</div>
      )}
    </div>
  );
}
