import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import AnimatedText from '../components/AnimatedText';

const PARAGRAPH =
  'Me apasiona crear, diseñar y aportar soluciones creativas y funcionales que no solo se vean bien, sino que también resuelvan problemas, cuenten historias y generen impacto. Además del diseño, disfruto de viajar, del tiempo en familia y la naturaleza, ya sea en la montaña o la playa. Estas me inspiran y alimentan mi creatividad.';

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
      style={{ background: '#1A120B' }}
    >
      <div className="flex w-full max-w-4xl flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex w-full flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Sobre mí
          </FadeIn>

          <AnimatedText
            text={PARAGRAPH}
            className="mx-auto max-w-[640px] text-center font-medium leading-relaxed text-[#F2E7D3]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <ContactButton />
      </div>
    </section>
  );
}
