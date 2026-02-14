'use client';

import SectionWrapper from '../SectionWrapper';
import { Button } from '../Button';
import ButtonRow from '../Button/ButtonRow';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import HighlightHero from '../HighlightHero';
import { getAboutData } from '@/data/about';
import { useHashScroll } from '@/hooks/useHashScroll';
import { useModalContext } from '@/context/ModalContext';

import {
  Pill,
  Shield,
  Megaphone,
  Palette,
  TrendingUp,
  Code,
  LucideIcon,
  SplinePointer,
  Award,
  Brain,
  Plus,
  Sparkles,
} from 'lucide-react';

function HighlightCore({
  title,
  subtitle,
  items,
  color,
  onClick,
}: {
  title: string;
  subtitle?: string;
  items: { icon: LucideIcon; text: string }[];
  color: string;
  onClick?: () => void;
}) {
  return (
    <div
      className={`relative p-3 rounded-2xl flex flex-col gap-2 text-xs h-full transition-all duration-200 group ${onClick ? 'cursor-pointer hover:shadow-[inset_0_0_0_4px_color-mix(in_srgb,var(--highlight-color),transparent_80%)] active:shadow-[inset_0_0_0_4px_color-mix(in_srgb,var(--highlight-color),transparent_80%)]' : ''}`}
      style={
        {
          backgroundColor: `color-mix(in srgb, ${color}, transparent 90%)`,
          '--highlight-color': color,
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      <div
        className="flex flex-col opacity-80"
        style={{
          color: color,
        }}
      >
        <span className="font-header font-bold">{title}</span>
        {subtitle && <span>{subtitle}</span>}
      </div>

      <div className="flex flex-col gap-1 opacity-80">
        {items.map((item, index) => (
          <div key={index} className="flex gap-1.5">
            <item.icon size={14} className="shrink-0" />
            <span
              className={`leading-tight ${index === items.length - 1 ? 'max-w-[70%]' : ''}`}
            >
              {item.text}
            </span>
          </div>
        ))}
        <div className="absolute bottom-1 right-2">
          <Button
            imagery={Plus}
            text="More"
            imageryOnly
            clickDetail={() => {
              onClick?.();
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const aboutData = getAboutData();
  const { openExperienceModal } = useModalContext();
  const { scrollToHash } = useHashScroll();

  return (
    <SectionWrapper>
      <div className="flex flex-col gap-2 md:gap-4">
        <div
          className={`font-bold underline underline-offset-[3px] md:underline-offset-[4px] decoration-[4px] md:decoration-[5px] font-header text-4xl md:text-5xl`}
          style={{
            textDecorationColor: 'var(--color-primary)',
          }}
        >
          Hi, I'm Jonathan!{' '}
        </div>

        <span className="text-base lg:text-lg max-w-[90%] lg:max-w-[75%]">
          As a Full-stack Engineer passionate about Front-end Development, I
          combine technical expertise with creative leadership to build
          scalable, user-focused experiences.
        </span>

        <ButtonRow>
          {SECONDARY_NAV_ITEMS.map((item) => {
            return (
              <Button
                key={item.id}
                text={item.label}
                imagery={item.icon}
                clickDetail={item.href}
                newTab={item.newTab}
              />
            );
          })}
        </ButtonRow>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <span className="font-header font-bold text-xl md:text-2xl">
          In a nutshell...
        </span>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 w-full">
          <HighlightCore
            title="Full-stack Engineer"
            subtitle="myhELO"
            items={[
              {
                icon: Pill,
                text: 'Architect full-stack ePrescribe',
              },
              {
                icon: Sparkles,
                text: 'Pioneer AI-automation',
              },
              {
                icon: Shield,
                text: 'Implement 2FA',
              },
            ]}
            color="var(--color-myhelo)"
            onClick={() => openExperienceModal('myhelo')}
          />
          <HighlightCore
            title="Front-end Engineer"
            subtitle="Allegion"
            items={[
              {
                icon: Megaphone,
                text: 'Developed announcements system',
              },
              {
                icon: Code,
                text: 'Translated mockups to code',
              },
            ]}
            color="var(--color-allegion)"
            onClick={() => openExperienceModal('allegion')}
          />
          <HighlightCore
            title="Design Director"
            subtitle="Hack the Future"
            items={[
              {
                icon: SplinePointer,
                text: 'Guided UX/UI',
              },
              {
                icon: Palette,
                text: 'Led rebranding',
              },
              {
                icon: TrendingUp,
                text: '~90% increase in applicants',
              },
            ]}
            color="var(--color-htf)"
            onClick={() => openExperienceModal('htf-design-director')}
          />
          <HighlightCore
            title="BS in Computer Science"
            subtitle="Purdue University"
            items={[
              {
                icon: Code,
                text: 'Software Engineering concentration',
              },
              {
                icon: Brain,
                text: '3.69 GPA',
              },
              {
                icon: Award,
                text: "Dean's List & Semester Honors",
              },
            ]}
            color="var(--color-purdue)"
            onClick={() => scrollToHash('#education')}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7 w-full">
        {aboutData.map((data) => {
          const styles: {
            className?: string;
            subtitleClassName?: string;
            chipsClassName?: string;
          } =
            {
              'modern-tech-stack': { className: 'md:row-span-2' },
              'design-engineering': {
                subtitleClassName: 'max-w-[70%]',
                chipsClassName: 'max-w-[55%]',
              },
            }[data.id] || {};

          return (
            <HighlightHero
              key={data.id}
              title={data.title || ''}
              subtitle={data.subtitle}
              chips={data.keywords}
              className={styles.className}
              subtitleClassName={styles.subtitleClassName}
              chipsClassName={styles.chipsClassName}
              color={data.color}
            >
              {data.highlightChildren}
            </HighlightHero>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
