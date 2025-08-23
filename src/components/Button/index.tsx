import { Icon } from '@/types';
import { useHashScroll } from '@/hooks/useHashScroll';
import { useHoverPressHandlers } from '@/hooks/useHoverPressHandlers';
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
  className,
}: ButtonProps) {
  const { scrollToHash } = useHashScroll();
  const buttonClassName = `inline-flex items-center gap-3 w-fit transition-all duration-200 ${background ? 'py-2 px-4 rounded-2xl' : ''} ${isFocused ? 'font-bold' : ''} ${className || ''}`;
  const buttonStyle = {
    backgroundColor: background ? 'rgba(0,0,0,0.2)' : '',
    opacity: background || isFocused ? '1' : '0.6',
  };

  const applyHoverStyle = (el: HTMLButtonElement | HTMLAnchorElement) => {
    el.style.backgroundColor = background ? color || 'rgba(0,0,0,0.5)' : '';
    el.style.opacity = '1';
  };
  const revertHoverStyle = (el: HTMLButtonElement | HTMLAnchorElement) => {
    el.style.backgroundColor = buttonStyle.backgroundColor as string;
    el.style.opacity = buttonStyle.opacity as string;
  };
  const {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = useHoverPressHandlers<HTMLButtonElement | HTMLAnchorElement>(
    applyHoverStyle as (el: HTMLButtonElement | HTMLAnchorElement) => void,
    revertHoverStyle as (el: HTMLButtonElement | HTMLAnchorElement) => void
  );

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
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
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
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
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
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
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
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        {content}
      </a>
    );
  }
}
