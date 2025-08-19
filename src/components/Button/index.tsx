import { Icon } from '@/types';
import { useHashScroll } from '@/hooks/useHashScroll';
interface ButtonProps {
  text: string;
  clickDetail: string | (() => void);
  icon?: Icon;
  iconOnly?: boolean;
  newTab?: boolean;
  color?: string;
  className?: string;
}

export function Button({
  text,
  clickDetail,
  icon: IconComponent,
  iconOnly,
  newTab,
  color,
  className,
}: ButtonProps) {
  const { scrollToHash } = useHashScroll();
  const buttonStyle = `flex items-center gap-3 ${className}`;
  const onMouseEnter = color
    ? (e: React.MouseEvent<HTMLButtonElement>) => {
        (e.currentTarget as HTMLButtonElement).style.textDecoration =
          `underline ${color}`;
        (e.currentTarget as HTMLButtonElement).style.textUnderlineOffset =
          '2px';
      }
    : undefined;
  const onMouseLeave = color
    ? (e: React.MouseEvent<HTMLButtonElement>) => {
        (e.currentTarget as HTMLButtonElement).style.textDecoration = 'none';
        (e.currentTarget as HTMLButtonElement).style.textUnderlineOffset =
          '0px';
      }
    : undefined;

  const content = (
    <>
      {IconComponent && <IconComponent size={18} />}
      {!iconOnly && <div>{text}</div>}
    </>
  );

  if (typeof clickDetail === 'function') {
    return (
      <button
        onClick={clickDetail}
        className={`${buttonStyle}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </button>
    );
  } else if (typeof clickDetail === 'string') {
    // check for email protection
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

    // check for hash link
    if (!newTab && clickDetail.startsWith('#')) {
      return (
        <button
          onClick={() => scrollToHash(clickDetail)}
          className={`${buttonStyle}`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {content}
        </button>
      );
    }

    // all other links
    return (
      <a
        href={clickDetail}
        target={newTab ? '_blank' : '_self'}
        rel="noopener noreferrer"
        className={`${buttonStyle}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </a>
    );
  }
}
