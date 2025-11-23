import { Icon } from '@/types';

interface ModalSectionProps {
  icon?: Icon;
  title: string;
  children: React.ReactNode;
}

export default function ModalSection({
  icon: IconComponent,
  title,
  children,
}: ModalSectionProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        {IconComponent && (
          <div>
            <IconComponent size={20} />
          </div>
        )}
        <div className="font-bold text-lg font-header">{title}</div>
      </div>
      <div className="flex flex-col gap-6">{children}</div>
    </div>
  );
}
