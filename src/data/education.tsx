import React from 'react';
import type { Experience } from '@/types';
import htf_logo_white from '@/assets/images/hack_the_future/htf_logo_white.png';
import purdue_logo from '@/assets/images/purdue_logo.png';
import InnerHighlight from '@/components/InnerHighlight';
import Carousel, { CarouselItem } from '@/components/Carousel';
import ModalSection from '@/components/ModalSection';
import {
  ExternalLink,
  Image as ImageIcon,
  Megaphone,
  SquarePlay,
  Users,
} from 'lucide-react';
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
import cool_vending_machine_finder_pin from '@/assets/images/cool_vending_machine_finder_pin.png';
import reeses_ratings from '@/assets/images/reeses_ratings.png';
import cool_card_games from '@/assets/images/cool_card_games.png';
import sundae from '@/assets/images/sundae.png';
import noblesville_schools from '@/assets/images/noblesville_schools.png';
import national_honors_society from '@/assets/images/national_honors_society.png';
import key_club from '@/assets/images/key_club.png';
import { Button } from '@/components/Button';
import Chips from '@/components/Chips';
import htf_carousel_of_progress from '@/assets/images/hack_the_future/htf_carousel_of_progress.png';
import htf_catapult from '@/assets/images/hack_the_future/htf_catapult.png';
import htf_code_round from '@/assets/images/hack_the_future/htf_code_round.png';
import htf_code from '@/assets/images/hack_the_future/htf_code.png';
import htf_gameshow from '@/assets/images/hack_the_future/htf_gameshow.png';
import htf_graduation from '@/assets/images/hack_the_future/htf_graduation.png';
import htf_innovateher from '@/assets/images/hack_the_future/htf_innovateher.png';
import htf_jurassic from '@/assets/images/hack_the_future/htf_jurassic.png';
import htf_neon from '@/assets/images/hack_the_future/htf_neon.png';
import htf_profile from '@/assets/images/hack_the_future/htf_profile.png';
import htf_thankful from '@/assets/images/hack_the_future/htf_thankful.png';
import htf_your_future from '@/assets/images/hack_the_future/htf_your_future.png';
import htf_spooky from '@/assets/images/hack_the_future/htf_spooky.png';
import htf_snowglobe from '@/assets/images/hack_the_future/htf_snowglobe.png';
import htf_pizza from '@/assets/images/hack_the_future/htf_pizza.png';
import htf_ornament from '@/assets/images/hack_the_future/htf_ornament.png';
import htf_back_to_the_future from '@/assets/images/hack_the_future/htf_back_to_the_future.png';
import htf_logo from '@/assets/images/hack_the_future/htf_logo.png';
import Image from 'next/image';

const CAROUSEL_IMAGE_SIZE = 300;

