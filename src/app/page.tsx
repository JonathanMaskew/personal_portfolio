import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';

export default function Home() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section id="overview" className="h-screen snap-start">
        <Hero />
      </section>
      <div className="snap-start">
        <section id="work">
          <Work />
        </section>
        <section id="education">
          <Education />
        </section>
      </div>
    </div>
  );
}
