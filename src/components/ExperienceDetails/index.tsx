'use client';

import type { Experience } from '@/types';
import React from 'react';
import HighlightFeature from '../HighlightFeature';
import Image from 'next/image';

type ExperienceDetailsProps = {
  data: Experience;
  children?: React.ReactNode;
};

export default function ExperienceDetails({
  data,
  children,
}: ExperienceDetailsProps) {
  return (
    <>
      <div>
        <HighlightFeature
          color={data.color}
          imagery={data.imagery}
          title={data.title}
          subtitle={data.subtitle}
          subheading={data.subheading}
          heading
        />
      </div>

      {data.highlights && data.highlights.length > 0 && (
        <div>
          <div className="mb-2 font-bold font-header">Highlights</div>
          <div className="flex flex-col gap-4">
            {data.highlights.map((highlight, i) => {
              const IconComponent = highlight.icon;
              return (
                <div key={i} className="flex items-start gap-4">
                  <div>
                    <IconComponent size={30} />
                  </div>
                  <div className="text-sm">{highlight.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {data.bullets && data.bullets.length > 0 && (
        <div>
          <div className="mb-2 font-bold font-header">
            {data.highlights && data.highlights.length > 0
              ? 'Additional responsibilities...'
              : 'Key responsibilities...'}
          </div>
          <ul className="list-disc pl-4 space-y-2 text-sm leading-tight">
            {data.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </div>
      )}

      {data.images && data.images.length > 0 && (
        <div>
          <div className="mb-4 font-bold font-header">Gallery</div>
          <div className="flex flex-wrap gap-4 justify-center bg-white/20 rounded-2xl p-4">
            {data.images.map((img, img_index) => (
              <Image
                key={img_index}
                src={img}
                alt={`${data.subtitle} image ${img_index}`}
                className="w-18 object-contain"
              />
            ))}
          </div>
        </div>
      )}

      {children}
    </>
  );
}
