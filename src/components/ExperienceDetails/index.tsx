'use client';

import type { Experience } from '@/types';
import React from 'react';
import { CircleEllipsis, ClipboardCheck, ListTodo, Star } from 'lucide-react';
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
        className="text-center items-center"
      />

      {data.body && (
        <div
          className="border-l-4 border-l-foreground px-4 w-full"
          // style={{
          //   background:
          //     'linear-gradient(to right, color-mix(in srgb, white, transparent 90%), transparent)',
          // }}
        >
          {data.body}
        </div>
      )}

      {data.highlights && data.highlights.length > 0 && (
        <ModalSection icon={Star} title="Highlights">
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
        <ModalSection icon={ListTodo} title="Core Responsibilities">
          <ul className="list-disc pl-4 space-y-2 text-base leading-tight">
            {data.coreBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </ModalSection>
      )}

      {data.moreAccomplishments && data.moreAccomplishments.length > 0 && (
        <ModalSection icon={ClipboardCheck} title="Additional Accomplishments">
          <ul className="list-disc pl-4 space-y-2 text-base leading-tight">
            {data.moreAccomplishments.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </ModalSection>
      )}

      {data.moreBullets && data.moreBullets.length > 0 && (
        <ModalSection icon={CircleEllipsis} title="More...">
          <ul className="list-disc pl-4 space-y-2 text-base leading-tight">
            {data.moreBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        </ModalSection>
      )}

      {data.modalChildren}
    </div>
  );
}
