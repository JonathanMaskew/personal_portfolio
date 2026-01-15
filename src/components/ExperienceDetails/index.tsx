'use client';

import type { Experience } from '@/types';
import React from 'react';
import { CircleEllipsis, ListTodo, Star } from 'lucide-react';
import ModalSection from '../ModalSection';
import InnerHighlight from '../InnerHighlight';
import HighlightHeader from '../HighlightHeader';

type ExperienceDetailsProps = {
  data: Experience;
};

export default function ExperienceDetails({ data }: ExperienceDetailsProps) {
  if (data.overrideChildren) {
    return data.overrideChildren;
  }

  return (
    <div className="flex flex-col gap-10">
      <HighlightHeader
        color={data.color}
        imagery={data.imagery}
        title={data.title}
        subtitle={data.subtitle}
        subheading={data.subheading}
        orientation="vertical"
        centered
      />

      {data.body && <div className="text-center">{data.body}</div>}

      {data.highlights && data.highlights.length > 0 && (
        <ModalSection icon={Star} title="Key Accomplishments">
          <div className="flex flex-wrap gap-3 justify-center">
            {data.highlights.map((highlight, i) => (
              <InnerHighlight
                key={i}
                icon={highlight.icon}
                title={highlight.title}
                text={highlight.text}
              >
                {highlight.children}
              </InnerHighlight>
            ))}
          </div>
        </ModalSection>
      )}

      {data.coreBullets && data.coreBullets.length > 0 && (
        <ModalSection
          icon={ListTodo}
          title="Core Responsibilities & Accomplishments"
        >
          <ul className="list-disc pl-4 space-y-2 text-sm leading-tight">
            {data.coreBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </ModalSection>
      )}

      {data.bullets && data.bullets.length > 0 && (
        <ModalSection icon={CircleEllipsis} title="Additional Responsibilities">
          <ul className="list-disc pl-4 space-y-2 text-sm leading-tight">
            {data.bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </ModalSection>
      )}

      {data.modalChildren}
    </div>
  );
}
