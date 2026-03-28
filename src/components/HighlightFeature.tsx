import React from 'react';
import type { HighlightProps } from '@/types';
import HighlightHeader from './HighlightHeader';
import ExpandableHighlight from './ExpandableHighlight';

export default function HighlightFeature({
  color,
  imagery,
  title,
  subtitle,
  subheading,
  body,
  children,
  actionButton,
  onClick,
  onExpand,
  collapsed,
  className,
}: HighlightProps & {
  className?: string;
}) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);

  const header = hasHeaderContent ? (
    <HighlightHeader
      title={title}
      // subtitle={subtitle}
      subheading={subheading}
      imagery={imagery}
      color={color}
      variant="feature"
    />
  ) : null;

  const content = (
    <>
      {body && (
        <div className="text-base/5 md:text-lg/6 opacity-80">{body}</div>
      )}
      {children}
    </>
  );

  return (
    <ExpandableHighlight
      color={color}
      onClick={onClick}
      onExpand={onExpand}
      collapsed={collapsed}
      actionButton={actionButton}
      header={header}
      content={content}
      className={`highlight-feature ${className}`}
    />
  );
}
