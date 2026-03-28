'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AccordionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Accordion({
  children,
  className = '',
}: AccordionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className={`flex flex-col gap-4 w-full ${className}`}>
      {React.Children.map(children, (child, index) => {
        const isExpanded = activeIndex === index;

        return (
          <motion.div
            key={index}
            layout="position"
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="w-full"
          >
            {React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, {
                  collapsed: !isExpanded,
                  onExpand: () => setActiveIndex(index),
                })
              : child}
          </motion.div>
        );
      })}
    </div>
  );
}
