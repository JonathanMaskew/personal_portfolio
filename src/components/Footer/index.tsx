'use client';

import SectionWrapper from '@/components/SectionWrapper';
import HighlightFeature from '@/components/HighlightFeature';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import HighlightDetailed from '../HighlightDetailed';
import {
  HandHeart,
  Plus,
  LayoutDashboard,
  Palette,
  MousePointer,
  Code,
  MousePointerClick,
  MonitorSmartphone,
  Construction,
} from 'lucide-react';
import { Button } from '../Button';
import JsLogo from '../../app/Js_logo.png';
import JsLogoWhite from '../../app/Js_logo_white.png';
import JsLogoBlack from '../../app/Js_logo_black.png';
import { useModal } from '@/hooks/useModal';
import Modal from '../Modal';
import Image from 'next/image';
import JonathanCreations from '../../assets/images/Js_page/Jonathan_creations.gif';
import JonathanAnimation from '../../assets/images/Js_page/Jonathan_animation.gif';
import JsGif from '../../assets/images/Js_page/Js.gif';
import JsCreations from '../../assets/images/Js_page/Js_creations.gif';
import JsAnimation from '../../assets/images/Js_page/Js_animation.gif';
import JsMulticolor from '../../assets/images/Js_page/Js_multicolor.gif';
import { useState } from 'react';
import ModalSection from '../ModalSection';
import ButtonRow from '../ButtonRow';

