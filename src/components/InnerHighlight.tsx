import React from 'react';
import type { Icon } from '@/types';

type InnerHighlightProps = {
  icon?: Icon;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  classNames?: {
    container?: string;
    header?: string;
    title?: string;
    text?: string;
  };
  color?: string;
};

export default function InnerHighlight({
  icon: IconComponent,
  title,
  text,
  children,
  onClick,
  className,
  classNames,
  color,
}: InnerHighlightProps) {
  return (
    <div
      className={`flex flex-col gap-4 bg-foreground/10 p-4 w-full rounded-3xl relative transition-all duration-200 ${onClick ? 'cursor-pointer hover:bg-foreground/20 active:bg-foreground/20' : ''} ${className || ''} ${classNames?.container || ''}`}
      style={
        {
          '--highlight-color': color || 'var(--color-foreground)',
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      <div className={`flex gap-4 ${classNames?.header || ''}`}>
        {IconComponent && (
          <div>
            <IconComponent size={30} className="text-foreground-2 mt-1" />
          </div>
        )}
        <div className="flex flex-col text-left">
          {title && (
            <div
              className={`font-bold font-header text-base md:text-lg ${classNames?.title || ''}`}
            >
              {title}
            </div>
          )}
          {text && (
            <div className={`text-sm md:text-base ${classNames?.text || ''}`}>
              {text}
            </div>
          )}
        </div>
      </div>
      {children}
    </div>
  );
}
