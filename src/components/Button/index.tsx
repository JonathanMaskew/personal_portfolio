import { Icon } from '@/types';
import { useHashScroll } from '@/hooks/useHashScroll';
import type { StaticImageData } from 'next/image';
import { renderImagery } from '@/components/renderImagery';

interface ButtonProps {
  text: string;
  clickDetail: string | (() => void);
  imagery?: StaticImageData | Icon;
  imageryOnly?: boolean;
  newTab?: boolean;
  color?: string;
  background?: boolean;
  className?: string;
  isFocused?: boolean;
}

export function Button({
  text,
  clickDetail,
  imagery,
  imageryOnly,
  newTab,
  background,
  color,
  isFocused,
  className,
}: ButtonProps) {
  const { scrollToHash } = useHashScroll();

  const buttonClassName = `inline-flex items-center gap-3 w-fit transition-all duration-200 ${
    background
      ? 'py-2 px-4 rounded-2xl bg-background/12 hover:bg-[var(--btn-hover-color)] active:bg-[var(--btn-hover-color)]'
      : ''
  } ${background || isFocused ? 'opacity-100' : 'opacity-60 hover:opacity-100 active:opacity-100'} ${
    isFocused ? 'font-bold' : ''
  } ${className || ''}`;

  const buttonStyle = {
    '--btn-hover-color': color || 'rgba(0,0,0,0.5)',
  } as React.CSSProperties;

  const content = (
    <>
      {renderImagery(imagery, {
        alt: `${text} icon`,
        iconSize: 18,
        imageClassName: 'h-[18px] w-auto object-contain',
        boxed: false,
      })}
      {!imageryOnly && <div>{text}</div>}
    </>
  );

  if (typeof clickDetail === 'function') {
    return (
      <button
        onClick={clickDetail}
        className={buttonClassName}
        style={buttonStyle}
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
          className={buttonClassName}
          style={buttonStyle}
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
        className={buttonClassName}
        style={buttonStyle}
      >
        {content}
      </a>
    );
  }
}
