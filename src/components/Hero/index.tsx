import { Bot, Code, Paintbrush } from 'lucide-react';
import HighlightFeature from '../HighlightFeature';
import turkeyRun from '@/assets/images/turkey_run.png';
import costaRica from '@/assets/images/costa_rica.png';
import graduation from '@/assets/images/graduation.png';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center p-6 h-full w-full justify-center">
      <div className="relative w-full max-w-[325px] md:max-w-[500px] h-[350px] md:h-[200px] flex justify-center">
        <div className="absolute transform rotate-6 left-0 top-45 md:top-5">
          <Image
            src={turkeyRun}
            alt="Turkey Run hiking"
            className="w-40 h-40 object-cover rounded-sm ring-6 border-white border-6"
          />
        </div>
        <div className="absolute transform z-10">
          <Image
            src={graduation}
            alt="Costa Rica zip-lining"
            className="w-50 h-50 object-cover rounded-sm ring-6 border-white border-6 shadow-2xl shadow-black"
          />
        </div>
        <div className="absolute transform -rotate-6 right-0 top-45 md:top-5">
          <Image
            src={costaRica}
            alt="Purdue graduation"
            className="w-40 h-40 object-cover rounded-sm ring-6 border-white border-6"
          />
        </div>
      </div>

      {/* Text */}
      <div className="flex flex-col items-center gap-1">
        <div className="text-5xl font-bold text-center bg-gradient-to-r bg-grad from-orange-500 to-yellow-200 bg-clip-text text-transparent font-header">
          Jonathan Maskew
        </div>
        <div className="text-2xl font-bold text-center opacity-85">
          Software Engineer
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-3 gap-16">
        <HighlightFeature imagery={Bot} title="AI Enthusiast" />
        <HighlightFeature imagery={Code} title="Frontend Connoisseur" />
        <HighlightFeature imagery={Paintbrush} title="Design Aficionado" />
      </div>
    </div>
  );
}
