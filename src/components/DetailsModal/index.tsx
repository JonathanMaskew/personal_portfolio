'use client';

import type { Experience } from '@/types';
import React from 'react';
import HighlightFeature from '../HighlightFeature';
import Image from 'next/image';

type DetailsModalProps = {
  data: Experience;
  children?: React.ReactNode;
};

export default function DetailsModal({ data, children }: DetailsModalProps) {
  const isJob = 'company' in data && data.company;
  const isEducation = 'subtitle' in data && data.subtitle && !isJob;

  return (
    <div className="flex flex-col md:flex-row gap-8 h-full md:overflow-y-auto">
      <HighlightFeature
        imagery={data.imagery}
        title={data.title}
        subtitle={isJob ? data.company : data.subtitle}
        subheading={isJob ? data.timeRange : data.subheading}
        nested={true}
      />
      {/* <div className="flex flex-col gap-6 items-center">
        {data.imagery && (
          <>
            {(() => {
              if (React.isValidElement(data.imagery)) {
                return data.imagery;
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

              if (!isStaticImageData(data.imagery)) {
                const IconComponent = data.imagery as Icon;
                return (
                  <div className="rounded-full p-4 w-fit bg-white/20">
                    <IconComponent size={40} />
                  </div>
                );
              }

              return (
                <Image
                  src={data.imagery as StaticImageData}
                  alt={`${data.title || 'feature'} logo`}
                  width={100}
                  height={100}
                />
              );
            })()}
          </>
        )}
        <div className="flex flex-col gap-1">
          {data.title && (
            <div className="font-bold text-xl font-header leading-tight">
              {data.title}
            </div>
          )}

          {(isJob ? data.company : data.subtitle) && (
            <div className="text-sm leading-tight">
              {isJob ? data.company : data.subtitle}
            </div>
          )}

          {(isJob ? data.timeRange : data.subheading) && (
            <div className="text-xs leading-tight">
              {isJob ? data.timeRange : data.subheading}
            </div>
          )}
        </div>

        {(isJob ? data.jobDescription : data.body) && (
          <div className="text-sm">
            {isJob ? data.jobDescription : data.body}
          </div>
        )}
      </div> */}

      <div className="flex flex-col gap-6 overflow-y-auto h-full min-w-1/2">
        {isJob && data.highlights && (
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
              {isJob
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

        {isEducation && data.images && data.images.length > 0 && (
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
      </div>
    </div>
  );
}
