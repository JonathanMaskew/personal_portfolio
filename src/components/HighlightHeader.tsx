import React from 'react';
import Image, { StaticImageData } from 'next/image';
import type { Icon } from '@/types';

interface HighlightHeaderProps {
  title?: string;
  subtitle?: string;
  subheading?: string;
  imagery?: string | StaticImageData | Icon | React.ReactNode;
  color?: string;
  centered?: boolean;
  orientation?: 'vertical' | 'horizontal';
}

export default function HighlightHeader({
  title,
  subtitle,
  subheading,
  imagery,
  color,
  centered,
  orientation = 'horizontal',
}: HighlightHeaderProps) {
  const isStaticImageData = (value: unknown): value is StaticImageData => {
    return (
      !!value &&
      typeof value === 'object' &&
      'src' in (value as Record<string, unknown>)
    );
  };

  return (
    <div
      className={`flex gap-4 ${orientation === 'vertical' ? `flex-col ${centered ? 'text-center items-center' : ''}` : 'items-center'}`}
    >
      {imagery && (
        <>
          {(() => {
            if (React.isValidElement(imagery)) {
              return imagery;
            }

            if (!isStaticImageData(imagery)) {
              const IconComponent = imagery as Icon;
              return (
                <div className="rounded-full p-4 bg-background/12 min-h-[70px] max-h-[70px] min-w-[70px] max-w-[70px] justify-center items-center flex">
                  <IconComponent size={38} />
                </div>
              );
            }

            return (
              <div className="rounded-full p-4 bg-background/12 min-h-[70px] max-h-[70px] min-w-[70px] max-w-[70px] justify-center items-center flex">
                <Image
                  src={imagery as StaticImageData}
                  alt={`${title || 'feature'} logo`}
                  className="h-[38px] w-auto object-contain"
                />
              </div>
            );
          })()}
        </>
      )}

      {(title || subtitle || subheading) && (
        <div>
          {title && (
            <div className="font-bold text-xl lg:text-2xl font-header leading-tight mb-2">
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
            </div>
          )}
          {subtitle && <div className="text-sm opacity-80">{subtitle}</div>}
          {subheading && <div className="text-xs opacity-80">{subheading}</div>}
        </div>
      )}
    </div>
  );
}
