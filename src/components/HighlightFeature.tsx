import { HighlightProps } from '@/types';
import { Plus } from 'lucide-react';
import Image from 'next/image';

export default function HighlightFeature({
  color,
  image,
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
        {image && (
          <Image src={image} alt="Purdue logo" width={100} height={100} />
        )}

        <div>
          <div className="font-bold text-lg font-header leading-tight text-center">
            {title}
          </div>

          <div className="text-base leading-tight text-center">{subtitle}</div>
          <div className="text-xs leading-tight text-center">{subheading}</div>
        </div>
      </div>
      <div className="text-center">{body}</div>
      {children}
    </div>
  );
}
