'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className={`flex flex-col overflow-hidden ${isInteractive ? 'cursor-pointer' : ''} p-5 md:p-6 rounded-2xl ${collapsed ? 'h-auto' : 'min-h-full'} w-full gap-5 relative transition-shadow duration-200 ${onClick ? 'hover:shadow-[inset_0_0_0_4px_var(--highlight-color)] active:shadow-[inset_0_0_0_4px_var(--highlight-color)]' : ''} ${actionButton && !collapsed ? 'pb-14 md:pb-15' : ''} ${className}`}
      style={containerStyle}
      onClick={handleInteraction}
    >
      {header}

      <AnimatePresence initial={false}>
        {!collapsed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className={`flex flex-col gap-5 overflow-hidden`}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {actionButton && !collapsed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className={`absolute right-4 bottom-4 flex items-center gap-1 z-10`}
          >
            {actionButton}
          </motion.div>
        )}
      </AnimatePresence>

      {collapsed && (
        <div className="absolute right-3 bottom-3 opacity-60 z-10">
          <Plus size={18} />
        </div>
      )}
    </div>
  );
}
