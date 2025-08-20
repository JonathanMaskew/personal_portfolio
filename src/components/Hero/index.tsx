'use client';

import {
  Bot,
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
    <div className="flex flex-col gap-8 md:gap-16 justify-center items-center p-6 min-h-dvh w-full">
      {!isMobileLandscape && (
        <div className="relative w-full max-w-[250px] md:max-w-[500px] h-[270px] md:h-[200px] flex justify-center">
          <div className="absolute transform rotate-6 left-0 top-35 md:top-5">
            <Image
              src={turkeyRun}
              alt="Turkey Run hiking"
              className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-sm ring-6 border-white border-6"
            />
          </div>
          <div className="absolute transform z-10">
            <Image
              src={graduation}
              alt="Costa Rica zip-lining"
              className="w-40 h-40 md:w-50 md:h-50 object-cover rounded-sm ring-6 border-white border-6 shadow-2xl shadow-black"
            />
          </div>
          <div className="absolute transform -rotate-6 right-0 top-35 md:top-5">
            <Image
              src={costaRica}
              alt="Purdue graduation"
              className="w-30 h-30 md:w-40 md:h-40 object-cover rounded-sm ring-6 border-white border-6"
            />
          </div>
        </div>
      )}

      {/* Text */}
      <div className="flex flex-col items-center gap-1">
        <div
          className="text-5xl font-bold text-center font-header"
          style={{
            background: 'linear-gradient(to right, #FF6B18, #fef08a)',
            backgroundClip: 'text',
            color: 'transparent',
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
            { text: 'AI Enthusiast', icon: Bot },
            { text: 'Front-end Connoisseur', icon: SquareMousePointer },
            { text: 'Design Aficionado', icon: Paintbrush },
            { text: 'Idea Generator', icon: Lightbulb },
            { text: 'User Experience Architect', icon: User },
          ]}
          cursorClassName="bg-orange-500"
          size={24}
        />
      </div>

      <div>
        <Button
          text="Scroll to see more"
          icon={ChevronDown}
          clickDetail="#about"
          iconOnly={true}
        />
      </div>
    </div>
  );
}
