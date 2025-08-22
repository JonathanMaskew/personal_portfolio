'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights';

export default function Home() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = document.querySelectorAll<HTMLElement>(
      'section[data-reveal]'
    );

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (prefersReducedMotion) {
      sections.forEach((el) => el.setAttribute('data-reveal', 'in'));
      return;
    }

    const showThreshold = 0.15;

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting &&
            entry.intersectionRatio >= showThreshold
          ) {
            const el = entry.target as HTMLElement;
            el.setAttribute('data-reveal', 'in');
            obs.unobserve(el);
          }
        });
      },
      { threshold: showThreshold }
    );

    sections.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <>
      <section id="intro">
        <Hero />
      </section>
      <section id="about" data-reveal>
        <About />
      </section>
      <section id="highlights" data-reveal>
        <Highlights />
      </section>
      <section id="work" data-reveal>
        <Work />
      </section>
      <section id="education" data-reveal>
        <Education />
      </section>
      <section id="footer" data-reveal>
        <Footer />
      </section>
    </>
  );
}
