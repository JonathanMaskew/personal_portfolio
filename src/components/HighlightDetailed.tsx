import React from 'react';
import Image, { StaticImageData } from 'next/image';
import type { HighlightProps, Icon } from '@/types';
import { Plus } from 'lucide-react';
import { Button, ButtonType } from './Button';

export default function HighlightDetailed({
  color,
  imagery,
  title,
  subtitle,
  subheading,
  body,
  children,
  onClickCallback,
}: HighlightProps) {
  return (
    <div
      className={`flex flex-col p-8 ${onClickCallback ? 'pb-16' : ''} rounded-xl h-full w-full gap-6 relative`}
      style={{
        backgroundImage: `
          linear-gradient(
            to top left,
            ${color},
            color-mix(in srgb, ${color} 45%, black)
          )
        `,
      }}
    >
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
              return <IconComponent size={50} />;
            }

            return <Image src={imagery} alt={`${title} logo`} height={50} />;
          })()}
        <div className="flex flex-col">
          <div className="font-bold text-lg font-header leading-tight">
            {title}
          </div>
          {subtitle && (
            <div className="text-base leading-tight">{subtitle}</div>
          )}
          {subheading && (
            <div className="text-xs leading-tight">{subheading}</div>
          )}
        </div>
      </div>
      {body && <div className="leading-tight text-sm">{body}</div>}
      {children && <div className="mb-6">{children}</div>}
      {onClickCallback && (
        <div className="absolute right-4 bottom-4 flex items-center gap-1">
          <Button
            text="More"
            icon={Plus}
            clickDetail={onClickCallback}
            type={'BUTTON-TAG' as ButtonType}
            isActive={true}
          />
        </div>
      )}
    </div>
  );
}
