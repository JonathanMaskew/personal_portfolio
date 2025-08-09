import { Bot, Code, Paintbrush } from 'lucide-react';
import HighlightFeature from '../HighlightFeature';

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
        <HighlightFeature imagery={Bot} title="AI Enthusiast" />
        <HighlightFeature imagery={Code} title="Frontend Connoisseur" />
        <HighlightFeature imagery={Paintbrush} title="Design Aficionado" />
      </div>
    </div>
  );
}
