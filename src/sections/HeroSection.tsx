import FadeIn from '../components/FadeIn';

const PORTRAIT = '/igone-perfil-ia.png';

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col px-5 pb-10 pt-7 sm:px-8 md:px-12 md:pt-9">
      {/* Brand wordmark (no menu) */}
      <FadeIn as="div" delay={0} y={-12} className="text-sm font-semibold uppercase tracking-[0.15em]">
        nyma studio
      </FadeIn>

      {/* Headline + portrait */}
      <div className="relative flex flex-1 flex-col justify-center">
        <FadeIn as="div" delay={0.1} y={30}>
          <h1 className="display text-center text-[19vw] leading-[0.82] sm:text-left sm:text-[17vw] lg:text-[16vw]">
            Software
            <br />
            Engineer
          </h1>
        </FadeIn>

        <FadeIn
          delay={0.45}
          y={0}
          className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
        >
          <img
            src={PORTRAIT}
            alt="Igone Nogales"
            className="aspect-square w-[120px] rounded-2xl object-cover shadow-2xl sm:w-[150px] md:w-[190px]"
            draggable={false}
          />
        </FadeIn>
      </div>

      {/* Bottom row */}
      <div className="flex items-end justify-between gap-4">
        <FadeIn as="div" delay={0.25} y={20} className="display text-[clamp(1.7rem,6vw,4.5rem)]">
          portfolio 2026
        </FadeIn>
        <FadeIn
          as="div"
          delay={0.35}
          y={20}
          className="text-right text-[10px] font-medium uppercase leading-tight tracking-[0.2em] opacity-50 sm:text-xs"
        >
          /creating
          <br />
          since 2016
        </FadeIn>
      </div>
    </section>
  );
}
