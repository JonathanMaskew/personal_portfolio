import React from 'react';
import { renderImagery, type ImageryInput } from '@/utils/renderImagery';

type SectionWrapperProps = {
  title?: string;
  imagery?: ImageryInput;
  subtext?: string | React.ReactElement;
  children: React.ReactNode;
  className?: string;
  styles?: React.CSSProperties;
  actionButton?: React.ReactNode;
};

export default function SectionWrapper({
  title,
  imagery,
  subtext,
  children,
  className,
  styles,
  actionButton,
}: SectionWrapperProps) {
  return (
    <div
      className={`flex flex-col gap-6 md:gap-8 p-6 py-8 md:p-8 md:py-12 w-full max-w-7xl mx-auto ${className}`}
      style={styles}
    >
      {/* Section header */}
      {(imagery || title || subtext) && (
        <div className="flex flex-col gap-2">
          <div className="flex flex-row items-center justify-between gap-8 w-full">
            {(imagery || title) && (
              <div className="flex items-center gap-3">
                {renderImagery(imagery, {
                  iconSize: 32,
                  imageClassName: 'w-6 h-6 md:w-8 md:h-8 object-contain',
                })}
                {title && (
                  <div className="font-bold text-2xl md:text-3xl font-header">
                    {title}
                  </div>
                )}
              </div>
            )}
            {actionButton && <div className="shrink-0">{actionButton}</div>}
          </div>

          {subtext && (
            <div className="flex flex-col gap-2 text-base md:text-lg opacity-80">
              {subtext}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
