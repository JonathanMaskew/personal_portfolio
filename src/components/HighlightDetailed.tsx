import React from 'react';
import Image, { StaticImageData } from 'next/image';
import type { HighlightProps, Icon } from '@/types';

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
}: HighlightProps & {
  actionButton?: React.ReactNode;
}) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);
  const containerStyle = color
    ? {
        background: `${color}20`,
        boxShadow: `0 0 0 2px ${color}80`,
        transition: 'box-shadow 0.2s',
      }
    : { transition: 'box-shadow 0.2s' };
  return (
    <div
      className={`flex flex-col p-6 md:p-8 ${actionButton ? 'pb-12 md:pb-16 cursor-pointer' : ''} rounded-2xl h-full w-full gap-6 relative`}
      style={containerStyle}
      onMouseEnter={
        actionButton && color
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                `0 0 0 3px ${color}`;
            }
          : undefined
      }
      onMouseLeave={
        actionButton && color
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                `0 0 0 2px ${color}90`;
            }
          : undefined
      }
      onClick={onClick}
    >
      {hasHeaderContent && (
        <div className="flex items-center gap-4">
          {imagery &&
            (() => {
              if (React.isValidElement(imagery)) {
                return imagery;
              }

              const isStaticImageData = (
                value: unknown
              ): value is StaticImageData => {
                return (
                  !!value &&
                  typeof value === 'object' &&
                  'src' in (value as Record<string, unknown>)
                );
              };

              if (!isStaticImageData(imagery)) {
                const IconComponent = imagery as Icon;
                return (
                  <div className="flex items-center justify-center">
                    <IconComponent size={50} />
                  </div>
                );
              }

              return (
                <Image
                  src={imagery}
                  alt={`${title || 'highlight'} logo`}
                  width={50}
                />
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
                <div className="text-base leading-tight">{subtitle}</div>
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
