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
  nested,
}: HighlightProps & {
  actionButton?: React.ReactNode;
}) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);
  const containerStyle = color
    ? {
        background: `${color}80`,
        // boxShadow: `inset 0 0 0 2px ${color}80`,
        transition: 'box-shadow 0.2s',
      }
    : { transition: 'box-shadow 0.2s' };
  return (
    <div
      className={`flex flex-col ${actionButton ? 'pb-16 md:pb-16 cursor-pointer' : ''} ${nested ? 'p-4' : 'p-6 md:p-8'} rounded-2xl h-full w-full gap-6 relative`}
      style={containerStyle}
      onMouseEnter={
        onClick && color
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow =
                `inset 0 0 0 4px ${color}`;
            }
          : undefined
      }
      onMouseLeave={
        onClick && color
          ? (e) => {
              (e.currentTarget as HTMLDivElement).style.boxShadow = 'none';
              // `inset 0 0 0 2px ${color}90`;
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
                  <div className="rounded-2xl p-3 bg-white/10 h-[72px] w-[72px] justify-center items-center flex">
                    <IconComponent size={40} />
                  </div>
                );
              }

              return (
                <div className="rounded-2xl p-3 bg-white/10 h-[72px] w-[72px] justify-center items-center flex">
                  <Image src={imagery} alt={`${title || 'highlight'} logo`} />
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
