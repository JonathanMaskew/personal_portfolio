import React from 'react';
import { renderImagery, type ImageryInput } from '@/utils/renderImagery';

interface HighlightHeaderProps {
  title?: string;
  subtitle?: string;
  subheading?: string;
  imagery?: ImageryInput;
  className?: string;
}

export default function HighlightHeader({
  title,
  subtitle,
  subheading,
  imagery,
  className = '',
}: HighlightHeaderProps) {
  return (
    <div className={`flex gap-4 items-center ${className}`}>
      {imagery && (
        <div className="rounded-2xl p-3 min-h-[72px] max-h-[72px] min-w-[72px] max-w-[72px] bg-background/12 justify-center items-center flex overflow-hidden">
          {React.isValidElement(imagery) ? (
            imagery
          ) : (
            renderImagery(imagery, {
              alt: `${title || 'feature'} logo`,
              iconSize: 36,
              imageClassName: 'h-[41px] w-auto object-contain',
            })
          )}
        </div>
      )}

      {(title || subtitle || subheading) && (
        <div className="flex flex-col">
          {title && (
            <h3 className="font-header font-bold text-xl lg:text-2xl">
              {title}
            </h3>
          )}
          {subtitle && (
            <div className="text-sm md:text-base opacity-80">{subtitle}</div>
          )}
          {subheading && (
            <div className="text-xs md:text-sm opacity-80">{subheading}</div>
          )}
        </div>
      )}
    </div>
  );
}
