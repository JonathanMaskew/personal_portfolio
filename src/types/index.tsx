import { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

export type Icon = React.ElementType;

export type HighlightProps = {
  color?: string;
  title?: string;
  imagery?: StaticImageData | Icon;
  subtitle?: string;
  subheading?: string;
  body?: string | React.ReactElement;
  nested?: boolean;
  onClick?: () => void;
  children?: ReactNode;
};
