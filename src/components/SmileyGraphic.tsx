'use client';

import { motion } from 'framer-motion';
import GreenThing from '@/assets/images/site_graphics/Green_thing.svg';
import PurpleThing from '@/assets/images/site_graphics/Purple_thing.svg';
import BlueThing from '@/assets/images/site_graphics/Blue_thing.svg';
import Eyes from '@/assets/images/site_graphics/Eyes.svg';

const SmileyGraphic = ({ className = '' }: { className?: string }) => {
  const blinkVariants = {
    blink: (delay: number) => ({
      scaleY: [1, 0.1, 1],
      transition: {
        duration: 0.2,
        repeat: Infinity,
        repeatDelay: 4 + Math.random() * 2, // Randomize intervals slightly
        delay: delay,
        ease: 'easeInOut',
      },
    }),
  };

  return (
    <div
      className={`relative flex items-end justify-center translate-y-[15%] ${className}`}
    >
      {/* Purple Thing (Small, Left) */}
      <motion.div
        className="relative w-[32%] z-20 -mr-[12%] mb-[4%]"
        animate={{ y: ['0%', '-8%', '0%'] }}
        transition={{
          duration: 3.2,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0.5,
        }}
      >
        <img
          src={PurpleThing.src}
          alt="Purple Character"
          className="w-full h-auto"
        />
        <motion.img
          src={Eyes.src}
          alt="Eyes"
          className="absolute top-[25%] left-[50%] translate-x-[-50%] w-[25%]"
          variants={blinkVariants as any}
          custom={0}
          animate="blink"
        />
      </motion.div>

      {/* Blue Thing (Tall, Back/Center) */}
      <motion.div
        className="relative w-[38%] z-10"
        animate={{ y: ['0%', '-4%', '0%'] }}
        transition={{
          duration: 4,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 0,
        }}
      >
        <img
          src={BlueThing.src}
          alt="Blue Character"
          className="w-full h-auto"
        />
        <motion.img
          src={Eyes.src}
          alt="Eyes"
          className="absolute top-[10%] left-[50%] translate-x-[-50%] w-[25%]"
          variants={blinkVariants as any}
          custom={1.5}
          animate="blink"
        />
      </motion.div>

      {/* Green Thing (Medium, Right) */}
      <motion.div
        className="relative w-[35%] z-20 -ml-[12%]"
        animate={{ y: ['0%', '-6%', '0%'] }}
        transition={{
          duration: 4.5,
          ease: 'easeInOut',
          repeat: Infinity,
          delay: 1,
        }}
      >
        <img
          src={GreenThing.src}
          alt="Green Character"
          className="w-full h-auto"
        />
        <motion.img
          src={Eyes.src}
          alt="Eyes"
          className="absolute top-[14%] left-[50%] translate-x-[-50%] w-[25%]"
          variants={blinkVariants as any}
          custom={3}
          animate="blink"
        />
      </motion.div>
    </div>
  );
};

export default SmileyGraphic;
