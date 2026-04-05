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
  orientation?: 'vertical' | 'horizontal';
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
  orientation = 'vertical',
}: InnerHighlightProps) {
  return (
    <div
      className={`inner-highlight ${onClick ? 'inner-highlight-interactive cursor-pointer' : ''} flex flex-col gap-4 ${color ? '' : 'bg-foreground/10'} p-4 w-full rounded-3xl relative transition-all duration-200 ${className || ''} ${classNames?.container || ''}`}
      style={
        {
          '--highlight-color': color || 'var(--color-foreground)',
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      {(IconComponent || title || text) && (
        <>
          {orientation === 'horizontal' ? (
            <div className={`flex gap-4 w-full ${classNames?.header || ''}`}>
              {IconComponent && (
                <div>
                  <IconComponent size={30} className="text-foreground-2 mt-1 shrink-0" />
                </div>
              )}
              <div className="flex flex-col text-left flex-1">
                <div className="flex justify-between items-baseline gap-2 w-full">
                  {title && (
                    <div
                      className={`font-bold font-header text-base md:text-lg ${classNames?.title || ''}`}
                      style={{ color: 'var(--highlight-color)' }}
                    >
                      {title}
                    </div>
                  )}
                  {text && (
                    <div
                      className={`text-sm md:text-base text-right shrink-0 ${classNames?.text || ''}`}
                    >
                      {text}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className={`flex flex-col gap-2 w-full ${classNames?.header || ''}`}>
              {(IconComponent || title) && (
                <div className="flex items-center gap-3">
                  {IconComponent && (
                    <IconComponent
                      size={30}
                      className="text-foreground-2 shrink-0"
                    />
                  )}
                  {title && (
                    <div
                      className={`font-bold font-header text-base md:text-lg ${classNames?.title || ''}`}
                      style={{ color: 'var(--highlight-color)' }}
                    >
                      {title}
                    </div>
                  )}
                </div>
              )}
              {text && (
                <div className={`text-sm md:text-base text-left ${classNames?.text || ''}`}>
                  {text}
                </div>
              )}
            </div>
          )}
        </>
      )}
      {children}
    </div>
  );
}