export default function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const { modalOpened, openModal, closeModal } = useModal();

  return (
    <SectionWrapper
      title="Thanks for visiting my site!"
      subtext={
        <div className="flex flex-col gap-2">
          Please don&apos;t hesitate to reach out. I&apos;d love to connect!
          <ButtonRow>
            {SECONDARY_NAV_ITEMS.map((item) => {
              return (
                <Button
                  key={item.id}
                  icon={item.icon}
                  text={item.label}
                  clickDetail={item.href}
                  newTab={item.newTab}
                />
              );
            })}
          </ButtonRow>
        </div>
      }
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <HighlightDetailed
          color="#696969"
          imagery={HandHeart}
          title="Built with Passion"
          subtitle="Developed with Next.js"
          body="From the layout to the color scheme, and beyond, many intentional decisions were made to ensure a delightful experience."
          onClick={() => {
            setModalContent('this_site');
            openModal();
          }}
          actionButton={
            <Button
              icon={Plus}
              text="More"
              clickDetail={() => {
                setModalContent('this_site');
                openModal();
              }}
            />
          }
        />
        <HighlightDetailed
          color="#FF6B18"
          imagery={JsLogo}
          title="J's Page"
          subtitle="The Next Iteration of my Personal Brand"
          body="My personal portfolio, which I've previously referred to as J's Page, has taken many forms. This site being the latest."
          onClick={() => {
            setModalContent('js_page');
            openModal();
          }}
          actionButton={
            <Button
              icon={Plus}
              text="More"
              clickDetail={() => {
                setModalContent('js_page');
                openModal();
              }}
            />
          }
        />
        <div className="col-span-full">
          <HighlightFeature
            color="#000000"
            //   imagery={Cog}
          >
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
        </div>
      </div>
      <Modal
        open={modalOpened && !!modalContent}
        onCloseCallback={closeModal}
        color={modalContent === 'this_site' ? '#696969' : '#FF6B18'}
      >
        {modalContent === 'this_site' && (
          <>
            <HighlightFeature
              color="#696969"
              imagery={HandHeart}
              title="Built with Passion"
              subtitle="Developed with Next.js"
              nested
              heading
            />
            <div className="flex flex-col gap-10">
              <div>
                I put my full dedication into everything I do to achieve the
                best possible output. Everything I do is done with care and I
                put immense thought into every detail. Why should it be this
                way? How should it be done? How will this scale and adapt?
              </div>
              <div>
                This passion, of course, is present in this very site...
              </div>
              <ModalSection icon={LayoutDashboard} title="Layout">
                The point of the site it to showcase my accomplishments. No
                thing is inherently more important than another, it&apos;s all
                contributing to the same goal - to gain an understanding of,
                well, me. So why separate it into pages? Therefore, we&apos;ve
                got a single, scrollable page that highlights various aspects of
                my accomplishments, providing a holistic view of me.
              </ModalSection>
              <ModalSection icon={Palette} title="Colors">
                Again, the most important aspect of this site is the content
                within it. Therefore, I chose the color scheme to reflect that,
                with each color reflective of the corresponding data. This makes
                each chunk of content feel unified, helping to differentiate it
                from similar content within a single page. I strategically used
                gradients on content I wanted to draw more attention to. The
                dark background is intended to bring a sense of professionalism
                and helps the colors to pop.
              </ModalSection>
              <ModalSection icon={MousePointerClick} title="Interactivity">
                Little interactions and animations make the site feel friendly,
                engaging, and lively. Hovering over content makes it apparent
                what is interactable. Little animations when interacting provide
                clarity and a sense of flow.
              </ModalSection>
              <ModalSection icon={MousePointer} title="Usability">
                My intention with this site was not to shove it full of fancy
                technologies, contrarian user interface choices, or complex
                interactivity. My goal was to create a site that was practical
                and intuitive, that, again, prioritized the content. Of course,
                that doesn&apos;t mean the site couldn&apos;t be beautiful,
                interactive, and engaging.
              </ModalSection>
              <ModalSection icon={MonitorSmartphone} title="Responsiveness">
                I knew this site would likely be viewed on a variety of devices.
                In professional contexts, it may be viewed on desktop. However,
                in many instances, especially if sending a link, it may be
                viewed on a phone. Therefore, I built the site to not only be
                fully responsive, but to be optimized for mobile vs desktop
                viewing. For example, on desktop you get a sidebar for
                navigation and hover effects. On mobile, you get a top
                navigation bar.
              </ModalSection>
              <ModalSection icon={Code} title="Technology">
                I built the site with Next.js, knowing that it&apos;s a popular,
                modern framework, perfect for a front-end portfolio. I also used
                Tailwind CSS to style items for efficiently. I think AI is a
                very powerful tool, and I believe it should be used as a tool,
                not a replacement. All design decisions and all content are my
                own. Any AI contributions to the code were well-understood,
                vetted, and adapted, with AI being used more as an assistant,
                rather than a developer.
              </ModalSection>
              <ModalSection icon={Construction} title="Never Complete">
                As various experiences continue to shape me, this site will
                continue to evolve.
              </ModalSection>
            </div>
          </>
        )}
        {modalContent === 'js_page' && (
          <>
            <HighlightFeature
              color="#FF6B18"
              imagery={JsLogo}
              title="The Evolution of J's Page"
              subtitle="The Next Iteration of my Personal Brand"
              nested
              heading
            />
            <div className="flex flex-col gap-10">
              <div>
                I love to imagine the experience that others perceive, and
                building a personal brand allowed me to be creative in that
                sense.
              </div>
              <div>
                It all started when I discovered Google Sites. As a child,
                Google Sites was fascinating. I could build a website all on my
                own, without knowing how to code. Then, I could publish it for
                free. To me, this was amazing.
              </div>
              <div>
                Out of this fascination came J&apos;s Page. Initially, it began
                as a way for me to organize and share animations, videos,
                stories, and various other creative artifacts. It was
                essentially a mix of a personal portfolio and a diary.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <Image
                  src={JonathanAnimation}
                  alt="Jonathan Animation"
                  className="w-full h-auto max-w-full"
                />
                <Image
                  src={JonathanCreations}
                  alt="Jonathan Creations"
                  className="w-full h-auto max-w-full"
                />
              </div>
              <div>
                As I continued to expand the site and establish other sites
                mirroring the J&rsquo;s branding, it was clear that I was
                building a personal brand. And what does a brand need? A logo.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <Image
                  src={JsCreations}
                  alt="Js Creations"
                  className="w-full h-auto max-w-full"
                />
                <Image
                  src={JsAnimation}
                  alt="Js Animation"
                  className="w-full h-auto max-w-full"
                />
              </div>
              <div>
                Eventually, as I continued to add content beyond just creations
                and animations, the branding needed to reflect this. At last,
                the J&rsquo;s brand was born.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
                <Image
                  src={JsGif}
                  alt="Js Gif"
                  className="w-full h-auto max-w-full"
                />
                <Image
                  src={JsMulticolor}
                  alt="Js Multicolor"
                  className="w-full h-auto max-w-full"
                />
              </div>
              <div>
                More recently, I&apos;ve been exploring some new creative
                outlets, including logo design, graphic design, and UI design.
                With this, I decided to go back to my roots, and build myself a
                new logo.
              </div>
              <div className="grid grid-cols-3 gap-4 md:gap-8 w-fit mx-auto">
                <Image
                  src={JsLogo}
                  alt="J's Page Logo"
                  className="w-full h-auto max-w-[75px] sm:max-w-[100px]"
                />
                <Image
                  src={JsLogoWhite}
                  alt="J's Page Logo white"
                  className="w-full h-auto max-w-[75px] sm:max-w-[100px]"
                />
                <Image
                  src={JsLogoBlack}
                  alt="J's Page Logo black"
                  className="w-full h-auto max-w-[75px] sm:max-w-[100px]"
                />
              </div>
              <div>
                Ultimately, this creative avenue contributed to my decision to
                pursue a degree in Computer Science and a career in Software
                Engineering, where I now understand the powerful code behind
                these sites.
              </div>
              <div>
                Eventually, J&apos;s Page became more document based, as a more
                long-term form of record-keeping. But, as I work to build a new
                presence, I began iterating once again.
              </div>
              <div>
                And here we are. Years of iterating on J&apos;s Page and the
                J&apos;s branding ultimately culminates in the site you&apos;re
                visiting now.
              </div>
              <div>
                As I continue to grow, so will J&apos;s Page and the J&apos;s
                branding.
              </div>
            </div>
          </>
        )}
      </Modal>
    </SectionWrapper>
  );
}
