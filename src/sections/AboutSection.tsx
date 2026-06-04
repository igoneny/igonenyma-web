import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import AnimatedText from '../components/AnimatedText';

const ASSET = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7';
const MOON = `${ASSET}/moon_icon.11395d36.png`;
const OBJECT_3D = `${ASSET}/p59_1.4659672e.png`;
const LEGO = `${ASSET}/lego_icon-1.703bb594.png`;
const GROUP = `${ASSET}/Group_134-1.2e04f3ce.png`;

const PARAGRAPH =
  'Me apasiona crear, diseñar y aportar soluciones creativas y funcionales que no solo se vean bien, sino que también resuelvan problemas, cuenten historias y generen impacto. Además del diseño, disfruto de viajar, del tiempo en familia y la naturaleza, ya sea en la montaña o la playa. Estas me inspiran y alimentan mi creatividad.';

export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:px-10"
      style={{ background: '#0C0C0C' }}
    >
      {/* Decorative corner 3D objects */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute left-[1%] top-[4%] w-[120px] sm:left-[2%] sm:w-[160px] md:left-[4%] md:w-[210px]"
      >
        <img src={MOON} alt="" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] w-[100px] sm:left-[6%] sm:w-[140px] md:left-[10%] md:w-[180px]"
      >
        <img src={OBJECT_3D} alt="" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute right-[1%] top-[4%] w-[120px] sm:right-[2%] sm:w-[160px] md:right-[4%] md:w-[210px]"
      >
        <img src={LEGO} alt="" className="w-full" />
      </FadeIn>

      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] w-[130px] sm:right-[6%] sm:w-[170px] md:right-[10%] md:w-[220px]"
      >
        <img src={GROUP} alt="" className="w-full" />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
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
            className="max-w-[640px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <ContactButton />
      </div>
    </section>
  );
}
