import React from 'react';
import type { Experience } from '@/types';
import htfLogoWhite from '@/assets/images/experience/hack-the-future/htf-logo-white.png';
import purdueLogo from '@/assets/images/experience/purdue-logo.png';
import InnerHighlight from '@/components/InnerHighlight';
import Carousel, {
  CarouselItem,
  CarouselImageItem,
} from '@/components/Carousel';
import ModalSection from '@/components/Modal/ModalSection';
import {
  ExternalLink,
  BookOpen,
  Image as ImageIcon,
  Megaphone,
  SquarePlay,
  Users,
  Trophy,
  SplinePointer,
} from 'lucide-react';
import designAndMarketing from '@/assets/images/experience/hack-the-future/design-and-marketing.png';
import designAndMarketing2 from '@/assets/images/experience/hack-the-future/design-and-marketing-2.png';
import designAndMarketing3 from '@/assets/images/experience/hack-the-future/design-and-marketing-3.png';
import designAndMarketing4 from '@/assets/images/experience/hack-the-future/design-and-marketing-4.png';
import designAndMarketing5 from '@/assets/images/experience/hack-the-future/design-and-marketing-5.png';
import designAndMarketing6 from '@/assets/images/experience/hack-the-future/design-and-marketing-6.png';
import eventsAndOutreach from '@/assets/images/experience/hack-the-future/events-and-outreach.png';
import eventsAndOutreach1 from '@/assets/images/experience/hack-the-future/events-and-outreach-1.png';
import eventsAndOutreach2 from '@/assets/images/experience/hack-the-future/events-and-outreach-2.png';
import eventsAndOutreach3 from '@/assets/images/experience/hack-the-future/events-and-outreach-3.png';
import eventsAndOutreach4 from '@/assets/images/experience/hack-the-future/events-and-outreach-4.png';
import nonProfitAndMemberRecruitment from '@/assets/images/experience/hack-the-future/non-profit-and-member-recruitment.png';
import nonProfitAndMemberRecruitment2 from '@/assets/images/experience/hack-the-future/non-profit-and-member-recruitment-2.png';
import nonProfitAndMemberRecruitment3 from '@/assets/images/experience/hack-the-future/non-profit-and-member-recruitment-3.png';
import nonProfitAndMemberRecruitment4 from '@/assets/images/experience/hack-the-future/non-profit-and-member-recruitment-4.png';
import nonProfitAndMemberRecruitment5 from '@/assets/images/experience/hack-the-future/non-profit-and-member-recruitment-5.png';
import nonProfitAndMemberRecruitment6 from '@/assets/images/experience/hack-the-future/non-profit-and-member-recruitment-6.png';
import coolVendingMachineFinderPin from '@/assets/images/experience/cool-vending-machine-finder-pin.png';
import coolCardGames from '@/assets/images/experience/cool-card-games.png';
import socialMediaAndDesign1 from '@/assets/images/experience/hack-the-future/social-media-and-design-1.png';
import socialMediaAndDesign2 from '@/assets/images/experience/hack-the-future/social-media-and-design-2.png';
import socialMediaAndDesign3 from '@/assets/images/experience/hack-the-future/social-media-and-design-3.png';
import socialMediaAndDesign4 from '@/assets/images/experience/hack-the-future/social-media-and-design-4.png';
import reesesRatings from '@/assets/images/personal/reeses-ratings.png';
import sundae from '@/assets/images/personal/sundae.png';
import noblesvilleSchools from '@/assets/images/experience/noblesville-schools.png';
import noblesvilleAthleticClub from '@/assets/images/experience/noblesville-athletic-club-logo.png';
import texyMexyLogo from '@/assets/images/experience/texy-mexy-logo.png';
import tennis from '@/assets/images/personal/tennis.jpg';
import graduation from '@/assets/images/personal/graduation.png';
import travel from '@/assets/images/personal/travel.png';
import turkeyRun from '@/assets/images/personal/turkey-run.png';
import costaRica from '@/assets/images/personal/costa-rica.png';
import reeses from '@/assets/images/personal/reeses.jpg';
import reesesShape from '@/assets/images/personal/reeses-shape.png';
import roundabouts from '@/assets/images/personal/roundabouts.jpg';
import taterTots from '@/assets/images/personal/tater-tots.png';
import snowglobe from '@/assets/images/personal/snowglobe.png';
import manatee from '@/assets/images/personal/manatee-oof.gif';
import nationalHonorsSociety from '@/assets/images/experience/national-honors-society.png';
import keyClub from '@/assets/images/experience/key-club.png';
import { Button } from '@/components/Button';
import ButtonRow from '@/components/Button/ButtonRow';
import Chips from '@/components/Chips';
import htfCarouselOfProgress from '@/assets/images/experience/hack-the-future/htf-carousel-of-progress.png';
import htfCatapult from '@/assets/images/experience/hack-the-future/htf-catapult.png';
import htfCodeRound from '@/assets/images/experience/hack-the-future/htf-code-round.png';
import htfCode from '@/assets/images/experience/hack-the-future/htf-code.png';
import htfGameshow from '@/assets/images/experience/hack-the-future/htf-gameshow.png';
import htfGraduation from '@/assets/images/experience/hack-the-future/htf-graduation.png';
import htfInnovateHer from '@/assets/images/experience/hack-the-future/htf-innovateher.png';
import htfJurassic from '@/assets/images/experience/hack-the-future/htf-jurassic.png';
import htfNeon from '@/assets/images/experience/hack-the-future/htf-neon.png';
import htfProfile from '@/assets/images/experience/hack-the-future/htf-profile.png';
import htfThankful from '@/assets/images/experience/hack-the-future/htf-thankful.png';
import htfYourFuture from '@/assets/images/experience/hack-the-future/htf-your-future.png';
import htfSpooky from '@/assets/images/experience/hack-the-future/htf-spooky.png';
import htfSnowglobe from '@/assets/images/experience/hack-the-future/htf-snowglobe.png';
import htfPizza from '@/assets/images/experience/hack-the-future/htf-pizza.png';
import htfOrnament from '@/assets/images/experience/hack-the-future/htf-ornament.png';
import htfEscapeRoom from '@/assets/images/experience/hack-the-future/htf-escape-room.png';
import htfCommunity from '@/assets/images/experience/hack-the-future/htf-community.png';
import htfKeynote from '@/assets/images/experience/hack-the-future/htf-keynote.png';
import htfJudging from '@/assets/images/experience/hack-the-future/htf-judging.png';
import htfLunch from '@/assets/images/experience/hack-the-future/htf-lunch.png';
import htfMentorship from '@/assets/images/experience/hack-the-future/htf-mentorship.png';
import htfPrizes from '@/assets/images/experience/hack-the-future/htf-prizes.png';
import htfProjectExhibition from '@/assets/images/experience/hack-the-future/htf-project-exhibition.png';
import htfRetroGaming from '@/assets/images/experience/hack-the-future/htf-retro-gaming.png';
import htfTeamBuilding from '@/assets/images/experience/hack-the-future/htf-team-building.png';
import htfWorkshops from '@/assets/images/experience/hack-the-future/htf-workshops.png';
import htfCheckIn from '@/assets/images/experience/hack-the-future/htf-check-in.png';
import htfBackToTheFuture from '@/assets/images/experience/hack-the-future/htf-back-to-the-future.png';
import htfLogo from '@/assets/images/experience/hack-the-future/htf-logo.png';
import noblesvilleMillers from '@/assets/images/experience/noblesville-millers.png';
import coolVendingMachineFinder from '@/assets/images/experience/cool-vending-machine-finder.png';
import coolVendingMachine from '@/assets/images/experience/cool-vending-machine.png';
import Image from 'next/image';

