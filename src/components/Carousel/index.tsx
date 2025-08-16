import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface CarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function Carousel({ children, className = '' }: CarouselProps) {
  return (
    <div className={`flex overflow-x-auto gap-6 scrollbar-hide ${className}`}>
      {children}
    </div>
  );
}

interface CarouselItemProps {
  children: React.ReactNode;
  className?: string;
}

export function CarouselItem({ children, className = '' }: CarouselItemProps) {
  return <div className={`flex-shrink-0 ${className}`}>{children}</div>;
}

interface CarouselImageItemProps {
  image: StaticImageData;
  text: string;
  className?: string;
}

export function CarouselImageItem({
  image,
  text,
  className = '',
}: CarouselImageItemProps) {
  return (
    <CarouselItem className={`w-[150px] ${className}`}>
      <div className="w-[150px] h-[150px]">
        <Image
          src={image}
          alt={text}
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col mt-4">
        <div className="text-xs leading-tight">{text}</div>
      </div>
    </CarouselItem>
  );
}
