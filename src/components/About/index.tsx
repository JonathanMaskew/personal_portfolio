import { Smile } from 'lucide-react';
import SectionWrapper from '../SectionWrapper';
import Carousel, { CarouselImageItem } from '../Carousel';
import tennis from '@/assets/images/tennis.jpg';
import manatee from '@/assets/images/manatee_oof.gif';
import lucy from '@/assets/images/lucy.png';
import reeses from '@/assets/images/reeses.jpg';
import reeses_shape from '@/assets/images/reeses_shape.png';
import tater_tots from '@/assets/images/tater_tots.jpg';
import dinosaur from '@/assets/images/dinosaur.jpg';
import carousel_of_progress from '@/assets/images/carousel_of_progress.png';
import travel from '@/assets/images/travel.png';

const reesesSvg = (
  <svg
    width="250"
    height="250"
    viewBox="0 0 556 555"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_5_3)">
      <path
        d="M269.435 28.6338C274.779 25.7426 281.221 25.7426 286.565 28.6338L297.215 34.3957C301.358 36.6369 306.214 37.1651 310.742 35.8668L322.382 32.5291C328.222 30.8543 334.514 32.2391 339.111 36.2116L348.274 44.1282C351.838 47.2076 356.467 48.7674 361.168 48.4727L373.253 47.7153C379.317 47.3352 385.164 50.0402 388.8 54.9081L396.047 64.6093C398.865 68.3829 403.051 70.9013 407.705 71.6241L419.671 73.4823C425.675 74.4147 430.803 78.3133 433.308 83.849L438.299 94.8812C440.241 99.1726 443.787 102.532 448.178 104.238L459.464 108.625C465.127 110.827 469.298 115.736 470.554 121.681L473.057 133.529C474.031 138.137 476.772 142.18 480.693 144.79L490.772 151.501C495.83 154.868 498.847 160.56 498.796 166.636L498.694 178.744C498.654 183.454 500.462 187.992 503.73 191.384L512.131 200.105C516.347 204.481 518.07 210.688 516.714 216.61L514.011 228.414C512.96 233.005 513.75 237.826 516.213 241.841L522.543 252.164C525.719 257.343 526.068 263.776 523.47 269.269L518.293 280.215C516.28 284.473 516.015 289.351 517.557 293.802L521.52 305.244C523.508 310.985 522.466 317.342 518.748 322.148L511.339 331.726C508.457 335.451 507.15 340.158 507.699 344.836L509.11 356.863C509.818 362.897 507.433 368.882 502.769 372.776L493.475 380.537C489.859 383.556 487.571 387.872 487.101 392.559L485.893 404.607C485.288 410.653 481.672 415.985 476.28 418.786L465.535 424.367C461.355 426.538 458.192 430.261 456.726 434.737L452.956 446.245C451.065 452.019 446.388 456.449 440.52 458.025L428.826 461.166C424.277 462.388 420.388 465.344 417.994 469.4L411.839 479.828C408.75 485.061 403.23 488.382 397.16 488.66L385.064 489.213C380.359 489.429 375.926 491.48 372.715 494.926L364.463 503.787C360.321 508.233 354.217 510.29 348.229 509.257L336.297 507.197C331.655 506.396 326.885 507.446 323.008 510.122L313.044 517.002C308.043 520.454 301.639 521.15 296.014 518.854L284.803 514.277C280.442 512.497 275.558 512.497 271.197 514.277L259.986 518.854C254.361 521.15 247.957 520.454 242.956 517.002L232.992 510.122C229.115 507.446 224.345 506.396 219.703 507.197L207.771 509.257C201.783 510.29 195.679 508.233 191.537 503.787L183.285 494.926C180.074 491.48 175.641 489.429 170.936 489.213L158.84 488.66C152.77 488.382 147.25 485.061 144.161 479.828L138.006 469.4C135.612 465.344 131.723 462.388 127.174 461.166L115.48 458.025C109.612 456.449 104.935 452.019 103.044 446.245L99.274 434.737C97.8078 430.261 94.6454 426.538 90.4655 424.367L79.7197 418.786C74.3277 415.985 70.7125 410.653 70.1065 404.607L68.8988 392.559C68.429 387.872 66.1409 383.556 62.5255 380.537L53.2308 372.776C48.5669 368.882 46.1824 362.897 46.8902 356.863L48.3009 344.836C48.8496 340.158 47.5427 335.451 44.6608 331.726L37.2518 322.148C33.5341 317.342 32.4919 310.985 34.4805 305.244L38.4434 293.802C39.9849 289.351 39.7205 284.473 37.7068 280.215L32.53 269.269C29.9323 263.776 30.2811 257.343 33.4574 252.164L39.7874 241.841C42.2496 237.826 43.0399 233.005 41.9886 228.414L39.286 216.61C37.9299 210.688 39.6533 204.481 43.8688 200.105L52.2699 191.384C55.5377 187.992 57.3458 183.454 57.3061 178.744L57.2041 166.636C57.1529 160.56 60.1703 154.868 65.228 151.501L75.3073 144.79C79.2279 142.18 81.9692 138.137 82.943 133.529L85.4463 121.681C86.7024 115.736 90.8729 110.827 96.5361 108.625L107.822 104.238C112.213 102.532 115.759 99.1726 117.701 94.8812L122.692 83.849C125.197 78.3133 130.325 74.4147 136.329 73.4823L148.295 71.6241C152.949 70.9013 157.135 68.3829 159.953 64.6093L167.2 54.908C170.836 50.0401 176.683 47.3352 182.747 47.7153L194.832 48.4727C199.533 48.7674 204.162 47.2076 207.726 44.1282L216.889 36.2116C221.486 32.2391 227.778 30.8543 233.618 32.5291L245.258 35.8668C249.786 37.1651 254.642 36.6369 258.785 34.3957L269.435 28.6338Z"
        fill="#551E0A"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_5_3"
        x="0.802017"
        y="0.465393"
        width="554.396"
        height="553.724"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="15" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_5_3"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_5_3"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default function About() {
  return (
    <SectionWrapper
      icon={Smile}
      title="About Jonathan"
      subtext={
        <>
          <div>Hi, I&apos;m Jonathan! I&apos;m happy you&apos;re here!</div>
          <div>
            I&apos;m a Software Engineer, focused primarily on front-end
            development, crafting exceptional user experiences.
          </div>
          <div>
            Currently, I&apos;m serving as a full-stack engineer at myhELO. I
            hold a BS in Computer Science from Purdue University, with a
            concentration in Software Engineering. At Purdue, I served as Design
            Director of a volunteer-based organization, Hack the Future.
          </div>
          <div>
            With a blended balance of development and design experience, I
            contain a unique set of skills perfect for bridging the gap between
            designers and developers. Don&apos;t hesitate to reach out; I&apos;d
            love to hear from you!
          </div>
        </>
      }
    >
      <Carousel>
        <CarouselImageItem
          image={tennis}
          text="I played varisty tennis at Noblesville High School, and continue to play recreationally."
        />
        <CarouselImageItem
          image={reeses_shape}
          text="I am addicted to Reese's Peanut Butter Cups in every form, size, and flavor."
        />
        <CarouselImageItem
          image={travel}
          text="Love to explore new places, having travelled to 40 states and 3 countries."
        />
        <CarouselImageItem
          image={lucy}
          text="A goofy little cockapoo named Lucy."
        />
        <CarouselImageItem
          image={dinosaur}
          text={
            '"Your scientists were so preoccupied with whether or not they could, they didn\'t stop to think if they should." - Jurassic Park'
          }
        />
        <CarouselImageItem
          image={tater_tots}
          text="Tater Tots are superior to french fries. Try to convince me otherwise."
        />
        <CarouselImageItem
          image={carousel_of_progress}
          text={
            '"There\'s a great big beautiful tomorrow, shining at the end of every day." - Carousel of Progress'
          }
        />
        <CarouselImageItem
          image={manatee}
          text="This is a gif of a manatee. You're welcome."
        />
      </Carousel>
    </SectionWrapper>
  );
}
