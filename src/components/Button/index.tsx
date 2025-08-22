import { Icon } from '@/types';
import { useHashScroll } from '@/hooks/useHashScroll';
interface ButtonProps {
  text: string;
  clickDetail: string | (() => void);
  icon?: Icon;
  iconOnly?: boolean;
  newTab?: boolean;
  color?: string;
  background?: boolean;
  className?: string;
  isFocused?: boolean;
}

export function Button({
  text,
  clickDetail,
  icon: IconComponent,
  iconOnly,
  newTab,
  background,
  color,
  isFocused,
}: ButtonProps) {
  const { scrollToHash } = useHashScroll();
  const buttonClassName = `flex items-center gap-3 w-full ${background ? 'py-2 px-4 rounded-2xl' : ''} ${isFocused ? 'font-bold' : ''}`;
  const buttonStyle = {
    backgroundColor: background ? 'rgba(0,0,0,0.2)' : '',
    opacity: background || isFocused ? '1' : '0.6',
  };

  const onMouseEnter = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.currentTarget.style.backgroundColor =
      color || (background ? 'rgba(0,0,0,0.5)' : '');
    e.currentTarget.style.opacity = '1';
  };
  const onMouseLeave = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => {
    e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
    e.currentTarget.style.opacity = buttonStyle.opacity;
  };

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
        className={`${buttonClassName}`}
        style={buttonStyle}
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
          className={`${buttonClassName} cursor-pointer`}
          style={buttonStyle}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
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
          className={`${buttonClassName}`}
          style={buttonStyle}
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
        className={`${buttonClassName}`}
        style={buttonStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {content}
      </a>
    );
  }
}
