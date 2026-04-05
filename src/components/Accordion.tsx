'use client';

import React, { useState } from 'react';

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
          <div
            key={index}
            className="w-full"
          >
            {React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, {
                  collapsed: !isExpanded,
                  onExpand: () => setActiveIndex(index),
                })
              : child}
          </div>
        );
      })}
    </div>
  );
}
