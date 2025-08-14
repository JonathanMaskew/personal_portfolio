import { Icon } from '@/types';
import Link from 'next/link';

export type ButtonType = 'A-TAG' | 'NEXT-LINK' | 'BUTTON-TAG';

interface ButtonProps {
  text: string;
  clickDetail: string | (() => void);
  icon: Icon;
  type: ButtonType;
  iconOnly?: boolean;
}

export function Button({
  text,
  clickDetail,
  icon: IconComponent,
  type,
  iconOnly,
}: ButtonProps) {
  const buttonStyle = 'flex items-center gap-3';

  const content = (
    <>
      <IconComponent size={18} />
      {!iconOnly && <div>{text}</div>}
    </>
  );

  switch (type) {
    case 'A-TAG':
      if (typeof clickDetail === 'string') {
        // Handle email protection
        if (clickDetail === 'email-protection') {
          const handleEmailClick = () => {
            const email = 'jmaskew1.softwareEngineer@gmail.com';
            window.location.href = `mailto:${email}`;
          };

          return (
            <button
              onClick={handleEmailClick}
              className={`${buttonStyle} cursor-pointer`}
            >
              {content}
            </button>
          );
        }

        return (
          <a
            href={clickDetail}
            target="_blank"
            rel="noopener noreferrer"
            className={`${buttonStyle}`}
          >
            {content}
          </a>
        );
      }
      break;
    case 'NEXT-LINK':
      if (typeof clickDetail === 'string') {
        return (
          <Link href={clickDetail} className={`${buttonStyle}`}>
            {content}
          </Link>
        );
      }
    case 'BUTTON-TAG':
      if (typeof clickDetail === 'function') {
        return (
          <button onClick={clickDetail} className={`${buttonStyle}`}>
            {content}
          </button>
        );
      }
    default:
      return null;
  }
}
