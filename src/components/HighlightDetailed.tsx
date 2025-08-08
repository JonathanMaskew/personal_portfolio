import Image, { StaticImageData } from 'next/image';
import { HighlightProps } from '@/types';
import { Plus } from 'lucide-react';

export default function HighlightDetailed({
  color,
  image,
  title,
  subtitle,
  subheading,
  body,
  children,
  onClickCallback,
}: HighlightProps) {
  return (
    <div
      className="flex flex-col justify-between p-8 rounded-xl h-full w-full gap-6 relative"
      style={{
        backgroundImage: `
          linear-gradient(
            to top left,
            ${color},
            color-mix(in srgb, ${color} 35%, black)
          )
        `,
      }}
    >
      <div className="flex items-center gap-4">
        {image && <Image src={image} alt={`${title} logo`} height={50} />}
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
      <div className="mb-6">{children}</div>
      {onClickCallback && (
        <button
          className="absolute right-4 bottom-4 flex items-center gap-1"
          onClick={onClickCallback}
        >
          <Plus size={16} />
          <div>More</div>
        </button>
      )}
    </div>
  );
}
