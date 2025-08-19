import type { Experience } from '@/types';
import htf_logo_white from '@/assets/images/hack_the_future/htf_logo_white.png';
import htf_spooky from '@/assets/images/hack_the_future/htf_spooky.png';
import htf_thankful from '@/assets/images/hack_the_future/htf_thankful.png';
import htf_your_future from '@/assets/images/hack_the_future/htf_your_future.png';
import htf_snowglobe from '@/assets/images/hack_the_future/htf_snowglobe.png';
import htf_profile from '@/assets/images/hack_the_future/htf_profile.png';
import htf_pizza from '@/assets/images/hack_the_future/htf_pizza.png';
import htf_ornament from '@/assets/images/hack_the_future/htf_ornament.png';
import htf_neon from '@/assets/images/hack_the_future/htf_neon.png';
import htf_logo from '@/assets/images/hack_the_future/htf_logo.png';
import htf_jurassic from '@/assets/images/hack_the_future/htf_jurassic.png';
import htf_innovateher from '@/assets/images/hack_the_future/htf_innovateher.png';
import htf_graduation from '@/assets/images/hack_the_future/htf_graduation.png';
import htf_gameshow from '@/assets/images/hack_the_future/htf_gameshow.png';
import htf_code from '@/assets/images/hack_the_future/htf_code.png';
import htf_code_round from '@/assets/images/hack_the_future/htf_code_round.png';
import htf_catapult from '@/assets/images/hack_the_future/htf_catapult.png';
import htf_carousel_of_progress from '@/assets/images/hack_the_future/htf_carousel_of_progress.png';
import htf_back_to_the_future from '@/assets/images/hack_the_future/htf_back_to_the_future.png';

export const EDUCATION: Experience[] = [
  {
    id: 'htf-design-director',
    color: '#00EB88',
    imagery: htf_logo_white,
    title: 'Design Director',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, March 2022 - May 2024',
    body: 'Mentored four project teams on UX/UI principles and provided resources to translate Figma mockups into front-end code.',
    bullets: [
      'Established branded components in React to streamline development and maintain consistency across all team projects.',
      'Designed marketing materials in Figma leading to a nearly 90% increase in applicants year-over-year, shattering previous records.',
    ],
    keywords: ['Figma', 'UI/UX Design', 'Front-end', 'Marketing'],
    images: [
      htf_logo,
      htf_profile,
      htf_jurassic,
      htf_code,
      htf_spooky,
      htf_thankful,
      htf_ornament,
      htf_snowglobe,
      htf_your_future,
      htf_innovateher,
      htf_catapult,
      htf_gameshow,
      htf_code_round,
      htf_carousel_of_progress,
      htf_back_to_the_future,
      htf_neon,
      htf_graduation,
      htf_pizza,
    ],
  },
  {
    id: 'htf-secretary',
    color: '#03C652',
    imagery: htf_logo_white,
    title: 'Secretary',
    subtitle: 'Hack the Future',
    subheading: 'Purdue University, November 2023 - May 2024',
    body: 'Oversaw club logistics, including event planning, member communications, and administrative tasks, to keep members engaged.',
    bullets: [],
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
    bullets: [
      "Developed front-end interfaces using React that mimicked the Designer's mockups and integrated with a MongoDB database.",
    ],
    keywords: ['React', 'MongoDB', 'Front-end'],
  },
];
