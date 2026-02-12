import React from 'react';
import type { Experience } from '@/types';
import HighlightFeature from '@/components/HighlightFeature';
import { Button } from '@/components/Button';
import ModalSection from '@/components/ModalSection';
import Image from 'next/image';
import {
  HandHeart,
  LayoutDashboard,
  Palette,
  MousePointerClick,
  MousePointer,
  MonitorSmartphone,
  Code,
  Construction,
  ExternalLink,
} from 'lucide-react';
import jsLogo from '@/app/Js_logo.png';
import jsLogoWhite from '@/app/Js_logo_white.png';
import jsLogoBlack from '@/app/Js_logo_black.png';
import jonathanCreations from '@/assets/images/Js_page/Jonathan_creations.gif';
import jonathanAnimation from '@/assets/images/Js_page/Jonathan_animation.gif';
import jsGif from '@/assets/images/Js_page/Js.gif';
import jsCreations from '@/assets/images/Js_page/Js_creations.gif';
import jsAnimation from '@/assets/images/Js_page/Js_animation.gif';
import jsMulticolor from '@/assets/images/Js_page/Js_multicolor.gif';

export const getFooterData = (): Experience[] => [
  {
    id: 'this-site',
    color: 'var(--color-generic)',
    imagery: HandHeart,
    title: 'Built with Passion',
    subtitle: 'Designed from scratch; Developed in Next.js and TypeScript',
    body: 'Every aspect of this website was conceptualized, designed, and built by me - no templates, no portfolio builders. From the layout to the theming, and everything in between, every aspect of the site was implemented with purpose, ensuring a delightful yet practical experience.',
    modalChildren: (
      <>
        <div className="flex flex-col gap-10">
          <div className="flex justify-center">
            <Button
              text="View GitHub Repository"
              clickDetail="https://github.com/JonathanMaskew/personal_portfolio"
              newTab={true}
              imagery={ExternalLink}
              background
            />
          </div>
          <div>
            I take great pride in my work and fully dedicate myself to my
            projects to achieve the best possible output. I put immense thought
            into every detail, and it is my hope that these intentional details
            make a difference. I hope to detail some of my thought processes and
            how they impacted this site below.
            <br />
            <br />
            This site was developed for one purpose: to showcase, well, me! I
            wanted to not only provide an overview of my skills, experiences,
            and interests, but also demonstrate my technical skills and passion
            for design/product-focused development.
          </div>
          <ModalSection icon={LayoutDashboard} title="Navigation">
            In terms of navigation, I felt that no content on the site is
            inherently more important, it&apos;s all contributing to the same
            goal - to gain an understanding of me. I want visitors to be able to
            access the core content fast, not have to find it. So, rather than
            separate it into pages, I opted for a single, scrollable page that
            highlights various aspects of my accomplishments, highlighting the
            core content with the ability to click into more information,
            ultimately providing a holistic view of me.
          </ModalSection>
          <ModalSection icon={Palette} title="Theming">
            I want the site to feel lively and engaging, not monotonous, while
            remaining engaging, professional, and accessible. With the focus
            being on the content, I chose to use colors that reflected that of
            the content, following their branding colors. This helps to tie
            together related content in separate sections through the
            familiarity of their colors, while differentiating it from content
            unrelated content nearby. I additionally strategically used
            gradients to call attention to certain items, differentiating it
            through the emotional impact of the gradient. If you click around a
            bit, you may even find some Easter eggs that affect the theme of the
            site!
          </ModalSection>
          <ModalSection icon={MousePointerClick} title="Interactivity">
            Some of the most popular systems seem to place a focus on
            interactivity, as they provide better context and confirmation to a
            user. Little interactions and animations make the site feel
            friendly, engaging, and lively. Hovering over content makes it
            apparent what is interactable by affecting the border. Certain
            actions, such as clicking on content, have slight animations to help
            illustrate the result of the user's action. And when content loads
            or is scrolled into view, it slowly fades into view, providing a
            sense of polish and professionalism.
          </ModalSection>
          <ModalSection icon={MousePointer} title="Usability">
            From the getgo, I wanted this site to be practical and intuitive,
            demonstrating my skills and personality while striking a sense of
            real-world professionalism. I intentionally avoided cluttering it
            with fancy technologies, contrarian user interface choices, or
            complex interactivity. Rather, I focused on a real-world, practical
            implementation, with a focus on the content. Of course, that
            doesn&apos;t mean the site couldn&apos;t be beautiful, interactive,
            and engaging!
          </ModalSection>
          <ModalSection icon={MonitorSmartphone} title="Responsiveness">
            In the modern age, it's almost certain this site would be viewed on
            a variety of devices, including phones, tablets, and desktops.
            Therefore, I built the site to not only be fully responsive, but to
            adjust the layout of the site for the device. For example, on
            desktop, navigation lives in the sidebar, hover effects help
            indicate interactivity, and content is displayed in a grid. On
            mobile, however, navigation lives in the top bar, padding is
            reduced, etc.
          </ModalSection>
          <ModalSection icon={Code} title="Technology">
            I built the site with Next.js, knowing that it&apos;s a popular,
            modern framework perfect for a front-end portfolio, as well as
            TypeScript. I also used Tailwind CSS to style items efficiently.
            <div>
              I think AI is a very powerful tool that will continue to change
              the workforce and the world, and I believe it is important to be
              transparent about its use. My use of AI is as a tool; I{' '}
              <span className="italic">refuse</span> to use the term
              vibe-coding, preferring to think of it as AI-assisted development,
              where I fully understand and vet all AI-contributions. AI is not
              to replace my own work nor limit my critical thinking, but rather
              increase my productivity and efficiency, aiding my abilities and
              increasing my understanding rather than replacing.{' '}
              <span className="italic font-bold">
                This site contains NO AI-generated text, images, or content.
              </span>{' '}
              The design, layout, theming - all design decisions - were made by
              me, and all content was curated by me.{' '}
              <span className="italic font-bold">
                Any AI-contributed code was well-understood to increase my
                understanding and abilities, thoroughly vetted, and adapted as I
                saw fit.
              </span>
            </div>
          </ModalSection>
          <ModalSection icon={Construction} title="Always Evolving">
            As various experiences continue to shape me, and inspiration
            continues to strike, this site will continue to evolve.
          </ModalSection>
        </div>
      </>
    ),
  },
  {
    id: 'js-page',
    color: 'var(--color-brand)',
    imagery: jsLogo,
    title: "J's Page",
    subtitle: 'The Next Iteration of my Personal Brand',
    body: "My personal portfolio, which I've previously referred to as J's Page, has taken many forms. This site is the latest.",
    modalChildren: (
      <>
        <div className="flex flex-col gap-10">
          <div>
            I love to imagine and craft 'experiences', and building a personal
            brand allowed me to be creative in that sense.
          </div>
          <div>
            It started when I was just a wee lad and discovered Google Sites. At
            the time, Google Sites was fascinating to me. I could build a
            website all on my own while lacking the technical skills at the
            time. Then, I could publish it for free. I could create my own
            little experience on the web. Suddenly, a dream was born.
          </div>
          <div>
            This dream took to reality in the shape of what I called J&apos;s
            Page. Initially, it began as a way for me to organize and share
            animations, videos, stories, and various other creative artifacts
            that I enjoyed creating at the time. It was essentially a mix of a
            personal portfolio and a diary.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
            <Image
              src={jonathanAnimation}
              alt="Jonathan Animation"
              className="w-full h-auto max-w-full"
            />
            <Image
              src={jonathanCreations}
              alt="Jonathan Creations"
              className="w-full h-auto max-w-full"
            />
          </div>
          <div>
            As I continued to expand the site and establish other sites
            mirroring the J&rsquo;s branding, such as a holiday-specific site,
            it was clear that I was building a personal brand. As it continued
            to grow, I realized I needed a log. Reflecting the "J's Page" name,
            the J's branding was born.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
            <Image
              src={jsCreations}
              alt="Js Creations"
              className="w-full h-auto max-w-full"
            />
            <Image
              src={jsAnimation}
              alt="Js Animation"
              className="w-full h-auto max-w-full"
            />
          </div>
          <div>
            Eventually, as I continued to add content beyond just animations and
            miscellaneous creations, I felt the branding needed to reflect this.
            And so here we are, the J's standalone logo.
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
            <Image
              src={jsGif}
              alt="Js Gif"
              className="w-full h-auto max-w-full"
            />
            <Image
              src={jsMulticolor}
              alt="Js Multicolor"
              className="w-full h-auto max-w-full"
            />
          </div>
          <div>
            More recently, as I&apos;ve been exploring new creative outlets,
            including logo design, graphic design, and UI design. I decided to
            go back to my roots, and build myself a new "J's" logo.
          </div>
          <div className="grid grid-cols-3 gap-4 md:gap-8 w-fit mx-auto">
            <Image
              src={jsLogo}
              alt="J's Page Logo"
              className="w-full h-auto max-w-[75px] sm:max-w-[100px]"
            />
            <Image
              src={jsLogoWhite}
              alt="J's Page Logo white"
              className="w-full h-auto max-w-[75px] sm:max-w-[100px]"
            />
            <Image
              src={jsLogoBlack}
              alt="J's Page Logo black"
              className="w-full h-auto max-w-[75px] sm:max-w-[100px]"
            />
          </div>
          <div>
            Ultimately, "J's Page" and the creativity surrounding it contributed
            to my decision to pursue a degree in Computer Science and a career
            in Software Engineering, where I now understand the powerful code
            behind these sites. And, of course, now wield much greater
            capabilities and knowledge, to build and contribute to practical and
            powerful products.
          </div>
          <div>
            Eventually, the diary aspect of J's Page became more document-based
            as a more long-term form of record-keeping, and the J's Page of
            yesterday was no more. As I work to build a new presence, J's Page
            has evolved into the site you are presented with here today. And who
            knows what the J's Page of tomorrow may look like ('Augmented
            Reality', perhaps?)
          </div>
        </div>
      </>
    ),
  },
];
