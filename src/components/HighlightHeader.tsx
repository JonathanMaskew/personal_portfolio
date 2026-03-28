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
  const startImageryContainerClass = `rounded-2xl p-3 min-h-[72px] max-h-[72px] min-w-[72px] max-w-[72px] ${baseContainerClass}`;

  // For static images in compact mode, we might want overflow-hidden (from HighlightDetailed)
  const finalImageryContainerClass = isStaticImageData(imagery)
    ? `${startImageryContainerClass} overflow-hidden`
    : startImageryContainerClass;

  const iconSize = 36;
  const imageClass = 'h-[41px] w-auto object-contain';

  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {imagery && !isFeature && (
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
          {title && !isFeature && (
            <div className="font-bold text-xl lg:text-2xl font-header">
              {title}
            </div>
          )}
          {title && isFeature && (
            <div className="flex items-center gap-5">
              {imagery && (
                <>
                  {React.isValidElement(imagery) ? (
                    imagery
                  ) : (
                    <div>
                      {renderImagery(imagery, {
                        alt: `${title || 'feature'} logo`,
                        iconSize,
                        // imageClassName: imageClass,
                      })}
                    </div>
                  )}
                </>
              )}
              <h3 className="font-header font-bold text-2xl md:text-3xl">
                {title}
              </h3>
            </div>
          )}
          {subtitle && (
            <div className={`text-sm md:text-base opacity-80 `}>{subtitle}</div>
          )}
          {subheading && (
            <div className={`text-xs md:text-sm opacity-80`}>{subheading}</div>
          )}
        </div>
      )}
    </div>
  );
}
