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
  actionButton,
  onClick,
  heading,
}: HighlightProps & {
  heading?: boolean;
}) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);
  const containerStyle =
    color && !heading
      ? {
          background: `radial-gradient(circle at top left, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
          // boxShadow: `inset 0 0 0 2px ${color}80`,
          transition: 'box-shadow 0.2s',
        }
      : {
          transition: 'box-shadow 0.2s',
        };
  const paddingClass = heading ? 'p-0' : nested ? 'p-4' : 'p-6 md:p-8';

  return (
    <div
      className={`flex flex-col ${paddingClass} ${heading ? 'mb-8 items-center' : ''} ${actionButton ? 'pb-18 md:pb-18 cursor-pointer' : ''} rounded-2xl ${nested ? 'h-fit' : 'h-full'} w-full gap-6 relative`}
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
        <div
          className={`flex flex-col gap-4 ${heading ? 'items-center text-center' : ''}`}
        >
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
                  return (
                    <div className="rounded-full p-4 bg-black/10 min-h-[70px] max-h-[70px] min-w-[70px] max-w-[70px] justify-center items-center flex">
                      <IconComponent size={38} />
                    </div>
                  );
                }

                return (
                  <div className="rounded-full p-4 bg-black/10 min-h-[70px] max-h-[70px] min-w-[70px] max-w-[70px] justify-center items-center flex">
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
                <div className="font-bold text-xl font-header leading-tight mb-2">
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
      {body && !heading && <div className="text-sm">{body}</div>}
      {children}
      {actionButton && (
        <div className="self-center absolute bottom-4">{actionButton}</div>
      )}
    </div>
  );
}