interface StatHighlight {
  title: string;
  text: string;
}

const purdueStats: StatHighlight[] = [
  { title: 'GPA', text: '3.69 / 4.0' },
  { title: "Dean's List", text: 'Spring 2022 - Fall 2023' },
  { title: 'Semester Honors', text: 'Fall 2021 - Fall 2023' },
];

const noblesvilleStats: StatHighlight[] = [
  { title: 'GPA', text: '4.27 / 4.0 (weighted)' },
  {
    title: 'Challenging Classes',
    text: '2+ Honors/AP/ACP/Dual Credit classes each year',
  },
  {
    title: 'High Grades',
    text: 'Received an A- or higher in all but 4 classes during K-12 years. Never received worse than a B.',
  },
];

export const getEducationData = (): Experience[] => [
  {
    id: 'htf-design-director',
    color: 'var(--color-htf)',
    imagery: htfLogoWhite,
    title: 'Design Director',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, March 2022 - May 2024',
    body: "Led a re-branding initiative that amplified the organization's visibility resulting in a record-breaking nearly 90% year-over-year increase in applications. Created resources to guide four teams on UX/UI principles and front-end development.",
    coreBullets: [
      'Mentored four project teams on UX/UI principles and created resources to guide translating Figma mockups into front-end code.',
      'Established branded components in React to streamline development and maintain consistency across all team projects.',
    ],
    highlights: [
      {
        icon: SplinePointer,
        title: 'Led a Branding Overhaul, Driving Growth by 90%',
        text: 'Led a branding revamp and increased outreach efforts leading to a record-breaking nearly 90% YoY increase in applicants.',
      },
    ],
    keywords: [
      'Figma',
      'UI/UX Design',
      'Front-end',
      'Digital Marketing',
      'Branding',
      'Graphic Design',
    ],
    // highlightChildren: (
    //   <div className="flex flex-col gap-6">
    //     <Chips
    //       strings={[
    //         'Figma',
    //         'UI/UX Design',
    //         'Front-end',
    //         'Branding',
    //         'Digital Marketing',
    //       ]}
    //     />
    //     <Carousel
    //       color="var(--color-htf)"
    //       className="bg-foreground/10 rounded-2xl p-4 flex items-center"
    //     >
    //       <CarouselItem>
    //         <Image
    //           src={htfLogo}
    //           alt="HTF Logo"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfProfile}
    //           alt="HTF Profile"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfJurassic}
    //           alt="HTF Jurassic"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfCode}
    //           alt="HTF Code"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfSpooky}
    //           alt="HTF Spooky"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfThankful}
    //           alt="HTF Thankful"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfOrnament}
    //           alt="HTF Ornament"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfSnowglobe}
    //           alt="HTF Snowglobe"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfYourFuture}
    //           alt="HTF Your Future"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfInnovateHer}
    //           alt="HTF InnovateHer"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfCatapult}
    //           alt="HTF Catapult"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfGameshow}
    //           alt="HTF Gameshow"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfCodeRound}
    //           alt="HTF Code Round"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfCarouselOfProgress}
    //           alt="HTF Carousel of Progress"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfBackToTheFuture}
    //           alt="HTF Back to the Future"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfNeon}
    //           alt="HTF Neon"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfGraduation}
    //           alt="HTF Graduation"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //       <CarouselItem>
    //         <Image
    //           src={htfPizza}
    //           alt="HTF Pizza"
    //           className="w-20 h-auto object-contain"
    //         />
    //       </CarouselItem>
    //     </Carousel>
    //   </div>
    // ),
    modalChildren: (
      <div className="flex flex-col gap-10">
        <ModalSection icon={ImageIcon} title="Design & Branding Summary">
          <div>
            The core of my work as Design Director, I created all graphics for
            the club, including branding, flyers, posters, social media posts,
            t-shirts, mugs, buttons, stickers, and more. Below you can scroll
            through the Year in Review posts I created that summarize my work,
            or navigate to a full listing.
          </div>
          <ButtonRow className="justify-center">
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="PDF Collage of Work"
              clickDetail="/pdfs/htf-collage.pdf"
              background
              color="var(--color-htf)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="List of Work with Descriptions"
              clickDetail="https://docs.google.com/document/d/1iJEBzMD-UZ55tUu14lbxTY1sf2zTvvQj90V-YAjeGos/edit?usp=sharing"
              background
              color="var(--color-htf)"
            />
          </ButtonRow>
          <Carousel color="var(--color-htf)">
            <CarouselImageItem image={designAndMarketing} size={256} />
            <CarouselImageItem image={designAndMarketing2} size={256} />
            <CarouselImageItem image={designAndMarketing3} size={256} />
            <CarouselImageItem image={designAndMarketing4} size={256} />
            <CarouselImageItem image={designAndMarketing5} size={256} />
            <CarouselImageItem image={designAndMarketing6} size={256} />
          </Carousel>
        </ModalSection>

        <ModalSection icon={Megaphone} title="Events & Outreach Summary">
          <div>
            Outreach was a team effort, but largely fell under the Design
            Director role. After all, branding is the first impression. We made
            significant efforts to spread our footprint, partnering with other
            student organizations, hosting public events, and attending
            organization fairs. This degree of outreach was new for the club,
            and this outreach has continued to allow the club to scale and grow
            beyond our graduation.
          </div>
          <Carousel color="var(--color-htf)">
            <CarouselImageItem image={eventsAndOutreach} size={256} />
            <CarouselImageItem image={eventsAndOutreach2} size={256} />
            <CarouselImageItem image={eventsAndOutreach3} size={256} />
            <CarouselImageItem image={eventsAndOutreach4} size={256} />
          </Carousel>
        </ModalSection>

        <ModalSection
          icon={Users}
          title="Non-Profit & Member Recruitment Summary"
        >
          <div>
            We broke records in terms of interest and applicants, largely due to
            our revamped outreach efforts.
          </div>
          <Carousel color="var(--color-htf)">
            <CarouselImageItem
              image={nonProfitAndMemberRecruitment}
              size={256}
            />
            <CarouselImageItem
              image={nonProfitAndMemberRecruitment2}
              size={256}
            />
            <CarouselImageItem
              image={nonProfitAndMemberRecruitment3}
              size={256}
            />
            <CarouselImageItem
              image={nonProfitAndMemberRecruitment4}
              size={256}
            />
            <CarouselImageItem
              image={nonProfitAndMemberRecruitment5}
              size={256}
            />
            <CarouselImageItem
              image={nonProfitAndMemberRecruitment6}
              size={256}
            />
          </Carousel>
        </ModalSection>
        <ModalSection icon={SquarePlay} title="23-24 Year in Review Video">
          <div>
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
        <div>
          Altogether, our ambitious efforts to grow the club were a success, and
          we&apos;ve continued to see the club grow after our graduation as our
          efforts led to new opportunities for the club.
        </div>
      </div>
    ),
  },
  {
    id: 'htf-software-developer',
    color: 'var(--color-htf)',
    imagery: htfLogoWhite,
    title: 'Software Developer',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, Sep 2021 - May 2022',
    body: "Engineered a testimonial management system using React and MongoDB, coordinating with a team of eight to deliver within Leadership Lafayette's deadline.",
    coreBullets: [
      'Delivered a testimonial management system to Leadership Lafayette by collaborating with an eight-person agile team.',
      'Implemented React components by translating the designer’s mockups and integrating with a MongoDB database.',
    ],
    keywords: ['React', 'MongoDB', 'Front-end', 'Full-stack'],
  },
  {
    id: 'purdue',
    color: 'var(--color-purdue)',
    imagery: purdueLogo,
    title: 'Bachelor of Science in Computer Science',
    subtitle: 'Concentration in Software Engineering',
    subheading: 'Purdue University, 2020 - 2024',
    highlightChildren: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {purdueStats.map((highlight, index) => (
          <InnerHighlight
            key={index}
            title={highlight.title}
            text={highlight.text}
          />
        ))}
      </div>
    ),
  },
];

