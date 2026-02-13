import React from 'react';
import {
  renderImagery,
  isStaticImageData,
  type ImageryInput,
} from '@/utils/renderImagery';

interface HighlightHeaderProps {
  title?: string;
  subtitle?: string;
  subheading?: string;
  imagery?: ImageryInput;
  color?: string;
  className?: string;
  variant?: 'feature' | 'compact';
}

export default function HighlightHeader({
  title,
  subtitle,
  subheading,
  imagery,
  color,
  className,
  variant = 'feature',
}: HighlightHeaderProps) {
  const isFeature = variant === 'feature';

  // Imagery container styles
  const baseContainerClass =
    'bg-background/12 justify-center items-center flex';
  const startImageryContainerClass = isFeature
    ? `rounded-full p-4 min-h-[72px] max-h-[72px] min-w-[72px] max-w-[72px] ${baseContainerClass}`
    : `rounded-2xl p-3 min-h-[65px] max-h-[65px] min-w-[65px] max-w-[65px] ${baseContainerClass}`;

  // For static images in compact mode, we might want overflow-hidden (from HighlightDetailed)
  const finalImageryContainerClass = isStaticImageData(imagery)
    ? `${startImageryContainerClass} overflow-hidden`
    : startImageryContainerClass;

  const iconSize = 36;
  const imageClass = 'h-[41px] w-auto object-contain';

  return (
    <div
      className={`flex gap-4 ${isFeature ? 'flex-col' : 'items-center'} ${className}`}
    >
      {imagery && (
        <>
          {React.isValidElement(imagery) ? (
            imagery
          ) : (
            <div className={finalImageryContainerClass}>
              {renderImagery(imagery, {
                alt: `${title || 'feature'} logo`,
                iconSize,
                imageClassName: imageClass,
              })}
            </div>
          )}
        </>
      )}

      {(title || subtitle || subheading) && (
        <div className="flex flex-col">
          {title && (
            <div
              className={`font-bold text-xl lg:text-2xl font-header ${isFeature ? 'mb-2' : ''}`}
            >
              {isFeature ? (
                <span
                  className="underline"
                  style={{
                    textDecorationColor: color,
                    textDecorationThickness: '3px',
                    textUnderlineOffset: '2px',
                  }}
                >
                  {title}
                </span>
              ) : (
                title
              )}
            </div>
          )}
          {subtitle && (
            <div className={`text-sm md:text-base opacity-80`}>{subtitle}</div>
          )}
          {subheading && (
            <div className={`text-xs md:text-sm opacity-80`}>{subheading}</div>
          )}
        </div>
      )}
    </div>
  );
}