export const getEducationData = (): Experience[] => [
  {
    id: 'purdue',
    color: '#CFB991',
    imagery: purdue_logo,
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Concentration in Software Engineering',
    subheading: 'Purdue University, 2020 - 2024',
    highlightChildren: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <InnerHighlight title="GPA" text="3.69 / 4.0" />
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
    body: 'Managed branding, marketing, and outreach efforts, and mentored four project teams on UX/UI principles.',
    coreBullets: [
      'Mentored four project teams on UX/UI principles and provided resources to translate Figma mockups into front-end code.',
      'Designed marketing materials in Figma, including flyers, social media posts, and merchandise.',
      'Established branded components in React to streamline development and maintain consistency across all team projects.',
    ],
    highlights: [
      {
        icon: Megaphone,
        title:
          'Revamped Outreach Efforts, Achieving a Nearly 90% Increase in Applicants',
        text: 'Revamped outreach efforts and designed marketing in Figma leading to a record-breaking nearly 90% increase in applicants YoY.',
      },
    ],
    highlightChildren: (
      <div className="flex flex-col gap-6">
        <Chips strings={['Figma', 'UI/UX Design', 'Front-end', 'Marketing']} />
        <Carousel
          color="#00EB88"
          className="bg-black/20 rounded-2xl p-4 flex items-center"
        >
          <CarouselItem>
            <Image
              src={htf_logo}
              alt="HTF Logo"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_profile}
              alt="HTF Profile"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_jurassic}
              alt="HTF Jurassic"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_code}
              alt="HTF Code"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_spooky}
              alt="HTF Spooky"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_thankful}
              alt="HTF Thankful"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_ornament}
              alt="HTF Ornament"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_snowglobe}
              alt="HTF Snowglobe"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_your_future}
              alt="HTF Your Future"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_innovateher}
              alt="HTF InnovateHer"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_catapult}
              alt="HTF Catapult"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_gameshow}
              alt="HTF Gameshow"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_code_round}
              alt="HTF Code Round"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_carousel_of_progress}
              alt="HTF Carousel of Progress"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_back_to_the_future}
              alt="HTF Back to the Future"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_neon}
              alt="HTF Neon"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_graduation}
              alt="HTF Graduation"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              src={htf_pizza}
              alt="HTF Pizza"
              className="w-20 h-auto object-contain"
            />
          </CarouselItem>
        </Carousel>
      </div>
    ),
    modalChildren: (
      <div className="flex flex-col gap-12">
        <ModalSection icon={ImageIcon} title="Design & Branding Summary">
          <div className="text-sm">
            The core of my work as Design Director, I created all graphics for
            the club, including branding, flyers, posters, social media posts,
            t-shirts, mugs, buttons, stickers, and more. Below you can scroll
            through the Year in Review posts I created that summarize my work,
            or navigate to a full listing.
          </div>
          <div className="flex gap-8 gap-y-2 w-full justify-center flex-wrap">
            <div className="w-fit">
              <Button
                icon={ExternalLink}
                newTab={true}
                text="PDF Collage of Work"
                clickDetail="/pdfs/htf_collage.pdf"
                background
                color="#00EB88"
              />
            </div>
            <div className="w-fit">
              <Button
                icon={ExternalLink}
                newTab={true}
                text="List of Work with Descriptions"
                clickDetail="https://docs.google.com/document/d/1iJEBzMD-UZ55tUu14lbxTY1sf2zTvvQj90V-YAjeGos/edit?usp=sharing"
                background
                color="#00EB88"
              />
            </div>
          </div>
          <Carousel color="#00EB88">
            <CarouselItem>
              <Image
                src={design_and_marketing}
                alt="Design and Marketing"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={design_and_marketing_2}
                alt="Design and Marketing 2"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={design_and_marketing_3}
                alt="Design and Marketing 3"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={design_and_marketing_4}
                alt="Design and Marketing 4"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={design_and_marketing_5}
                alt="Design and Marketing 5"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={design_and_marketing_6}
                alt="Design and Marketing 6"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
          </Carousel>
        </ModalSection>

        <ModalSection icon={Megaphone} title="Events & Outreach Summary">
          <div className="text-sm">
            Outreach was a team effort, but largely fell under the Design
            Director role. After all, branding is the first impression. We made
            significant efforts to spread our footprint, partnering with other
            student organizations, hosting public events, and attending
            organization fairs. This degree of outreach was new for the club,
            and this outreach has continued to allow the club to scale and grow
            beyond our graduation.
          </div>
          <Carousel color="#00EB88">
            <CarouselItem>
              <Image
                src={events_and_outreach}
                alt="Events and Outreach"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={events_and_outreach_2}
                alt="Events and Outreach 2"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={events_and_outreach_3}
                alt="Events and Outreach 3"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={events_and_outreach_4}
                alt="Events and Outreach 4"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
          </Carousel>
        </ModalSection>

        <ModalSection
          icon={Users}
          title="Non-Profit & Member Recruitment Summary"
        >
          <div className="text-sm">
            We broke records in terms of interest and applicants, largely due to
            our revamped outreach efforts.
          </div>
          <Carousel color="#00EB88">
            <CarouselItem>
              <Image
                src={non_profit_and_member_recruitment}
                alt="Non-Profit and Member Recruitment"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={non_profit_and_member_recruitment_2}
                alt="Non-Profit and Member Recruitment 2"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={non_profit_and_member_recruitment_3}
                alt="Non-Profit and Member Recruitment 3"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={non_profit_and_member_recruitment_4}
                alt="Non-Profit and Member Recruitment 4"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={non_profit_and_member_recruitment_5}
                alt="Non-Profit and Member Recruitment 5"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
            <CarouselItem>
              <Image
                src={non_profit_and_member_recruitment_6}
                alt="Non-Profit and Member Recruitment 6"
                className="w-64 h-auto object-contain"
              />
            </CarouselItem>
          </Carousel>
        </ModalSection>
        <ModalSection icon={SquarePlay} title="23-24 Year in Review Video">
          <div className="text-sm">
            Using photos taken throughout the year, I created a Year in Review
            video to showcase the club&apos;s accomplishments.
          </div>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube-nocookie.com/embed/SLzLinX3hAs?si=nqVem6axHcIIOZQe"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </ModalSection>
        <div className="text-sm">
          Altogether, our ambitious efforts to grow the club were a success, and
          we&apos;ve continued to see the club grow after our graduation as our
          efforts led to new oppurtunities for the club.
        </div>
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
    highlightChildren: <Chips strings={['Communication', 'Event Planning']} />,
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
    highlightChildren: <Chips strings={['React', 'MongoDB', 'Front-end']} />,
  },
];

