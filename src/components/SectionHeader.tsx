import type { Icon } from '@/types';

type SectionHeaderProps = {
  icon: Icon;
  title: string;
  subtext?: string;
};

export default function SectionHeader({
  icon: IconComponent,
  title,
  subtext,
}: SectionHeaderProps) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <IconComponent size={24} />
        <div className="font-header font-bold text-2xl">{title}</div>
      </div>
      <div className="">{subtext}</div>
    </div>
  );
}
