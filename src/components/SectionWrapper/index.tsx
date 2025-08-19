import { Icon } from '@/types';

type SectionWrapperProps = {
  title?: string;
  icon?: Icon;
  subtext?: string | React.ReactElement;
  children: React.ReactNode;
};

export default function SectionWrapper({
  title,
  icon: IconComponent,
  subtext,
  children,
}: SectionWrapperProps) {
  return (
    <div className="flex flex-col gap-6 md:gap-8 p-6 md:p-12 w-full max-w-7xl mx-auto">
      {/* Section header */}
      {(IconComponent || title || subtext) && (
        <div className="flex flex-col gap-2">
          {(IconComponent || title) && (
            <div className="flex items-center gap-3">
              {IconComponent && <IconComponent size={24} />}
              {title && (
                <div className="font-header font-bold text-2xl">{title}</div>
              )}
            </div>
          )}

          {subtext && <div className="flex flex-col gap-2">{subtext}</div>}
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
