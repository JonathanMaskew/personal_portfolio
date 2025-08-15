import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';
import About from '@/components/About';

export default function Home() {
  return (
    <>
      <section id="intro">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="education">
        <Education />
      </section>
    </>
  );
}
