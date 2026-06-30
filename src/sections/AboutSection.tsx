import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="px-5 py-24 sm:px-8 md:px-12 md:py-32">
      <AnimatedText
        text="Hey!"
        className="display text-ink"
        style={{ fontSize: 'clamp(4rem, 16vw, 15rem)' }}
      />

      <div className="mt-10 grid gap-8 md:mt-16 md:grid-cols-12 md:gap-12">
        <FadeIn
          as="p"
          delay={0}
          y={20}
          className="text-xl font-bold leading-snug md:col-span-5 md:col-start-1 md:text-2xl"
        >
          Soy Igone, desarrolladora web y diseñadora gráfica freelance.
        </FadeIn>

        <FadeIn
          as="p"
          delay={0.1}
          y={20}
          className="text-base leading-relaxed opacity-70 md:col-span-5 md:col-start-8 md:text-lg"
        >
          Diseño y desarrollo webs y marcas modernas, funcionales y orientadas a
          la conversión. A lo largo de los años he creado y lanzado proyectos
          para clientes de distintos sectores, ayudándoles a destacar, contar su
          historia y conectar con su audiencia más rápido.
        </FadeIn>
      </div>
    </section>
  );
}
