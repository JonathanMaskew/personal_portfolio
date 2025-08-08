import { Icon } from '@/types';
import { ReactNode } from 'react';

type HighlightProps = {
  color: string;
  nested?: boolean;
  children: ReactNode;
};

export default function Highlight({ color, nested, children }: HighlightProps) {
  return (
    <div
      className={`flex flex-col rounded-xl w-full h-fit ${nested ? 'p-4' : 'p-8'}`}
      style={{
        backgroundImage: `
          linear-gradient(
            to top left,
            ${color},                    /* your base color */
            color-mix(in srgb, ${color} 35%, black)
          )
        `,
        // backgroundColor: `${color}50`,
        // backgroundImage: `linear-gradient(to top left, ${color}50, transparent)`,
      }}
    >
      {children}
    </div>
  );
}
