import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';

const NAV_LINKS = [
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Contacto', href: '#contacto' },
];

// Igone's real photo (Gaztelugatxe), landscape 16:9.
const HERO_IMG = '/igone-gaztelugatxe.png';

export default function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  // The image "opens" from a small rounded pill to the full photo as you scroll.
  // Starts ~45% open (inset 27.5% leaves 45% of each dimension visible).
  const insetY = useTransform(scrollYProgress, [0, 0.8], [27.5, 0]);
  const insetX = useTransform(scrollYProgress, [0, 0.8], [27.5, 0]);
  const roundedness = useTransform(scrollYProgress, [0, 1], [1000, 16]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [0.9, 1]);
  const clipPath = useMotionTemplate`inset(${insetY}% ${insetX}% ${insetY}% ${insetX}% round ${roundedness}px)`;

  return (
    <div ref={scrollRef} className="relative" style={{ height: '200vh' }}>
      <section className="sticky top-0 flex h-screen flex-col overflow-hidden">
        {/* Navbar */}
        <FadeIn
          as="nav"
          delay={0}
          y={-20}
          className="z-20 flex items-center justify-between px-6 pt-6 md:px-10 md:pt-8"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium uppercase tracking-wider text-white transition-opacity duration-200 hover:opacity-70 md:text-lg lg:text-[1.4rem]"
            >
              {link.label}
            </a>
          ))}
        </FadeIn>

        {/* Hero heading */}
        <div className="z-20 overflow-hidden">
          <FadeIn
            as="h1"
            delay={0.15}
            y={40}
            className="hero-heading mt-6 w-full whitespace-nowrap text-center text-[14vw] font-black uppercase leading-none tracking-tight sm:mt-4 sm:text-[15vw] md:-mt-5 md:text-[16vw] lg:text-[17.5vw]"
          >
            Hi, i&apos;m igone
          </FadeIn>
        </div>

        {/* Opening photo — outer div centers it (plain CSS), inner motion.div
            handles the clip-path + scale so the transforms don't collide. */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[300px] -translate-x-1/2 -translate-y-1/2 sm:bottom-0 sm:top-auto sm:w-[460px] sm:translate-y-0 md:w-[620px] lg:w-[760px]">
          <motion.div style={{ clipPath, scale }}>
            <img
              src={HERO_IMG}
              alt="Igone Nogales"
              className="h-auto w-full select-none"
              draggable={false}
            />
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="z-20 mt-auto flex items-end justify-between px-6 pb-7 sm:pb-8 md:px-10 md:pb-10">
          <FadeIn
            as="p"
            delay={0.35}
            y={20}
            className="max-w-[160px] font-light uppercase leading-snug tracking-wide text-white sm:max-w-[220px] md:max-w-[280px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            desarrolladora web y diseñadora gráfica freelance — nyma studio
          </FadeIn>

          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
