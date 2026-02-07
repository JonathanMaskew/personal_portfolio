import React from 'react';
import type { HighlightProps } from '@/types';
import { renderImagery, isStaticImageData } from '@/components/renderImagery';

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
      className={`highlight-detailed flex flex-col ${actionButton ? 'pb-18 cursor-pointer' : ''} ${nested ? 'p-4' : 'p-6'} rounded-4xl h-full w-full gap-6 relative transition-shadow duration-200 ${onClick ? 'hover:shadow-[inset_0_0_0_4px_var(--highlight-color)] active:shadow-[inset_0_0_0_4px_var(--highlight-color)]' : ''}`}
      style={containerStyle}
      onClick={onClick}
    >
      {hasHeaderContent && (
        <div className="flex items-center gap-4">
          {imagery &&
            (() => {
              if (React.isValidElement(imagery)) return imagery;
              const base =
                'rounded-2xl p-3 bg-background/12 min-h-[60px] max-h-[60px] min-w-[60px] max-w-[60px] justify-center items-center flex';
              const cls = isStaticImageData(imagery)
                ? `${base} overflow-hidden`
                : base;
              return (
                <div className={cls}>
                  {renderImagery(imagery, {
                    alt: `${title || 'highlight'} logo`,
                    iconSize: 36,
                    imageClassName: 'h-[36px] w-auto object-contain',
                  })}
                </div>
              );
            })()}
          {(title || subtitle || subheading) && (
            <div className="flex flex-col">
              {title && (
                <div className="font-bold text-lg font-header leading-tight">
                  {title}
                </div>
              )}
              {subtitle && (
                <div className="text-sm leading-tight">{subtitle}</div>
              )}
              {subheading && (
                <div className="text-xs leading-tight">{subheading}</div>
              )}
            </div>
          )}
        </div>
      )}
      {body && <div className="leading-tight text-sm">{body}</div>}
      {children && <div>{children}</div>}
      {actionButton && (
        <div className="absolute right-4 bottom-4 flex items-center gap-1">
          {actionButton}
        </div>
      )}
    </div>
  );
}
