'use client';

import brainPain from '@/assets/images/gallery/brain-pain.png';
import dinosaur from '@/assets/images/gallery/dinosaur.png';
import fansABlazin from '@/assets/images/gallery/fans-a-blazin.png';
import hamburger from '@/assets/images/gallery/hamburger.png';
import hungryHippo from '@/assets/images/gallery/hungry-hippo.png';
import { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Modal from '../Modal';
import { useModalContext } from '@/context/ModalContext';
import { ChevronRight } from 'lucide-react';
import Carousel, { CarouselImageItem, CarouselItem } from '../Carousel';

export default function ArtGallery() {
  const { openExperienceModal } = useModalContext();
  const [expandedImage, setExpandedImage] = useState<StaticImageData | null>(
    null
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-xl md:text-2xl font-header">
        Some of my creations...
      </div>
      <Carousel color="var(--color-primary)">
        <CarouselImageItem
          image={hamburger}
          color="var(--color-primary)"
          objectFit="contain"
          onClick={() => setExpandedImage(hamburger)}
        />
        <CarouselImageItem
          image={hungryHippo}
          color="var(--color-primary)"
          objectFit="contain"
          onClick={() => setExpandedImage(hungryHippo)}
        />
        <CarouselImageItem
          image={dinosaur}
          color="var(--color-primary)"
          objectFit="contain"
          onClick={() => setExpandedImage(dinosaur)}
        />
        <CarouselImageItem
          image={brainPain}
          color="var(--color-primary)"
          objectFit="contain"
          onClick={() => setExpandedImage(brainPain)}
        />
        <CarouselImageItem
          image={fansABlazin}
          color="var(--color-primary)"
          objectFit="contain"
          onClick={() => setExpandedImage(fansABlazin)}
        />
        <CarouselItem
          className="inner-highlight inner-highlight-interactive flex flex-col justify-center p-6 h-[150px] w-[150px] cursor-pointer rounded-2xl"
          style={
            { '--highlight-color': 'var(--color-htf)' } as React.CSSProperties
          }
          onClick={() => openExperienceModal('htf-design-director')}
        >
          <div className="flex flex-col gap-2 text-sm">
            <div>Creations from my time as Design Director</div>
            <div className="flex items-center gap-1 text-[var(--color-htf)]">
              View more
              <ChevronRight size={14} />
            </div>
          </div>
        </CarouselItem>
        <CarouselItem
          className="inner-highlight inner-highlight-interactive flex flex-col justify-center p-6 h-[150px] w-[150px] cursor-pointer rounded-2xl"
          style={
            {
              '--highlight-color': 'var(--color-primary)',
            } as React.CSSProperties
          }
          onClick={() =>
            window.open(
              'https://www.redbubble.com/people/Js-Creations/shop?asc=u',
              '_blank'
            )
          }
        >
          <div className="flex flex-col gap-2 text-sm">
            <div>View my shop on Redbubble.</div>
            <div className="flex items-center gap-1 text-[var(--color-primary)]">
              Check it out
              <ChevronRight size={14} />
            </div>
          </div>
        </CarouselItem>
      </Carousel>

      <Modal
        open={!!expandedImage}
        onCloseCallback={() => setExpandedImage(null)}
        color="var(--color-generic)"
      >
        {expandedImage && (
          <div className="flex justify-center w-full px-4">
            <Image
              src={expandedImage}
              alt="Expanded Art"
              className="object-contain w-full h-auto max-w-2xl mt-16"
            />
          </div>
        )}
      </Modal>
    </div>
  );
}
