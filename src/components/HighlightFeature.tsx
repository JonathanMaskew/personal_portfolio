import React from 'react';
import type { HighlightProps } from '@/types';
import HighlightHeader from './HighlightHeader';

export default function HighlightFeature({
  color,
  imagery,
  title,
  subtitle,
  subheading,
  body,
  nested,
  children,
  actionButton,
  onClick,
  headerOrientation,
  className,
}: HighlightProps & {
  headerOrientation?: 'vertical' | 'horizontal';
  className?: string;
}) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);
  const containerStyle = {
    '--highlight-color': color || 'var(--color-primary)',
  } as React.CSSProperties;
  const paddingClass = nested ? 'p-4' : 'p-6';

  return (
    <div
      className={`highlight-feature flex flex-col ${paddingClass} ${actionButton ? 'pb-18 cursor-pointer' : ''} rounded-2xl ${nested ? 'h-fit' : 'h-full'} w-full gap-6 relative transition-shadow duration-200 ${onClick ? 'hover:shadow-[inset_0_0_0_4px_var(--highlight-color)] active:shadow-[inset_0_0_0_4px_var(--highlight-color)]' : ''} ${className || ''}`}
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
          orientation={headerOrientation}
        />
      )}
      {body && <div className="text-sm">{body}</div>}
      {children}
      {actionButton && (
        <div className="self-center absolute bottom-4">{actionButton}</div>
      )}
    </div>
  );
}
