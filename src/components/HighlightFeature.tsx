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
}: HighlightProps & {
  actionButton?: React.ReactNode;
}) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);
  const containerStyle = color
    ? {
        background: `radial-gradient(circle at top left, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
        // boxShadow: `inset 0 0 0 2px ${color}80`,
        transition: 'box-shadow 0.2s',
      }
    : {
        transition: 'box-shadow 0.2s',
      };
  return (
    <div
      className={`flex flex-col ${nested ? 'p-4' : 'p-6 md:p-8'} ${actionButton ? 'pb-18 md:pb-18 cursor-pointer' : ''} rounded-2xl ${nested ? 'h-fit' : 'h-full'} w-full gap-6 relative`}
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
        <div className="flex flex-col gap-4">
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
                    <div
                      className="rounded-full p-4 w-fit bg-white/20"
                      // style={{ background: `40` }}
                    >
                      <IconComponent size={40} />
                    </div>
                  );
                }

                return (
                  <Image
                    src={imagery as StaticImageData}
                    alt={`${title || 'feature'} logo`}
                    width={40}
                    height={40}
                  />
                );
              })()}
            </>
          )}

          {(title || subtitle || subheading) && (
            <div>
              {title && (
                <div
                  className="font-bold text-xl font-header leading-tight mb-2"
                  style={{
                    textDecoration: `underline ${color}`,
                    textUnderlineOffset: '2px',
                  }}
                >
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
      {body && <div className="text-sm">{body}</div>}
      {children}
      {actionButton && (
        <div className="self-center absolute bottom-4">{actionButton}</div>
      )}
    </div>
  );
}
