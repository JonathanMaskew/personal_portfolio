import React from 'react';
import type { Icon } from '@/types';

type InnerHighlightProps = {
  icon?: Icon;
  title?: string;
  text: string;
  children?: React.ReactNode;
};

export default function InnerHighlight({
  icon: IconComponent,
  title,
  text,
  children,
}: InnerHighlightProps) {
  return (
    <div className="flex flex-col gap-4 bg-background/12 p-4 w-full rounded-2xl">
      <div className="flex items-start gap-4">
        {IconComponent && (
          <div>
            <IconComponent size={30} className="text-foreground" />
          </div>
        )}
        <div className="flex flex-col gap-1 text-sm">
          {title && <div className="font-bold font-header">{title}</div>}
          <div>{text}</div>
        </div>
      </div>
      {children}
    </div>
  );
}