export const getMoreEducationData = (): Experience[] => [
  {
    id: 'htf-secretary',
    color: 'var(--color-htf)',
    imagery: htfLogoWhite,
    title: 'Secretary',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, November 2023 - May 2024',
    body: 'Oversaw club logistics, including event planning, member communications, and administrative tasks, to keep members engaged.',
    coreBullets: [],
    keywords: ['Communication', 'Event Planning'],
  },
  {
    id: 'reeses-ratings',
    color: 'var(--color-primary)',
    imagery: reesesRatings,
    title: "Reese's Ratings",
    subtitle: 'CS 348 - Information Systems',
    subheading: 'Purdue University, Spring 2024',
    body: "Developed a front-end interface in React that connects to a MongoDB database, allowing users to rate Reese's products.",
    coreBullets: [],
    keywords: ['React', 'MongoDB', 'Full-stack', 'Tailwind CSS'],
  },
  {
    id: 'cool-vending-machine-finder',
    color: 'var(--color-purdue)',
    imagery: coolVendingMachineFinderPin,
    title: 'Cool Vending Machine Finder',
    subtitle: 'CS 407 - Software Engineering Senior Project',
    subheading: 'Purdue University, Fall 2023',
    body: 'Practiced Scrum methodology to plan and develop from scratch a an interactive map of vending machines at Purdue University using React and Firebase with a team of four students.',
    coreBullets: [],
    keywords: ['React', 'Firebase', 'Front-end'],
    modalChildren: (
      <div className="flex flex-col gap-10">
        <ModalSection icon={ImageIcon} title="Branding & Graphics">
          <div>
            I designed a logo for this class project, and was largely in charge
            of front-end development, therefore guiding much of the UI.
          </div>
          <div className="flex justify-center gap-8 flex-wrap">
            <Image
              src={coolVendingMachineFinder}
              alt="Cool Vending Machine Finder"
              className="w-60 md:w-80 h-auto object-contain"
            />
            <Image
              src={coolVendingMachine}
              alt="Cool Vending Machine"
              className="w-40 h-auto object-contain"
            />
          </div>
        </ModalSection>
      </div>
    ),
  },
  {
    id: 'cool-card-games',
    color: 'var(--color-generic)',
    imagery: coolCardGames,
    title: 'Cool Card Games',
    subtitle: 'CS 307 - Software Engineering',
    subheading: 'Purdue University, Fall 2022',
    body: 'Practiced Scrum methodology to plan and develop from scratch a card game application using Unity and Firebase with a team of six students.',
    coreBullets: [],
    keywords: ['Unity', 'Firebase', 'Game Development', 'Scrum'],
  },
  {
    id: 'sundae',
    color: 'var(--color-generic)',
    imagery: sundae,
    title: 'Sundae',
    subtitle: 'CS 490 - Human-Computer Interaction',
    subheading: 'Purdue University, Spring 2022',
    body: 'Dove into the specifics of how to approach human-centric design, walking through the standard documentation process, including ideation, need-finding, prototyping, and user study and more, ultimately ending with a high-fidelity Figma prototype for a product called Sundae.',
    coreBullets: [],
    keywords: [
      'Figma',
      'User Research',
      'Prototyping',
      'User Interviews',
      'Storyboarding',
      'Personas',
      'Cognitive Walkthrough',
      'Affinity Diagramming',
    ],
    modalChildren: (
      <div className="flex flex-col gap-10">
        <ModalSection icon={BookOpen} title="Ideation">
          <div>
            First things first, I had a dream. Proposing the dream is the only
            way to make it a reality.
          </div>
          <Button
            imagery={ExternalLink}
            newTab={true}
            clickDetail="https://docs.google.com/document/d/1ScsxHLDzicQHW1SaJjlw8Fy1nj5HCy6L/edit"
            text="Open in Docs"
            background
            color="var(--color-generic)"
          />
        </ModalSection>

        <ModalSection icon={BookOpen} title="Need-finding Report">
          <div>
            Next, we needed to know whether my dream deserved to be a reality.
            We completed interviews and various other need-finding activities to
            determine what users are looking for in this product.
          </div>
          <Button
            imagery={ExternalLink}
            newTab={true}
            clickDetail="https://docs.google.com/document/d/17AJDqE56FnMe2re0LPlVyNRI12GOFAD_cRkcG14Zb4E/edit?tab=t.0"
            text="Open in Docs"
            background
            color="var(--color-generic)"
          />
          <ButtonRow>
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/1hxHMWxzWMNqUmnA3d6McTMA_EmRdH4Fx4g35qxKZ1XI/edit?tab=t.0"
              text="Open Interview Protocol Details"
              background
              color="var(--color-generic)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/1Idr1juzYePqK-qtwS0jk5l3XcK1fGO6n5t0NxttJtD8/edit?tab=t.0"
              text="Open Affinity Diagram and Storyboarding Details"
              background
              color="var(--color-generic)"
            />
          </ButtonRow>
        </ModalSection>

        <ModalSection icon={BookOpen} title="Prototype Design Report">
          <div>
            Now that we had a better idea of what users were looking for, it was
            time to design the platform.
          </div>
          <ButtonRow>
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/19nmjwmGBmXlPUqv5BdwezkyXAQziipnLeUFZLDvBan4/edit?tab=t.0"
              text="Open in Docs"
              background
              color="var(--color-generic)"
            />

            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://www.figma.com/proto/81djycTPurFwRTywOYsLzP/Prototype?page-id=0%3A1&node-id=58-353&p=f&viewport=379%2C197%2C0.03&t=6ZXJhKpbbaCoE6PY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A26"
              text="Open Digital Prototype in Figma"
              background
              color="var(--color-generic)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://www.figma.com/design/81djycTPurFwRTywOYsLzP/Prototype?node-id=0-1&t=JBSYZYPaXHT4HO53-1"
              text="Open Digital Design in Figma"
              background
              color="var(--color-generic)"
            />
          </ButtonRow>
          <ButtonRow>
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/presentation/d/1CEnT7h0AAbcpGjXOdzsPYfutvYnmZRP3aeI_QFKNnnc/edit#slide=id.p"
              text="Open Paper Prototype Details"
              background
              color="var(--color-generic)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/1AoVcmtwNB4k4plTBYTKO1krJr3G8K-U6PDkqGi5mTSk/edit?usp=sharing"
              text="Open Digital Prototype Details"
              background
              color="var(--color-generic)"
            />
          </ButtonRow>
        </ModalSection>

        <ModalSection icon={BookOpen} title="User Study Report">
          <div>
            With a platform designed, we needed to see if we had met users needs
            and that users understood how to use the platform.
          </div>
          <Button
            imagery={ExternalLink}
            newTab={true}
            clickDetail="https://docs.google.com/document/d/1Z2dzZfhXVS7rrNJSVVdzXDb3FFkrNB6Td7YGY6rCdNc/edit?tab=t.0"
            text="Open in Docs"
            background
            color="var(--color-generic)"
          />
          <ButtonRow>
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/spreadsheets/d/1waG0DCx1bCGwbXOhIZAxlEFjYYpBgFQ3IW1L0qiK6Hw/edit?usp=sharing"
              text="Open Cognitive Walkthrough Details"
              background
              color="var(--color-generic)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/13PKofzMQqj0J1ZcEEIiN9IxuMCeSGPDkg_hKHX_52_A/edit?usp=sharing"
              text="Open Digital Prototype Revision Details"
              background
              color="var(--color-generic)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/1LDfkLszmBrRJK9sD37tZi8qNnGCR6Ar8TL8Jk0lkUTc/edit?usp=sharing"
              text="Open User Study Design Details"
              background
              color="var(--color-generic)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/100h5x2go3ch_Z-W_VUG_e53Z-E8vYBuUAT3tK6cfOuE/edit?usp=sharing"
              text="Open User Study Details"
              background
              color="#696969"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/1W7yxvw0dPDuSUHfzuedLPnLiGZBKc-GgluMlhMpKVJM/edit?usp=sharing"
              text="Open User Study Data Analysis Details"
              background
              color="#696969"
            />
          </ButtonRow>
        </ModalSection>

        <ModalSection icon={BookOpen} title="Final Report">
          <div>Bringing everything we&apos;ve learned to a close</div>
          <ButtonRow>
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://docs.google.com/document/d/1CBZ7DHtD7ULpGBwX0NEVReWqmbtXVOa_5i_qSF9Tf-U/edit?tab=t.0"
              text="Open in Docs"
              background
              color="var(--color-generic)"
            />
            <Button
              imagery={ExternalLink}
              newTab={true}
              clickDetail="https://www.figma.com/proto/81djycTPurFwRTywOYsLzP/Prototype?page-id=0%3A1&node-id=58-353&p=f&viewport=379%2C197%2C0.03&t=6ZXJhKpbbaCoE6PY-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=124%3A26"
              text="Open Digital Prototype in Figma"
              background
              color="var(--color-generic)"
            />
          </ButtonRow>
        </ModalSection>
      </div>
    ),
  },
  {
    id: 'noblesville-high-school',
    color: 'var(--color-purdue)',
    imagery: noblesvilleSchools,
    title: 'Core 40 with Academic Honors',
    subtitle: 'Noblesville High School',
    subheading: 'Noblesville, IN, 2016 - 2020',
    body: '',
    coreBullets: [],
    highlightChildren: (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        {noblesvilleStats.map((h, i) => (
          <InnerHighlight key={i} title={h.title} text={h.text} />
        ))}
      </div>
    ),
  },
  {
    id: 'national-honors-society',
    color: 'var(--color-generic)',
    imagery: nationalHonorsSociety,
    title: 'National Honors Society',
    subheading: 'Noblesville High School, March 2019 - May 2020',
    body: 'Completed community service and tutoring hours. Students are held to strict attendance and due date policies in which students are expected to be present at every meeting and complete a minimum of 50 service hours by certain dates. Only students displaying the qualities of leadership, service, scholarship, and character with very high academic performance are invited into the NHS.',
    coreBullets: [],
  },
  {
    id: 'tennis-manager',
    color: 'var(--color-purdue)',
    imagery: noblesvilleMillers,
    title: 'Tennis Team Manager',
    subtitle: 'Girls Tennis Team',
    subheading: 'Noblesville High School, Spring 2018, 2019',
    body: 'Exhibited skills of leadership and responsibility in recording results of each tennis match during the girls season. Willingly participated in practice to help players improve. Independently and choicefully designed a new, more intuitive score sheet to record results of matches.',
    coreBullets: [],
    highlights: [
      {
        icon: Trophy,
        title: 'Effectively Track Match Results',
        text: 'Designed a new, more intuitive score sheet to record results of matches, designed to be scalable.',
        children: (
          <ButtonRow>
            <Button
              imagery={ExternalLink}
              newTab={true}
              text="PDF of Score Sheet"
              clickDetail="/pdfs/tennis-scoresheet.pdf"
              background
              color="var(--color-purdue)"
            />
          </ButtonRow>
        ),
      },
    ],
    keywords: ['Document Design'],
  },
  {
    id: 'key-club',
    color: 'var(--color-generic)',
    imagery: keyClub,
    title: 'Publicity Coordinator',
    subtitle: 'Key Club',
    subheading: 'Noblesville High School, October 2017 - May 2020',
    body: 'Developed informational typed or promo video announcements to be displayed on the Noblesville High School News as well as update Key Club social media accounts. The NHS News is displayed to all students daily. Announcements included information regarding Key Club meetings or events.',
    coreBullets: [],
    keywords: ['Digital Marketing', 'Graphic Design'],
  },
];

