import { Icon } from '@/types';
import Link from 'next/link';
interface ButtonProps {
  text: string;
  clickDetail: string | (() => void);
  icon: Icon;
  iconOnly?: boolean;
  newTab?: boolean;
}

export function Button({
  text,
  clickDetail,
  icon: IconComponent,
  iconOnly,
  newTab,
}: ButtonProps) {
  const buttonStyle = 'flex items-center gap-3';

  const content = (
    <>
      <IconComponent size={18} />
      {!iconOnly && <div>{text}</div>}
    </>
  );

  if (typeof clickDetail === 'function') {
    return (
      <button onClick={clickDetail} className={`${buttonStyle}`}>
        {content}
      </button>
    );
  } else if (typeof clickDetail === 'string') {
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
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className={`${buttonStyle}`}
      >
        {content}
      </a>
    );
  }
}
