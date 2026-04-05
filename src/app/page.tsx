'use client';

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights';
import Misc from '@/components/Footer/Misc';
import { ChevronDown } from 'lucide-react';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function Home() {
  const { scrollToHash } = useHashScroll();
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
        <div className="flex justify-center">
          <ChevronDown
            size={24}
            className="animate-bounce cursor-pointer"
            onClick={() => scrollToHash('#highlights')}
          />
        </div>
      </section>
      {/* Hijack in some extra padding to make it look right since we added a background to the Highlights section */}
      <section className="pt-8 md:pt-12" id="highlights" data-reveal>
        <Highlights />
      </section>
      {/* <section id="about" data-reveal>
        <About />
      </section> */}
      <section id="work" data-reveal>
        <Work />
      </section>
      <section id="education" data-reveal>
        <Education />
      </section>
      <section data-reveal>
        <Misc />
      </section>
      <section id="footer" data-reveal>
        <Footer />
      </section>
    </>
  );
}
