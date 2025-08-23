import { useHoverPressHandlers } from '@/hooks/useHoverPressHandlers';
import { useMobile } from '@/hooks/useMobile';
import Image, { StaticImageData } from 'next/image';
import React, { useRef } from 'react';
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
  const { isMobile } = useMobile();

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
      {/* Shared handlers for pointer interactions on arrows */}
      {/* Left Arrow */}
      <div
        ref={scrollContainerRef}
        className={`flex overflow-x-auto gap-4 scrollbar-hide ${className}`}
      >
        {children}
      </div>

      <button
        onClick={scrollLeft}
        className={`absolute left-2 top-1/2 -translate-y-1/2 text-white rounded-full p-1 transition-all duration-200 z-10 ${
          isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        style={{
          backgroundColor: color ? `${color}80` : 'rgba(0, 0, 0, 0.5)',
        }}
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
              ? `${color}`
              : 'rgba(0, 0, 0)';
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'mouse') {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
              ? `${color}80`
              : 'rgba(0, 0, 0, 0.5)';
          }
        }}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
            ? `${color}`
            : 'rgba(0, 0, 0)';
        }}
        onPointerUp={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
            ? `${color}80`
            : 'rgba(0, 0, 0, 0.5)';
        }}
        onPointerCancel={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
            ? `${color}80`
            : 'rgba(0, 0, 0, 0.5)';
        }}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className={`absolute right-2 top-1/2 -translate-y-1/2 text-white rounded-full p-1 transition-all duration-200 z-10 ${
          isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
        }`}
        style={{
          backgroundColor: color ? `${color}80` : 'rgba(0, 0, 0, 0.5)',
        }}
        onPointerEnter={(e) => {
          if (e.pointerType === 'mouse') {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
              ? `${color}`
              : 'rgba(0, 0, 0)';
          }
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === 'mouse') {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
              ? `${color}80`
              : 'rgba(0, 0, 0, 0.5)';
          }
        }}
        onPointerDown={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
            ? `${color}`
            : 'rgba(0, 0, 0)';
        }}
        onPointerUp={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
            ? `${color}80`
            : 'rgba(0, 0, 0, 0.5)';
        }}
        onPointerCancel={(e) => {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = color
            ? `${color}80`
            : 'rgba(0, 0, 0, 0.5)';
        }}
      >
        <ChevronRight size={20} />
      </button>
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
}

export function CarouselImageItem({
  image,
  text,
  className = '',
  color,
  size = 150,
}: CarouselImageItemProps) {
  return (
    <CarouselItem className={className} style={{ width: `${size}px` }}>
      <div className="flex flex-col gap-4">
        <div style={{ width: `${size}px`, height: `${size}px` }}>
          <Image
            src={image}
            alt={text || 'Carousel image'}
            className="rounded-2xl object-cover w-full h-full"
          />
        </div>
        {text && (
          <div
            className="text-xs leading-tight pl-2 border-l-2"
            style={{ borderColor: color }}
          >
            {text}
          </div>
        )}
      </div>
    </CarouselItem>
  );
}
