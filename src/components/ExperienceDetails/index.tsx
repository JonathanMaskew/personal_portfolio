'use client';

import type { Experience } from '@/types';
import React from 'react';
import HighlightFeature from '../HighlightFeature';
import Image from 'next/image';
import { CircleEllipsis, ListTodo, Sparkles } from 'lucide-react';
import ModalSection from '../ModalSection';
import Carousel, { CarouselItem } from '../Carousel';

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
      <HighlightFeature
        color={data.color}
        imagery={data.imagery}
        title={data.title}
        subtitle={data.subtitle}
        subheading={data.subheading}
        heading
      />

      <div className="flex flex-col gap-8">
        {data.body && <div className="text-lg text-center">{data.body}</div>}

        {data.coreBullets && data.coreBullets.length > 0 && (
          <ModalSection icon={ListTodo} title="Core Responsibilities">
            <ul className="list-disc pl-4 space-y-2 text-sm leading-tight">
              {data.coreBullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </ModalSection>
        )}

        {data.highlights && data.highlights.length > 0 && (
          <ModalSection icon={Sparkles} title="Key Accomplishments">
            <Carousel color={data.color}>
              {data.highlights.map((highlight, i) => {
                const IconComponent = highlight.icon;
                return (
                  <CarouselItem key={i} className="w-[250px] md:w-[350px]">
                    <HighlightFeature
                      color={data.color}
                      imagery={IconComponent}
                      body={highlight.text}
                      title={highlight.title}
                    />
                  </CarouselItem>
                );
              })}
            </Carousel>
          </ModalSection>
        )}

        {data.bullets && data.bullets.length > 0 && (
          <ModalSection
            icon={CircleEllipsis}
            title="Additional Responsibilities"
          >
            <ul className="list-disc pl-4 space-y-2 text-sm leading-tight">
              {data.bullets.map((bullet, i) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </ModalSection>
        )}

        {data.images && data.images.length > 0 && (
          <div>
            <div className="mb-4 font-bold font-header">Gallery</div>
            <div className="flex flex-wrap gap-4 justify-center bg-black/20 rounded-2xl p-4">
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
      </div>

      {children}
    </>
  );
}
