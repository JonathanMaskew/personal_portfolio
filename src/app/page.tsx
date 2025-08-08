import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';

export default function Home() {
  return (
    <div className="h-screen w-full overflow-y-auto snap-y snap-mandatory scroll-smooth">
      <section className="h-screen snap-start">
        <Hero />
      </section>
      <section className="h-screen overflow-y-auto snap-start">
        <Work />
      </section>
      <section className="h-screen overflow-y-auto snap-start">
        <Education />
      </section>
    </div>
  );
}
