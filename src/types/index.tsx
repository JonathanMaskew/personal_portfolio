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

export type JobHighlight = {
  icon: Icon;
  text: string;
};

export type Experience = {
  id?: string;
  // Common fields
  title: string;
  body?: string;
  bullets?: string[];
  keywords?: string[];
  imagery?: StaticImageData | Icon;

  // Job-specific fields
  company?: string;
  jobTitle?: string;
  timeRange?: string;
  jobDescription?: string;
  bgColor?: string;
  highlights?: JobHighlight[];

  // Education-specific fields
  subtitle?: string;
  subheading?: string;
  color?: string;
  images?: StaticImageData[];
};

// Legacy types for backward compatibility
export type Job = Experience;
export type Education = Experience;

export type NavItem = {
  label: string;
  id: string;
  icon: Icon;
  href: string;
  newTab?: boolean;
};
