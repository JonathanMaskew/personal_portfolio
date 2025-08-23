'use client';

import type { Experience } from '@/types';
import React from 'react';
import HighlightFeature from '../HighlightFeature';
import { CircleEllipsis, ListTodo, Sparkles } from 'lucide-react';
import ModalSection from '../ModalSection';
import InnerHighlight from '../InnerHighlight';

type ExperienceDetailsProps = {
  data: Experience;
};

export default function ExperienceDetails({ data }: ExperienceDetailsProps) {
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

      <div className="flex flex-col gap-10">
        {data.body && <div className="text-center">{data.body}</div>}

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

        {data.modalChildren}
      </div>
    </>
  );
}
