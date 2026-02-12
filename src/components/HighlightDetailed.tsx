import React from 'react';
import type { HighlightProps } from '@/types';
import HighlightHeader from './HighlightHeader';

export default function HighlightDetailed({
  color,
  imagery,
  title,
  subtitle,
  subheading,
  body,
  children,
  actionButton,
  onClick,
  nested,
}: HighlightProps) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);
  const containerStyle = {
    '--highlight-color': color || 'var(--color-primary)',
  } as React.CSSProperties;

  return (
    <div
      className={`highlight-detailed flex flex-col ${actionButton ? 'pb-18 cursor-pointer' : ''} ${nested ? 'p-4' : 'p-6'} rounded-2xl h-full w-full gap-6 relative transition-shadow duration-200 ${onClick ? 'hover:shadow-[inset_0_0_0_4px_var(--highlight-color)] active:shadow-[inset_0_0_0_4px_var(--highlight-color)]' : ''}`}
      style={containerStyle}
      onClick={onClick}
    >
      {hasHeaderContent && (
        <HighlightHeader
          title={title}
          subtitle={subtitle}
          subheading={subheading}
          imagery={imagery}
          color={color}
          variant="compact"
        />
      )}
      {body && <div className="text-sm lg:text-base">{body}</div>}
      {children && <div>{children}</div>}
      {actionButton && (
        <div className="absolute right-4 bottom-4 flex items-center gap-1">
          {actionButton}
        </div>
      )}
    </div>
  );
}
