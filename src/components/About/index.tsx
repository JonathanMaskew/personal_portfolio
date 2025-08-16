'use client';

import {
  ArrowDown,
  Blend,
  BriefcaseBusiness,
  GraduationCap,
  Handshake,
  User,
} from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Carousel, { CarouselImageItem } from '../Carousel';
import tennis from '@/assets/images/tennis.jpg';
import manatee from '@/assets/images/manatee_oof.gif';
import lucy from '@/assets/images/lucy.png';
import reeses from '@/assets/images/reeses.jpg';
import reeses_shape from '@/assets/images/reeses_shape.png';
import tater_tots from '@/assets/images/tater_tots.jpg';
import dinosaur from '@/assets/images/dinosaur.png';
import travel from '@/assets/images/travel.png';
import roundabouts from '@/assets/images/roundabouts.jpg';
import HighlightFeature from '../HighlightFeature';
import HighlightDetailed from '../HighlightDetailed';
import { NavLink, SECONDARY_NAV_ITEMS } from '../NavLink';
import { Button } from '../Button';
import { useHashScroll } from '@/hooks/useHashScroll';

export default function About() {
  const { scrollToHash } = useHashScroll();

  return (
    <SectionWrapper icon={User} title="About Jonathan">
      <div className="col-span-full">
        <HighlightFeature
          title="Hi, I'm Jonathan!"
          imagery={Handshake}
          subtitle="I'm happy you're here"
          body="As one who loves to dream big, I'm always looking to transform these dreams into experiences that feel intuitive, engaging, and even a bit joyful."
          color="#f97316"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 w-full">
        <HighlightDetailed
          imagery={BriefcaseBusiness}
          title="Software Engineer"
          subtitle="myhELO"
          body="At myhELO, I've delivered high-impact full-stack solutions, worked with Large Language Models, and designed new user interfaces."
          color="#42f59e"
          onClick={() => scrollToHash('#work')}
          actionButton={
            <Button
              icon={ArrowDown}
              text="Jump to 'Work'"
              clickDetail="#work"
            />
          }
        />
        <HighlightDetailed
          imagery={GraduationCap}
          title="BS in Computer Science"
          subtitle="Purdue University"
          body="In addition to coursework, I served as Design Director of a volunteer-based organization."
          color="#42f59e"
          onClick={() => scrollToHash('#education')}
          actionButton={
            <Button
              icon={ArrowDown}
              text="Jump to 'Education'"
              clickDetail="#education"
            />
          }
        />
        <HighlightDetailed
          imagery={Blend}
          title="Blended Experience"
          subtitle="User-centered Development"
          body="I've done a little bit of everything - website design & development, branding, marketing, and so much more. At the core of everything, I'm focused on the experience."
          color="#42f59e"
        />
      </div>
      <HighlightDetailed
        title="Some fun facts, interests, hobbies, and more..."
        color="#4290f5"
      >
        <Carousel>
          <CarouselImageItem
            image={tennis}
            text="I played varisty tennis at Noblesville High School, and continue to play recreationally."
          />
          <CarouselImageItem
            image={reeses_shape}
            text="I am addicted to Reese's Peanut Butter Cups in every form, size, and flavor."
          />
          <CarouselImageItem
            image={travel}
            text="I love to explore new places, having travelled to 40 states and 12 countries."
          />
          <CarouselImageItem
            image={lucy}
            text="A goofy little cockapoo named Lucy."
          />
          <CarouselImageItem
            image={dinosaur}
            text="Jurassic Park is a great movie! You just can't beat the original."
          />
          <CarouselImageItem
            image={tater_tots}
            text="Tater Tots are superior to french fries. Try to convince me otherwise."
          />
          <CarouselImageItem
            image={roundabouts}
            text="I love roundabouts. Give me a roundabout over a traffic light any day."
          />
          <CarouselImageItem
            image={manatee}
            text="This is a gif of a manatee. You're welcome."
          />
        </Carousel>
      </HighlightDetailed>
      <div className="flex flex-col gap-2 items-center">
        Please don&apos;t hesitate to reach out. I&apos;d love to connect!
        <div className="flex gap-8 items-center justify-center">
          {SECONDARY_NAV_ITEMS.filter((item) => item.id === 'email').map(
            (item) => {
              return <NavLink key={item.id} item={item} />;
            }
          )}
          {SECONDARY_NAV_ITEMS.filter((item) => item.id === 'linkedin').map(
            (item) => {
              return <NavLink key={item.id} item={item} />;
            }
          )}
          {SECONDARY_NAV_ITEMS.filter((item) => item.id === 'resume').map(
            (item) => {
              return <NavLink key={item.id} item={item} />;
            }
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
