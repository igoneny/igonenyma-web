import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

const PORTRAIT = '/igone-perfil.jpeg';

export default function HeroAboutSection() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const heroAnchorRef = useRef<HTMLDivElement>(null);
  const restAnchorRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  // Distance (px) the desktop portrait travels from the hero down to its
  // resting spot between the About paragraphs.
  useEffect(() => {
    const measure = () => {
      const hero = heroAnchorRef.current;
      const rest = restAnchorRef.current;
      if (!hero || !rest) return;
      // both are hidden below md — skip when not laid out
      if (hero.offsetParent === null && rest.offsetParent === null) return;
      const heroY = hero.getBoundingClientRect().top + window.scrollY;
      const restY = rest.getBoundingClientRect().top + window.scrollY;
      setTravel(restY - heroY);
    };
    measure();
    const raf = requestAnimationFrame(measure);
    window.addEventListener('resize', measure);
    window.addEventListener('load', measure);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
      window.removeEventListener('load', measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ['start start', 'end end'],
  });
  const y = useTransform(scrollYProgress, [0, 0.5], [-travel, 0]);

  return (
    <div ref={wrapRef} className="relative">
      {/* HERO */}
      <section className="relative flex min-h-screen flex-col px-5 pb-10 pt-7 sm:px-8 md:px-12 md:pt-9">
        <FadeIn as="div" delay={0} y={-12} className="text-sm font-semibold uppercase tracking-[0.15em]">
          nyma studio
        </FadeIn>

        <div className="relative flex flex-1 flex-col items-center justify-center gap-8 md:items-stretch md:gap-0">
          <FadeIn as="div" delay={0.1} y={30}>
            <h1 className="display text-center text-[16vw] leading-[0.82] sm:text-left sm:text-[16vw] lg:text-[15vw]">
              Graphic
              <br />
              Designer
            </h1>
          </FadeIn>

          {/* Mobile: static portrait below the headline */}
          <FadeIn delay={0.4} y={20} className="md:hidden">
            <img
              src={PORTRAIT}
              alt="Igone Nogales"
              className="aspect-[3/4] w-[170px] rounded-2xl object-cover shadow-2xl"
              draggable={false}
            />
          </FadeIn>

          {/* Desktop anchor: where the travelling portrait sits while in the hero */}
          <div
            ref={heroAnchorRef}
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-0 w-0 md:block"
          />
        </div>

        <div className="flex flex-col items-center gap-1 text-center text-[11px] font-medium uppercase tracking-[0.2em] opacity-50 sm:flex-row sm:items-end sm:justify-between sm:gap-4 sm:text-xs">
          <FadeIn as="div" delay={0.25} y={20}>
            portfolio 2026
          </FadeIn>
          <FadeIn as="div" delay={0.35} y={20} className="sm:text-right">
            /creating since 2016
          </FadeIn>
        </div>
      </section>

      {/* ABOUT */}
      <section id="sobre-mi" className="px-5 py-24 sm:px-8 md:px-12 md:py-32">
        <AnimatedText
          text="Hey!"
          className="display text-ink"
          style={{ fontSize: 'clamp(4rem, 16vw, 15rem)' }}
        />

        <div className="relative mt-10 grid items-center gap-8 md:mt-16 md:grid-cols-12 md:gap-12">
          <FadeIn
            as="p"
            delay={0}
            y={20}
            className="text-xl font-bold leading-snug md:col-span-4 md:col-start-1 md:text-2xl"
          >
            Soy Igone, desarrolladora web y diseñadora gráfica freelance.
          </FadeIn>

          {/* Desktop only: portrait rests centered between the paragraphs */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 hidden -translate-x-1/2 -translate-y-1/2 md:block">
            <div ref={restAnchorRef}>
              <motion.div style={{ y }}>
                <img
                  src={PORTRAIT}
                  alt="Igone Nogales"
                  className="aspect-[3/4] w-[190px] rounded-2xl object-cover shadow-2xl lg:w-[220px]"
                  draggable={false}
                />
              </motion.div>
            </div>
          </div>

          <FadeIn
            as="p"
            delay={0.1}
            y={20}
            className="text-base leading-relaxed opacity-70 md:col-span-4 md:col-start-9 md:text-lg"
          >
            Diseño y desarrollo webs y marcas modernas, funcionales y orientadas
            a la conversión. A lo largo de los años he creado y lanzado proyectos
            para clientes de distintos sectores, ayudándoles a destacar, contar
            su historia y conectar con su audiencia más rápido.
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
