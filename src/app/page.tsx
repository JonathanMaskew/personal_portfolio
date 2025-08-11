import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';

export default function Home() {
  return (
    <>
      <section id="overview" className="h-screen snap-start">
        <Hero />
      </section>
      <section id="work" className="snap-start">
        <Work />
      </section>
      <section id="education" className="snap-start">
        <Education />
      </section>
    </>
  );
}
