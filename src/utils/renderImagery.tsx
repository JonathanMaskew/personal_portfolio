import React from 'react';
import Image, { StaticImageData } from 'next/image';
import type { Icon } from '@/types';

export type ImageryInput = StaticImageData | Icon | React.ReactElement;

type Options = {
  alt?: string;
  iconSize?: number;
  imageClassName?: string;
  boxed?: boolean;
  iconContainerClassName?: string;
  imageContainerClassName?: string;
};

export const isStaticImageData = (value: unknown): value is StaticImageData => {
  return !!value && typeof value === 'object' && 'src' in (value as Record<string, unknown>);
};

export function renderImagery(
  imagery?: ImageryInput,
  {
    alt,
    iconSize = 18,
    imageClassName = 'h-[18px] w-auto object-contain',
    boxed = false,
    iconContainerClassName,
    imageContainerClassName,
  }: Options = {}
): React.ReactNode {
  if (!imagery) return null;

  if (React.isValidElement(imagery)) {
    return imagery;
  }

  if (!isStaticImageData(imagery)) {
    const IconComponent = imagery as Icon;
    const iconEl = <IconComponent size={iconSize} />;
    if (!boxed) return iconEl;
    return (
      <div className={iconContainerClassName}>{iconEl}</div>
    );
  }

  const imageEl = <Image src={imagery} alt={alt || 'imagery'} className={imageClassName} />;
  if (!boxed) return imageEl;
  return <div className={imageContainerClassName}>{imageEl}</div>;
}
