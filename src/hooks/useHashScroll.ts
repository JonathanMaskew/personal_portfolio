export const useHashScroll = () => {
  const scrollToHash = (hash: string) => {
    if (!hash.startsWith('#')) return;

    const targetId = hash.replace(/^#/, '');
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
      window.location.hash = hash;
    }
  };

  return { scrollToHash };
};
