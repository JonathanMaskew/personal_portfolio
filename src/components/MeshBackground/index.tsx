'use client';

import React, { useEffect, useState } from 'react';

export default function MeshBackground() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const introSection = document.getElementById('intro');
    if (!introSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // As the hero section leaves the viewport, reduce its intersectionRatio.
        // We use the intersectionRatio to drive the opacity.
        setOpacity(entry.intersectionRatio);
      },
      {
        threshold: Array.from({ length: 101 }, (_, i) => i / 100),
      }
    );

    observer.observe(introSection);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="mesh-container"
      style={{
        opacity: opacity,
        transition: 'opacity 0.2s ease-out',
      }}
    >
      <div className="mesh-blob mesh-blob--1" />
      <div className="mesh-blob mesh-blob--2" />
      <div className="mesh-blob mesh-blob--3" />
    </div>
  );
}
