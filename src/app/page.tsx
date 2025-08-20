'use client';

import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';
import About from '@/components/About';
import Footer from '@/components/Footer';
import Highlights from '@/components/Highlights';

export default function Home() {
  return (
    <>
      <section id="intro">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="highlights">
        <Highlights />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}
