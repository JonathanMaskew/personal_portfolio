import { StaticImageData } from 'next/image';
import React, { ReactNode } from 'react';

export type Icon = React.ElementType;

export type Keyword = {
  label: string;
  logo?: StaticImageData;
};

export type HighlightProps = {
  color?: string;
  title?: string;
  imagery?: StaticImageData | Icon | React.ReactNode;
  subtitle?: string;
  subheading?: string;
  body?: string | React.ReactElement;
  onClick?: () => void;
  onExpand?: () => void;
  children?: ReactNode;
  actionButton?: React.ReactNode;
  collapsed?: boolean;
};

export type ExperienceHighlight = {
  icon: Icon;
  title?: string;
  text?: string;
  children?: React.ReactNode;
  heroTitle?: string;
  heroText?: string;
};

export type Experience = {
  id: string;
  imagery?: StaticImageData | Icon | React.ReactNode;
  title?: string;
  subtitle?: string;
  subheading?: string;
  body?: string;
  keywords?: Array<Keyword | string>;
  coreBullets?: string[];
  highlights?: ExperienceHighlight[];
  color?: string;
  highlightChildren?: React.ReactNode;
  modalChildren?: React.ReactNode;
  overrideChildren?: React.ReactNode;
  moreAccomplishments?: string[];
  moreBullets?: string[];
  experienceId?: string;
  heroTitle?: string;
  heroSubtitle?: string;
};

export type NavItem = {
  label: string;
  id: string;
  icon: Icon;
  href: string;
  newTab?: boolean;
};
