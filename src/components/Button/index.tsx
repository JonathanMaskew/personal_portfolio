import { Icon } from '@/types';
import Link from 'next/link';

export type ButtonType = 'A-TAG' | 'NEXT-LINK' | 'BUTTON-TAG';

interface ButtonProps {
  text: string;
  clickDetail: string | (() => void);
  icon: Icon;
  type: ButtonType;
  iconOnly?: boolean;
  isActive?: boolean;
}

export function Button({
  text,
  clickDetail,
  icon: IconComponent,
  type,
  iconOnly,
  isActive,
}: ButtonProps) {
  const buttonStyle = `flex items-center ${isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`;

  const content = (
    <>
      <IconComponent size={18} />
      {!iconOnly && <div>{text}</div>}
    </>
  );

  switch (type) {
    case 'A-TAG':
      if (typeof clickDetail === 'string') {
        return (
          <a href={clickDetail} className={`${buttonStyle} gap-2`}>
            {content}
          </a>
        );
      }
      break;
    case 'NEXT-LINK':
      if (typeof clickDetail === 'string') {
        return (
          <Link href={clickDetail} className={`${buttonStyle} gap-3`}>
            {content}
          </Link>
        );
      }
    case 'BUTTON-TAG':
      if (typeof clickDetail === 'function') {
        return (
          <button onClick={clickDetail} className={`${buttonStyle} gap-2`}>
            {content}
          </button>
        );
      }
    default:
      return null;
  }
}
