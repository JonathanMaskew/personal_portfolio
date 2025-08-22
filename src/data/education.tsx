import React from 'react';
import type { Experience } from '@/types';
import htf_logo_white from '@/assets/images/hack_the_future/htf_logo_white.png';
import purdue_logo from '@/assets/images/purdue_logo.png';
import InnerHighlight from '@/components/InnerHighlight';
import Carousel, { CarouselImageItem } from '@/components/Carousel';
import ModalSection from '@/components/ModalSection';
import { FileText, Image, List, Megaphone, Users } from 'lucide-react';
import design_and_marketing from '@/assets/images/hack_the_future/design_and_marketing.png';
import design_and_marketing_2 from '@/assets/images/hack_the_future/design_and_marketing_2.png';
import design_and_marketing_3 from '@/assets/images/hack_the_future/design_and_marketing_3.png';
import design_and_marketing_4 from '@/assets/images/hack_the_future/design_and_marketing_4.png';
import design_and_marketing_5 from '@/assets/images/hack_the_future/design_and_marketing_5.png';
import design_and_marketing_6 from '@/assets/images/hack_the_future/design_and_marketing_6.png';
import events_and_outreach from '@/assets/images/hack_the_future/events_and_outreach.png';
import events_and_outreach_2 from '@/assets/images/hack_the_future/events_and_outreach_2.png';
import events_and_outreach_3 from '@/assets/images/hack_the_future/events_and_outreach_3.png';
import events_and_outreach_4 from '@/assets/images/hack_the_future/events_and_outreach_4.png';
import non_profit_and_member_recruitment from '@/assets/images/hack_the_future/non_profit_and_member_recruitment.png';
import non_profit_and_member_recruitment_2 from '@/assets/images/hack_the_future/non_profit_and_member_recruitment_2.png';
import non_profit_and_member_recruitment_3 from '@/assets/images/hack_the_future/non_profit_and_member_recruitment_3.png';
import non_profit_and_member_recruitment_4 from '@/assets/images/hack_the_future/non_profit_and_member_recruitment_4.png';
import non_profit_and_member_recruitment_5 from '@/assets/images/hack_the_future/non_profit_and_member_recruitment_5.png';
import non_profit_and_member_recruitment_6 from '@/assets/images/hack_the_future/non_profit_and_member_recruitment_6.png';
import { Button } from '@/components/Button';

const CAROUSEL_IMAGE_SIZE = 300;

export const EDUCATION: Experience[] = [
  {
    id: 'purdue',
    color: '#CFB991',
    imagery: purdue_logo,
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Concentration in Software Engineering',
    subheading: 'Purdue University, 2020 - 2024',
    highlightChildren: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <InnerHighlight title="GPA" text="3.69 /4.0" />
        <InnerHighlight title="Dean's List" text="Spring 2022 - Fall 2023" />
        <InnerHighlight title="Semester Honors" text="Fall 2021 - Fall 2023" />
      </div>
    ),
  },
  {
    id: 'htf-design-director',
    color: '#00EB88',
    imagery: htf_logo_white,
    title: 'Design Director',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, March 2022 - May 2024',
    body: 'Mentored four project teams on UX/UI principles and provided resources to translate Figma mockups into front-end code.',
    coreBullets: [
      'Established branded components in React to streamline development and maintain consistency across all team projects.',
      'Designed marketing materials in Figma leading to a nearly 90% increase in applicants year-over-year, shattering previous records.',
    ],
    keywords: ['Figma', 'UI/UX Design', 'Front-end', 'Marketing'],
    modalChildren: (
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 w-full justify-center">
          {/* <div className="w-fit">
            <Button icon={FileText} text="PDF Collage of Work" clickDetail="/api/htf-collage" />
          </div> */}
          <div className="w-fit">
            <Button
              icon={List}
              newTab={true}
              text="List of Work with Descriptions"
              clickDetail="https://docs.google.com/document/d/1iJEBzMD-UZ55tUu14lbxTY1sf2zTvvQj90V-YAjeGos/edit?usp=sharing"
            />
          </div>
        </div>

        <ModalSection icon={Image} title="Design & Branding Summary">
          <div>The core of Design Director work</div>
          <Carousel color="#00EB88">
            <CarouselImageItem
              image={design_and_marketing}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={design_and_marketing_2}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={design_and_marketing_3}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={design_and_marketing_4}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={design_and_marketing_5}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={design_and_marketing_6}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
          </Carousel>
        </ModalSection>

        <ModalSection icon={Megaphone} title="Events & Outreach Summary">
          <div>Completely new to the club, game-changing</div>
          <Carousel color="#00EB88">
            <CarouselImageItem
              image={events_and_outreach}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={events_and_outreach_2}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={events_and_outreach_3}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={events_and_outreach_4}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
          </Carousel>
        </ModalSection>

        <ModalSection
          icon={Users}
          title="Non-Profit & Member Recruitment Summary"
        >
          <div>Record-breaking growth</div>
          <Carousel color="#00EB88">
            <CarouselImageItem
              image={non_profit_and_member_recruitment}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={non_profit_and_member_recruitment_2}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={non_profit_and_member_recruitment_3}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={non_profit_and_member_recruitment_4}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={non_profit_and_member_recruitment_5}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
            <CarouselImageItem
              image={non_profit_and_member_recruitment_6}
              color="#00EB88"
              size={CAROUSEL_IMAGE_SIZE}
            />
          </Carousel>
        </ModalSection>
      </div>
    ),
  },
  {
    id: 'htf-secretary',
    color: '#03C652',
    imagery: htf_logo_white,
    title: 'Secretary',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, November 2023 - May 2024',
    body: 'Oversaw club logistics, including event planning, member communications, and administrative tasks, to keep members engaged.',
    coreBullets: [],
    keywords: ['Communication', 'Event Planning'],
  },
  {
    id: 'htf-software-developer',
    color: '#277D4A',
    imagery: htf_logo_white,
    title: 'Software Developer',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, Sep 2021 - May 2022',
    body: 'Worked with a team of eight to deliver a website on schedule that allows Leadership Lafayette to collect and browse testimonials.',
    coreBullets: [
      "Developed front-end interfaces using React that mimicked the Designer's mockups and integrated with a MongoDB database.",
    ],
    keywords: ['React', 'MongoDB', 'Front-end'],
  },
];
