import { Bot, Code, Paintbrush } from 'lucide-react';
import Chips from '../Chips';

export default function Hero() {
  return (
    <div className="flex flex-col gap-16 items-center p-6 h-full w-full justify-center">
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
        {/* <Highlight icon={Bot} heading="AI Enthusiest" />
        <Highlight icon={Code} heading="Frontend Connoisseur" />
        <Highlight icon={Paintbrush} heading="Design Aficianado" /> */}
      </div>
    </div>
  );
}
