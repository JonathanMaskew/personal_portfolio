import { Icon } from '@/types';

type SectionWrapperProps = {
  title: string;
  icon: Icon;
  subtext?: string;
  children: React.ReactNode;
};

export default function SectionWrapper({
  title,
  icon: IconComponent,
  subtext,
  children,
}: SectionWrapperProps) {
  return (
    <div className="flex flex-col gap-8 p-6 md:p-12 w-full">
      {/* Section header */}
      <div>
        <div className="flex items-center gap-3">
          <IconComponent size={24} />
          <div className="font-header font-bold text-2xl">{title}</div>
        </div>
        <div className="">{subtext}</div>
      </div>

      {/* Content */}
      {children}
    </div>
  );
}
