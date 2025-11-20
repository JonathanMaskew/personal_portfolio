import React from 'react';
import { useHoverPressHandlers } from '@/hooks/useHoverPressHandlers';
import type { HighlightProps } from '@/types';
import HighlightHeader from './HighlightHeader';

export default function HighlightFeature({
  color,
  imagery,
  title,
  subtitle,
  subheading,
  body,
  nested,
  children,
  actionButton,
  onClick,
  headerOrientation
}: HighlightProps & {
  headerOrientation?: 'vertical' | 'horizontal';
}) {
  const hasHeaderContent = Boolean(imagery || title || subtitle || subheading);
  const containerStyle =
    color ? {
          background: `radial-gradient(circle at top left, ${color}BF 0%, color-mix(in srgb, ${color} 30%, black) 100%)`,
          // boxShadow: `inset 0 0 0 2px ${color}80`,
          transition: 'box-shadow 0.2s',
        } : {
          transition: 'box-shadow 0.2s',
        };
  const paddingClass = nested ? 'p-4' : 'p-6';

  const {
    onPointerEnter,
    onPointerLeave,
    onPointerDown,
    onPointerUp,
    onPointerCancel,
  } = useHoverPressHandlers<HTMLDivElement>(
    (el) => {
      if (onClick && color) {
        (el as HTMLDivElement).style.boxShadow = `inset 0 0 0 4px ${color}`;
      }
    },
    (el) => {
      if (onClick && color) {
        (el as HTMLDivElement).style.boxShadow = 'none';
      }
    }
  );

  return (
    <div
      className={`flex flex-col ${paddingClass} ${actionButton ? 'pb-18 cursor-pointer' : ''} rounded-2xl ${nested ? 'h-fit' : 'h-full'} w-full gap-6 relative`}
      style={containerStyle}
      onPointerEnter={onClick && color ? onPointerEnter : undefined}
      onPointerLeave={onClick && color ? onPointerLeave : undefined}
      onPointerDown={onClick && color ? onPointerDown : undefined}
      onPointerUp={onClick && color ? onPointerUp : undefined}
      onPointerCancel={onClick && color ? onPointerCancel : undefined}
      onClick={onClick}
    >
      {hasHeaderContent && (
        <HighlightHeader
          title={title}
          subtitle={subtitle}
          subheading={subheading}
          imagery={imagery}
          color={color}
          orientation={headerOrientation}
        />
      )}
      {body && <div className="text-sm">{body}</div>}
      {children}
      {actionButton && (
        <div className="self-center absolute bottom-4">{actionButton}</div>
      )}
    </div>
  );
}
