'use client';

import Image, { StaticImageData } from 'next/image';
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}

export default function Carousel({
  children,
  className = '',
  color,
}: CarouselProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 1);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();

    el.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    const observer = new MutationObserver(updateScrollState);
    observer.observe(el, { childList: true, subtree: true });

    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scrollLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group">
      <div
        ref={scrollContainerRef}
        className={`flex overflow-x-auto gap-5 scrollbar-hide pb-3 ${className}`}
      >
        {children}
      </div>

      {canScrollLeft && (
        <button
          onClick={scrollLeft}
          className={`absolute left-2 top-1/2 -translate-y-1/2 text-foreground rounded-full p-1 transition-all duration-200 z-10 ${
            color
              ? 'bg-[var(--carousel-btn-bg)] hover:bg-[var(--carousel-btn-bg)] active:bg-[var(--carousel-btn-bg)]'
              : 'bg-background hover:bg-background'
          } opacity-60 active:opacity-100 md:opacity-0 md:group-hover:opacity-60 md:hover:!opacity-100`}
          style={
            {
              '--carousel-btn-bg': color,
            } as React.CSSProperties
          }
        >
          <ChevronLeft size={20} />
        </button>
      )}

      {canScrollRight && (
        <button
          onClick={scrollRight}
          className={`absolute right-2 top-1/2 -translate-y-1/2 text-foreground rounded-full p-1 transition-all duration-200 z-10 ${
            color
              ? 'bg-[var(--carousel-btn-bg)] hover:bg-[var(--carousel-btn-bg)] active:bg-[var(--carousel-btn-bg)]'
              : 'bg-background hover:bg-background'
          } opacity-60 active:opacity-100 md:opacity-0 md:group-hover:opacity-60 md:hover:!opacity-100`}
          style={
            {
              '--carousel-btn-bg': color,
            } as React.CSSProperties
          }
        >
          <ChevronRight size={20} />
        </button>
      )}
    </div>
  );
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function CarouselItem({
  children,
  className = '',
  style,
}: CarouselItemProps) {
  return (
    <div className={`flex-shrink-0 ${className}`} style={style}>
      {children}
    </div>
  );
}

interface CarouselImageItemProps {
  image: StaticImageData;
  text?: string;
  className?: string;
  color?: string;
  size?: number;
  onClick?: () => void;
  children?: React.ReactNode;
}

export function CarouselImageItem({
  image,
  text,
  className = '',
  color,
  size = 150,
  onClick,
  children,
}: CarouselImageItemProps) {
  return (
    <CarouselItem className={className} style={{ width: `${size}px` }}>
      <div
        className={`flex flex-col gap-4 ${onClick ? 'cursor-pointer' : ''}`}
        onClick={onClick}
      >
        <div style={{ width: `${size}px`, height: `${size}px` }}>
          <Image
            src={image}
            alt={text || 'Carousel image'}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        {(text || children) && (
          <div
            className="flex flex-col gap-2 pl-2 border-l-2"
            style={{ borderColor: color }}
          >
            {text && <div className="text-xs">{text}</div>}
            {children}
          </div>
        )}
      </div>
    </CarouselItem>
  );
}