export const getMoreEducationData = (): Experience[] => [
  {
    id: 'reeses-ratings',
    color: '#FE5200',
    imagery: reeses_ratings,
    title: "Reese's Ratings",
    subtitle: 'CS 348 - Information Systems',
    subheading: 'Purdue University, Spring 2024',
    body: '',
    coreBullets: [],
    highlightChildren: (
      <Chips strings={['React', 'MongoDB', 'Full-stack', 'Tailwind CSS']} />
    ),
    modalChildren: (
      <div className="flex flex-col gap-12">
        <ModalSection icon={Image} title="Reese's Ratings">
          <div className="text-sm">
            I designed a logo for this class project, and was largely in charge
            of front-end development, therefore guiding much of the UI.
          </div>
        </ModalSection>
      </div>
    ),
  },
  {
    id: 'cool-vending-machine-finder',
    color: '#D4B88C',
    imagery: cool_vending_machine_finder_pin,
    title: 'Cool Vending Machine Finder',
    subtitle: 'CS 407 - Software Engineering Senior Project',
    subheading: 'Purdue University, Fall 2023',
    body: 'Practiced Scrum methodology to plan and develop from scratch a an interactive map of vending machines at Purdue University using React and Firebase with a team of four students.',
    coreBullets: [],
    highlightChildren: <Chips strings={['React', 'Firebase', 'Front-end']} />,
    modalChildren: (
      <div className="flex flex-col gap-12">
        <ModalSection icon={Image} title="Cool Vending Machine Finder">
          <div className="text-sm">
            I designed a logo for this class project, and was largely in charge
            of front-end development, therefore guiding much of the UI.
          </div>
        </ModalSection>
      </div>
    ),
  },
  {
    id: 'cool-card-games',
    color: '#696969',
    imagery: cool_card_games,
    title: 'Cool Card Games',
    subtitle: 'CS 307 - Software Engineering',
    subheading: 'Purdue University, Fall 2022',
    body: '',
    coreBullets: [],
    highlightChildren: (
      <Chips strings={['React', 'MongoDB', 'Full-stack', 'Tailwind CSS']} />
    ),
    modalChildren: (
      <div className="flex flex-col gap-12">
        {/* <ModalSection icon={Image} title="Reese's Ratings"></ModalSection> */}
      </div>
    ),
  },
  {
    id: 'sundae',
    color: '#696969',
    imagery: sundae,
    title: 'Sundae',
    subtitle: 'CS 490 - Human-Computer Interaction',
    subheading: 'Purdue University, Spring 2022',
    body: '',
    coreBullets: [],
    highlightChildren: <Chips strings={[]} />,
    modalChildren: (
      <div className="flex flex-col gap-12">
        {/* <ModalSection icon={Image} title="Reese's Ratings"></ModalSection> */}
      </div>
    ),
  },
  {
    id: 'noblesville-high-school',
    color: '#AA985D',
    imagery: noblesville_schools,
    title: 'Core 40 with Academic Honors',
    subtitle: 'Noblesville High School',
    subheading: 'Noblesville, IN, 2016 - 2020',
    body: '',
    coreBullets: [],
    highlightChildren: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <InnerHighlight title="GPA" text="4.27 / 4.0 (weighted)" />
        <InnerHighlight
          title="Challenging Classes"
          text="2+ Honors/AP/ACP/Dual Credit classes each year"
        />
        <InnerHighlight
          title="High Grades"
          text="Received an A- or higher in all but 4 classes during K-12 years. Never received worse than a B."
        />
      </div>
    ),
  },
  {
    id: 'national-honors-society',
    color: '#015395',
    imagery: national_honors_society,
    title: 'National Honors Society',
    subheading: 'Noblesville High School, March 2019 - May 2020',
    body: 'Complete community service and tutoring hours. Students are held to strict attendance and due date policies in which students are expected to be present at every meeting and complete a minimum of 50 service hours by certain dates. Only students displaying the qualities of leadership, service, scholarship, and character with very high academic performance are invited into the NHS.',
    coreBullets: [],
  },
  {
    id: 'key-club',
    color: '#003975',
    imagery: key_club,
    title: 'Publicity Coordinator',
    subtitle: 'Key Club',
    subheading: 'Noblesville High School, October 2017 - May 2020',
    body: 'Develop informational typed or promo video announcements to be displayed on the Noblesville  High School News as well as update Key Club social media accounts. The  NHS News is displayed to all students daily. Announcements include information regarding Key Club meetings or events.',
    coreBullets: [],
    highlightChildren: <Chips strings={[]} />,
    modalChildren: (
      <div className="flex flex-col gap-12">
        {/* <ModalSection icon={Image} title="Reese's Ratings"></ModalSection> */}
      </div>
    ),
  },
];
