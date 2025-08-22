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
  actionButton?: React.ReactNode;
};

export type ExperienceHighlight = {
  icon: Icon;
  title?: string;
  text: string;
};

export type Experience = {
  id?: string;
  imagery?: StaticImageData | Icon;
  title: string;
  subtitle?: string;
  subheading?: string;
  body?: string;
  bullets?: string[];
  keywords?: string[];
  coreBullets?: string[];
  highlights?: ExperienceHighlight[];
  color?: string;
  highlightChildren?: React.ReactNode;
  modalChildren?: React.ReactNode;
};

export type NavItem = {
  label: string;
  id: string;
  icon: Icon;
  href: string;
  newTab?: boolean;
};
