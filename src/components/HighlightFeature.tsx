import React from 'react';
import type { HighlightProps, Icon } from '@/types';
import Image, { StaticImageData } from 'next/image';

export default function HighlightFeature({
  color,
  imagery,
  title,
  subtitle,
  subheading,
  body,
  nested,
  children,
}: HighlightProps) {
  return (
    <div
      className={`flex flex-col justify-between ${nested ? 'p-4' : 'p-8'} rounded-xl h-full w-full gap-6`}
      style={{
        backgroundImage: `
          linear-gradient(
            to top,
            ${color},
            color-mix(in srgb, ${color} 35%, black)
          )
        `,
      }}
    >
      <div className="flex flex-col gap-4 items-center">
        {imagery && (
          <>
            {(() => {
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
                return <IconComponent size={50} />;
              }

              return (
                <Image
                  src={imagery as StaticImageData}
                  alt={`${title} logo`}
                  width={100}
                  height={100}
                />
              );
            })()}
          </>
        )}

        <div>
          <div className="font-bold text-lg font-header leading-tight text-center">
            {title}
          </div>

          {subtitle && (
            <div className="text-base leading-tight text-center">
              {subtitle}
            </div>
          )}
          {subheading && (
            <div className="text-xs leading-tight text-center">
              {subheading}
            </div>
          )}
        </div>
      </div>
      {body && <div className="text-center">{body}</div>}
      {children}
    </div>
  );
}