export const generateChatContext = (): string => {
  const education = getEducationData();
  // Filter out HTF from education main section, keep Purdue
  const educationItems = education.filter((e) => e.id === 'purdue');
  const projectItems = education.filter((e) => e.id !== 'purdue');

  const moreEducation = getMoreEducationData();
  // Filter Noblesville HS related to Education, others to Projects
  const hsItems = moreEducation.filter(
    (e) => e.id === 'noblesville-high-school'
  );
  const otherItems = moreEducation.filter(
    (e) => e.id !== 'noblesville-high-school'
  );

  const sections: string[] = [];

  // Leadership & Projects
  const projectStrings: string[] = [];
  const allProjects = [
    ...educationItems,
    ...hsItems,
    ...projectItems,
    ...otherItems,
  ];
  allProjects.forEach((item) => {
    let itemStr = `${item.title || ''} | ${item.subtitle || ''} (${item.subheading || ''})`;

    if (item.body) {
      itemStr += `\n\n->Summary:\n- ${item.body}`;
    }

    if (item.coreBullets && item.coreBullets.length > 0) {
      itemStr += `\n\n->Core Responsibilities:\n`;
      itemStr += item.coreBullets.map((b) => `- ${b}`).join('\n');
    }

    if (item.highlights && item.highlights.length > 0) {
      itemStr += '\n\n->Highlights:\n';
      itemStr += item.highlights
        .map((h) => `- ${h.title}: ${h.text}`)
        .join('\n');
    }

    if (item.moreAccomplishments && item.moreAccomplishments.length > 0) {
      itemStr += '\n\n->Additional Accomplishments:\n';
      itemStr += item.moreAccomplishments.map((ma) => `- ${ma}`).join('\n');
    }

    if (item.moreBullets && item.moreBullets.length > 0) {
      itemStr += '\n\n->More...:\n';
      itemStr += item.moreBullets.map((mb) => `- ${mb}`).join('\n');
    }

    if (item.keywords && item.keywords.length > 0) {
      itemStr += `\n\n->Keywords: ${item.keywords.map((k) => (typeof k === 'string' ? k : k.label)).join(', ')}`;
    }

    projectStrings.push(itemStr);
  });

  if (projectStrings.length > 0) {
    sections.push(
      '-| Leadership & Projects |-\n\n' + projectStrings.join('\n\n')
    );
  }

  // Education
  const educationStrings: string[] = [];
  const allEducation = [...educationItems, ...hsItems];
  allEducation.forEach((item) => {
    let itemStr = `${item.title || ''} | ${item.subtitle || ''} (${item.subheading || ''})`;

    const statsToUse =
      item.id === 'purdue'
        ? purdueStats
        : item.id === 'noblesville-high-school'
          ? noblesvilleStats
          : [];

    if (statsToUse.length > 0) {
      itemStr += `\n\n->Stats:\n`;
      itemStr += statsToUse.map((s) => `- ${s.title}: ${s.text}`).join('\n');
    }

    if (item.body) {
      itemStr += `\n\n->Summary:\n- ${item.body}`;
    }

    educationStrings.push(itemStr);
  });

  if (educationStrings.length > 0) {
    sections.push('-| Education |-\n\n' + educationStrings.join('\n\n'));
  }

  return sections.join('\n\n');
};
