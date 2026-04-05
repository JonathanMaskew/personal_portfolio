'use client';

import { Plus } from 'lucide-react';

interface ExpandableHighlightProps {
  color?: string;
  onClick?: () => void;
  onExpand?: () => void;
  collapsed?: boolean;
  header: React.ReactNode;
  content: React.ReactNode;
  actionButton?: React.ReactNode;
  className?: string;
}

export default function ExpandableHighlight({
  color,
  onClick,
  onExpand,
  collapsed,
  header,
  content,
  actionButton,
  className = '',
}: ExpandableHighlightProps) {
  const containerStyle = {
    '--highlight-color': color || 'var(--color-primary)',
  } as React.CSSProperties;

  const handleInteraction = (e: React.MouseEvent) => {
    if (collapsed) {
      e.stopPropagation();
      onExpand?.();
    } else if (onClick) {
      onClick();
    }
  };

  const isInteractive = Boolean(collapsed ? onExpand : onClick);

  return (
    <div
      className={`flex flex-col overflow-hidden ${isInteractive ? 'cursor-pointer' : ''} p-5 md:p-6 rounded-2xl ${collapsed ? 'h-auto' : 'min-h-full'} w-full relative transition-shadow duration-200 ${onClick ? 'hover:shadow-[inset_0_0_0_4px_var(--highlight-color)] active:shadow-[inset_0_0_0_4px_var(--highlight-color)]' : ''} ${actionButton && !collapsed ? 'pb-14 md:pb-15' : ''} ${className}`}
      style={containerStyle}
      onClick={handleInteraction}
    >
      {header}

      <div
        className="grid"
        style={{
          gridTemplateRows: collapsed ? '0fr' : '1fr',
          opacity: collapsed ? 0 : 1,
          transition:
            'grid-template-rows 0.35s cubic-bezier(0.25, 0.1, 0.25, 1), opacity 0.25s ease-out',
        }}
      >
        <div className="overflow-hidden min-h-0">
          <div className="flex flex-col gap-5 pt-5">{content}</div>
        </div>
      </div>

      {actionButton && (
        <div
          className="absolute right-4 bottom-4 flex items-center gap-1 z-10"
          style={{
            opacity: collapsed ? 0 : 1,
            scale: collapsed ? '0.9' : '1',
            transition: 'opacity 0.3s ease-in-out, scale 0.3s ease-in-out',
            pointerEvents: collapsed ? 'none' : 'auto',
          }}
        >
          {actionButton}
        </div>
      )}

      {collapsed && (
        <div className="absolute right-3 bottom-3 opacity-60 z-10">
          <Plus size={24} />
        </div>
      )}
    </div>
  );
}
