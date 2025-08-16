'use client';

import Hero from '@/components/Hero';
import Work from '@/components/Work';
import Education from '@/components/Education';
import About from '@/components/About';
import SectionWrapper from '@/components/SectionWrapper';
import HighlightFeature from '@/components/HighlightFeature';
import { NavLink, SECONDARY_NAV_ITEMS } from '@/components/NavLink';

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
        <SectionWrapper
          title="Thanks for visiting!"
          subtext={
            <div className="flex flex-col gap-2">
              Please don&apos;t hesitate to reach out. I&apos;d love to connect!
              <div className="flex gap-8 gap-y-2 items-center flex-wrap">
                {SECONDARY_NAV_ITEMS.map((item) => {
                  return <NavLink key={item.id} item={item} />;
                })}
              </div>
            </div>
          }
        >
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
