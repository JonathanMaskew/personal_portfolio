import { LucideIcon, Plus } from 'lucide-react';
import { Button } from './Button';

export default function HighlightSnippet({
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
      className={`highlight-detailed relative p-3 rounded-2xl flex flex-col gap-2 text-xs h-full transition-all duration-200 group ${onClick ? 'cursor-pointer hover:shadow-[inset_0_0_0_4px_var(--highlight-color)] active:shadow-[inset_0_0_0_4px_var(--highlight-color)]' : ''}`}
      style={
        {
          '--highlight-color': color,
        } as React.CSSProperties
      }
      onClick={onClick}
    >
      <div className="flex flex-col text-foreground-2">
        <span className="font-header font-bold">{title}</span>
        {subtitle && <span className="opacity-80">{subtitle}</span>}
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
