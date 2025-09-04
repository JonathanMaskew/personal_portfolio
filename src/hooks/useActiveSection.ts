'use client';

import { useEffect, useRef, useState } from 'react';
import type { NavItem } from '@/types';

type UseActiveSectionOptions = {
  items: NavItem[];
  /** Element whose bottom acts as the activation threshold (e.g., a fixed top nav). */
  thresholdRef?:
    | React.RefObject<HTMLElement | null>
    | React.RefObject<HTMLDivElement | null>;
  /** Extra px offset to tweak when activation occurs. Default 0. */
  activationOffset?: number;
  /** Dependencies that should trigger recalculation (e.g., open state that changes nav height). */
  deps?: unknown[];
  /** Optional CSS selector for the scroll container. Defaults to '[data-scroll-container]'. */
  scrollContainerSelector?: string;
};

export function useActiveSection({
  items,
  thresholdRef,
  activationOffset = 0,
  deps = [],
  scrollContainerSelector = '[data-scroll-container]',
}: UseActiveSectionOptions) {
  const [current, setCurrent] = useState<NavItem>(items[0]);
  const rafIdRef = useRef<number>(0);

  useEffect(() => {
    const updateCurrent = () => {
      rafIdRef.current = 0;

      const container =
        typeof document !== 'undefined'
          ? (document.querySelector(
              scrollContainerSelector
            ) as HTMLElement | null)
          : null;
      const isWindowScroll =
        !container || getComputedStyle(container).overflowY === 'visible';
      const containerTop = isWindowScroll
        ? 0
        : container.getBoundingClientRect().top;

      const thresholdBottom = thresholdRef?.current
        ? thresholdRef.current.getBoundingClientRect().bottom - containerTop
        : 0;

      const measurements = items
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;
          const top =
            (el as HTMLElement).getBoundingClientRect().top - containerTop;
          return { item, top };
        })
        .filter(Boolean) as { item: NavItem; top: number }[];

      if (measurements.length === 0) return;

      // Detect if we're at (or near) the bottom of the scrollable area.
      // This handles very tall screens or short pages where the last section's
      // top never crosses the activation threshold.
      const { scrollTop, scrollHeight, clientHeight } = (() => {
        if (isWindowScroll) {
          const docEl =
            (typeof document !== 'undefined' &&
              (document.scrollingElement || document.documentElement)) ||
            null;
          return {
            scrollTop: typeof window !== 'undefined' ? window.scrollY : 0,
            scrollHeight: docEl ? docEl.scrollHeight : 0,
            clientHeight:
              typeof window !== 'undefined' ? window.innerHeight : 0,
          };
        }
        if (container) {
          return {
            scrollTop: container.scrollTop,
            scrollHeight: container.scrollHeight,
            clientHeight: container.clientHeight,
          };
        }
        return { scrollTop: 0, scrollHeight: 0, clientHeight: 0 };
      })();

      const remaining = Math.max(0, scrollHeight - (scrollTop + clientHeight));
      const atBottom = remaining <= Math.max(activationOffset, 80);

      let next;
      if (atBottom) {
        next = measurements.sort((a, b) => a.top - b.top)[
          measurements.length - 1
        ].item;
      } else {
        const past = measurements.filter(
          (m) => m.top - thresholdBottom <= activationOffset
        );
        next = past.length
          ? past.sort((a, b) => b.top - a.top)[0].item
          : measurements.sort((a, b) => a.top - b.top)[0].item;
      }

      setCurrent((prev) => (prev.id === next.id ? prev : next));
    };

    const onScrollOrResize = () => {
      if (rafIdRef.current) return;
      rafIdRef.current = window.requestAnimationFrame(updateCurrent);
    };

    let attachedContainer: HTMLElement | null =
      typeof document !== 'undefined'
        ? (document.querySelector(
            scrollContainerSelector
          ) as HTMLElement | null)
        : null;

    const scrollTargets: Array<Window | HTMLElement> = [window];
    if (attachedContainer) scrollTargets.push(attachedContainer);

    scrollTargets.forEach((t) =>
      t.addEventListener('scroll', onScrollOrResize, { passive: true })
    );

    // If the container isn't found yet (render order), try attaching later
    let findInterval: number | null = null;
    if (!attachedContainer && typeof document !== 'undefined') {
      findInterval = window.setInterval(() => {
        const candidate = document.querySelector(
          scrollContainerSelector
        ) as HTMLElement | null;
        if (candidate) {
          attachedContainer = candidate;
          attachedContainer.addEventListener('scroll', onScrollOrResize, {
            passive: true,
          });
          // Trigger a recalculation when we first attach to container
          onScrollOrResize();
          if (findInterval) {
            clearInterval(findInterval);
            findInterval = null;
          }
        }
      }, 250);
    }
    window.addEventListener('resize', onScrollOrResize);

    // Initial calculation
    onScrollOrResize();

    return () => {
      scrollTargets.forEach((t) =>
        t.removeEventListener('scroll', onScrollOrResize)
      );
      if (attachedContainer) {
        attachedContainer.removeEventListener('scroll', onScrollOrResize);
      }
      window.removeEventListener('resize', onScrollOrResize);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      if (findInterval) clearInterval(findInterval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    activationOffset,
    thresholdRef,
    scrollContainerSelector,
    ...deps,
    items.map((i) => i.id).join('|'),
  ]);

  return { current, setCurrent } as const;
}
