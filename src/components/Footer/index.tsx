'use client';

import SectionWrapper from '@/components/SectionWrapper';
import HighlightFeature from '@/components/HighlightFeature';
import { NavLink } from '@/components/NavLink';
import { SECONDARY_NAV_ITEMS } from '@/data/nav';
import HighlightDetailed from '../HighlightDetailed';
import { HandHeart, Plus } from 'lucide-react';
import { Button } from '../Button';
import JsLogo from '../../app/Js_logo.png';
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

export default function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);
  const { modalOpened, openModal, closeModal } = useModal();

  return (
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <HighlightDetailed
          color="#ffffff"
          imagery={HandHeart}
          title="Built with Passion"
          subtitle="Developed with Next.js"
          body="From the layout to the color scheme, many intentional decisions were made to ensure a delightful experience."
          //   actionButton={
          //     <Button
          //       icon={Plus}
          //       text="Learn More"
          //       clickDetail={() => {
          //         // setOpenedJobId('myhelo');
          //         // openModal();
          //       }}
          //     />
          //   }
        />
        <HighlightDetailed
          color="#FF6B18"
          imagery={JsLogo}
          title="J's Page"
          subtitle="The Next Iteration of my Personal Brand"
          body="My personal portfolio, which I've previously referred to as J's Page, has taken many forms. This, being the latest."
          onClick={() => {
            setModalContent('js_page');
            openModal();
          }}
          actionButton={
            <Button
              icon={Plus}
              text="Learn More"
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
        color="#FF6B18"
      >
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
            <div className="flex flex-col gap-4">
              <div>
                I love to imagine the experience of the user, and building a
                personal brand allowed me to be creative in that sense.
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-4">
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
                mirroring the &lsquo;J&rsquo;s&rsquo; branding, it was clear
                that I was building a personal brand. And what does a brand
                need? A logo.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-4">
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
                the &lsquo;J&rsquo;s&rsquo; brand was born.
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 mb-4">
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
              <Image
                src={JsLogo}
                alt="J's Page Logo"
                className="w-full h-auto max-w-[100px] sm:max-w-[150px] mx-auto mb-4"
              />
              <div>
                Ultimately, this creative avenue contributed to my decision to
                pursue a degree in Computer Science and a career in Software
                Engineering, where I now understand the powerful code behind
                these sites.
              </div>
              <div>
                And here we are. Years of iterating on J&apos;s Page and the
                J&apos;s branding ultimately culminates in the site you&apos;re
                visiting now.
              </div>
            </div>
          </>
        )}
      </Modal>
    </SectionWrapper>
  );
}
