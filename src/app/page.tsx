import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';
import About from '@/components/About';
import SectionWrapper from '@/components/SectionWrapper';
import HighlightFeature from '@/components/HighlightFeature';

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
      <section id="footer">
        <SectionWrapper title="Thanks for visiting!">
          <HighlightFeature color="#000000">
            <div>
              “Man has a dream and that&apos;s the start
              <br />
              He follows his dream with mind and heart
              <br />
              And when it becomes a reality
              <br />
              It&apos;s a dream come true for you and me”
            </div>
            <div className="italic">
              - Carousel of Progress (Sherman Brothers)
            </div>
          </HighlightFeature>
        </SectionWrapper>
      </section>
    </>
  );
}
