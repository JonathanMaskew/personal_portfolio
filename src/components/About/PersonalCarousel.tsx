'use client';

import { ChevronRight, Cog, TriangleAlert } from 'lucide-react';
import { useState } from 'react';
import Carousel, { CarouselImageItem } from '../Carousel';
import tennis from '@/assets/images/tennis.jpg';
import manatee from '@/assets/images/manatee_oof.gif';
import lucy from '@/assets/images/lucy.png';
import reeses from '@/assets/images/reeses.jpg';
import taterTots from '@/assets/images/tater_tots.png';
import dinosaur from '@/assets/images/raptor_encounter.png';
import travel from '@/assets/images/travel.png';
import roundabouts from '@/assets/images/roundabouts.jpg';
import carouselOfProgress from '@/assets/images/carousel_of_progress.png';
import JurassicParkEasterEgg from '../JurassicParkEasterEgg';

export default function PersonalCarousel() {
  const [showJurassicParkEasterEgg, setShowJurassicParkEasterEgg] =
    useState(false);

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="font-bold text-xl md:text-2xl font-header">
          Get to know me a little better...
        </div>
        <Carousel color="var(--color-primary)">
          <CarouselImageItem
            image={tennis}
            text="I played varsity tennis in high school and continue to play recreationally."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={dinosaur}
            text="Jurassic Park - a great movie, and a cautionary tale about IT security!"
            color="var(--color-primary)"
            onClick={() => setShowJurassicParkEasterEgg(true)}
          >
            <div className="flex flex-col gap-1 text-xs leading-tight">
              <div className="flex items-center gap-2 font-bold text-red-500">
                {' '}
                <TriangleAlert size={14} />
                SYSTEMS FAILING
              </div>
              <div className="flex items-center text-red-500">
                Investigate failures
                <ChevronRight size={14} />
              </div>
            </div>
          </CarouselImageItem>
          <CarouselImageItem
            image={reeses}
            text="I am addicted to Reese's Peanut Butter Cups in every shape and size."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={carouselOfProgress}
            text="I could ride the Carousel of Progress in a loop."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={travel}
            text="I love to explore new places, having traveled to 13 countries and dozens of US states."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={roundabouts}
            text="I love roundabouts. Give me a roundabout over a traffic light any day."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={taterTots}
            text="Tater Tots are superior to french fries. Try to convince me otherwise."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={lucy}
            text="A goofy little cockapoo named Lucy."
            color="var(--color-primary)"
          />
          <CarouselImageItem
            image={manatee}
            text="This is a gif of a manatee. You're welcome."
            color="var(--color-primary)"
          />
        </Carousel>
      </div>
      {showJurassicParkEasterEgg && (
        <JurassicParkEasterEgg
          onClose={() => setShowJurassicParkEasterEgg(false)}
        />
      )}
    </>
  );
}
