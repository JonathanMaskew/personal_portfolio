'use client';

import { motion, type Variants } from 'framer-motion';
import Computer from '@/assets/images/site-graphics/computer.svg';
import CodeLogo from '@/assets/images/site-graphics/code-logo.svg';
import ReactLogo from '@/assets/images/site-graphics/react-logo.svg';
import NextJSLogo from '@/assets/images/site-graphics/nextjs-logo.svg';
import HTMLLogo from '@/assets/images/site-graphics/html-logo.svg';
import TypeScriptLogo from '@/assets/images/site-graphics/typescript-logo.svg';
import JavaScriptLogo from '@/assets/images/site-graphics/javascript-logo.svg';
import AngularLogo from '@/assets/images/site-graphics/angular-logo.svg';
import Stars from '@/assets/images/site-graphics/stars.svg';

const SkillsComputer = () => {
  const floatingVariants: Variants = {
    floatSlow: {
      y: ['0%', '-20%', '0%'], // Moves 15% of the logo's height
      transition: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
    },
    floatMedium: {
      y: ['0%', '-15%', '0%'],
      transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
    },
    floatFast: {
      y: ['0%', '-10%', '0%'],
      transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
    },
  };

  const techItems = [
    {
      id: 'code',
      src: CodeLogo,
      alt: 'Code',
      className: 'w-[15%] bottom-[58%] left-1/2 -translate-x-1/2 z-10',
      variant: 'floatSlow',
      delay: 0,
    },
    {
      id: 'nextjs',
      src: NextJSLogo,
      alt: 'Next.js',
      className: 'w-[6%] bottom-[57%] left-[25%] z-10',
      variant: 'floatMedium',
      delay: 0.5,
    },
    {
      id: 'typescript',
      src: TypeScriptLogo,
      alt: 'TypeScript',
      className: 'w-[6%] bottom-[66%] right-[26%] z-10',
      variant: 'floatFast',
      delay: 1.2,
    },
    {
      id: 'html',
      src: HTMLLogo,
      alt: 'HTML',
      className: 'w-[6%] bottom-[45%] left-[15%] z-10',
      variant: 'floatSlow',
      delay: 2.1,
    },
    {
      id: 'javascript',
      src: JavaScriptLogo,
      alt: 'JavaScript',
      className: 'w-[6%] bottom-[54%] right-[18%] z-10',
      variant: 'floatMedium',
      delay: 1.5,
    },
    {
      id: 'react',
      src: ReactLogo,
      alt: 'React',
      className: 'w-[8%] bottom-[43%] left-[31%] z-10',
      variant: 'floatFast',
      delay: 0.8,
    },
    {
      id: 'angular',
      src: AngularLogo,
      alt: 'Angular',
      className: 'w-[8%] bottom-[43%] right-[28%] z-10',
      variant: 'floatSlow',
      delay: 2.5,
    },
  ];

  return (
    <div className="w-full max-w-[600px] aspect-square relative select-none">
      {/* Background Stars */}
      <motion.div
        className="absolute inset-x-0 bottom-[40%] z-0 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <img
          src={Stars.src}
          alt="Stars"
          className="w-[90%] h-auto object-contain opacity-60"
        />
      </motion.div>

      {/* Floating Logos */}
      {techItems.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute ${item.className}`}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 0.2 + item.delay * 0.2,
          }}
        >
          <motion.img
            src={item.src.src}
            alt={item.alt}
            className="w-full h-auto drop-shadow-lg"
            variants={floatingVariants}
            animate={item.variant}
            style={{
              animationDelay: `${item.delay}s`,
            }}
          />
        </motion.div>
      ))}

      {/* Computer (Base) */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] z-20"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={Computer.src}
          alt="Laptop"
          className="w-full h-auto drop-shadow-2xl"
        />
      </motion.div>
    </div>
  );
};

export default SkillsComputer;
