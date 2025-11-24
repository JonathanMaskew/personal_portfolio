'use client';

import {
  Sparkles,
  ChevronDown,
  Lightbulb,
  Paintbrush,
  SquareMousePointer,
  User,
} from 'lucide-react';
import TypewriterText from '../TypewriterText';
import turkeyRun from '@/assets/images/turkey_run.png';
import costaRica from '@/assets/images/costa_rica.png';
import graduation from '@/assets/images/graduation.png';
import Image from 'next/image';
import { useMobile } from '@/hooks/useMobile';
import { Button } from '../Button';

export default function Hero() {
  const { isMobileLandscape } = useMobile();

  return (
    <div className="flex flex-col gap-8 md:gap-16 justify-center items-center p-6 md:p-8 min-h-screen w-full">
      {!isMobileLandscape && (
        <div className="relative w-full max-w-[250px] md:max-w-[500px] h-[270px] md:h-[200px] flex justify-center">
          <div className="absolute transform rotate-6 left-0 top-36 md:top-5">
            <div className="animate-slide-in-left">
              <Image
                src={turkeyRun}
                alt="Turkey Run hiking"
                priority
                unoptimized
                className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-sm border-6 border-foreground"
              />
            </div>
          </div>
          <div className="absolute transform z-10">
            <div className="animate-scale-in">
              <Image
                src={graduation}
                alt="Purdue graduation"
                priority
                unoptimized
                className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-sm border-6 border-foreground shadow-2xl shadow-black"
              />
            </div>
          </div>
          <div className="absolute transform -rotate-6 right-0 top-36 md:top-5">
            <div className="animate-slide-in-right">
              <Image
                src={costaRica}
                alt="Costa Rica zip-lining"
                priority
                unoptimized
                className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-sm border-6 border-foreground"
              />
            </div>
          </div>
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col items-center gap-1">
        <div
          className="text-5xl font-bold text-center font-header"
          style={{
            background:
              'linear-gradient(to right, var(--color-primary), var(--color-primary-accent))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Jonathan Maskew
        </div>
        <div className="text-2xl font-bold text-center">Software Engineer</div>
      </div>

      {/* Highlights */}
      <div className="text-2xl font-bold text-center">
        <TypewriterText
          texts={[
            { text: 'AI Enthusiast', icon: Sparkles },
            { text: 'Front-end Connoisseur', icon: SquareMousePointer },
            { text: 'Design Aficionado', icon: Paintbrush },
            { text: 'Idea Generator', icon: Lightbulb },
            { text: 'User Experience Architect', icon: User },
          ]}
          size={24}
        />
      </div>

      <div>
        <Button
          text="Scroll to see more"
          imagery={ChevronDown}
          clickDetail="#about"
          imageryOnly={true}
        />
      </div>
    </div>
  );
}
