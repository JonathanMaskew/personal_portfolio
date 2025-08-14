import { Icon } from '@/types';
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
      const handleHashClick = () => {
        const targetId = clickDetail.replace(/^#/, '');
        const el = document.getElementById(targetId);

        if (el) {
          // Determine scroll container (window for mobile TopNav, <main> for desktop SidebarNav)
          const scrollContainer = document.querySelector(
            '[data-scroll-container]'
          ) as HTMLElement | null;
          const headerOffset = 64; // mobile TopNav offset

          if (
            scrollContainer &&
            getComputedStyle(scrollContainer).overflowY !== 'visible'
          ) {
            const containerTop = scrollContainer.getBoundingClientRect().top;
            const targetTop = el.getBoundingClientRect().top;
            const current = scrollContainer.scrollTop;
            const y = current + (targetTop - containerTop);
            scrollContainer.scrollTo({ top: y, behavior: 'smooth' });
          } else {
            const y =
              el.getBoundingClientRect().top + window.scrollY - headerOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
          }
        } else {
          // Fallback: update hash
          window.location.hash = clickDetail;
        }
      };

      return (
        <button onClick={handleHashClick} className={`${buttonStyle}`}>
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
      >
        {content}
      </a>
    );
  }
}
