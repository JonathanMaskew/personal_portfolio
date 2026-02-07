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
    <div className="flex flex-col gap-6 md:gap-8 p-6 md:p-8 w-full max-w-7xl mx-auto">
      {/* Section header */}
      {(IconComponent || title || subtext) && (
        <div className="flex flex-col gap-2">
          {(IconComponent || title) && (
            <div className="flex items-center gap-3">
              {IconComponent && (
                <div className="w-6 h-6 md:w-8 md:h-8">
                  <IconComponent size="100%" />
                </div>
              )}
              {title && (
                <div className="font-bold text-2xl md:text-3xl font-header">
                  {title}
                </div>
              )}
            </div>
          )}

          {subtext && (
            <div className="flex flex-col gap-2 text-md md:text-lg opacity-80">
              {subtext}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      {children}
    </div>
  );
}
