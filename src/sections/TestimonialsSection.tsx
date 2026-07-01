import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

interface Testimonial {
  quote: string;
  name: string;
  company?: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Igone es muy responsable y amable, siempre estuvo atenta a mis requerimientos y buscaba que yo estuviese satisfecha con los resultados. Aparte de que fue rápida y efectiva. ¡Trabajaremos de nuevo seguro! ¡Gracias!',
    name: 'Alejandra Espitia',
    company: 'Agrayarn',
  },
  {
    quote:
      'El proyecto superó nuestras expectativas. Realmente recomendamos su trabajo, además de valorar y agradecer el compromiso con nuestro proyecto y el aporte brindado.',
    name: 'Anónimo',
  },
  {
    quote:
      'Igone es muy resolutiva y sabe captar lo que buscas. Ha sido muy fácil trabajar con ella.',
    name: 'Laura Aldecoa',
    company: 'Nutrialde',
  },
  {
    quote:
      'Impecable el trabajo de Igone, muy atenta y excelente profesional.',
    name: 'Marcelo Ruiz',
    company: 'Condrys',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="px-5 py-20 sm:px-8 md:px-12 md:py-28">
      <AnimatedText
        as="h2"
        text="Testimonios"
        className="display text-ink"
        style={{ fontSize: 'clamp(1.5rem, 10vw, 4rem)' }}
      />

      <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 lg:grid-cols-4">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn
            key={t.name}
            delay={i * 0.08}
            y={28}
            className="flex flex-col gap-6 rounded-3xl bg-ink p-6 text-bone md:p-7"
          >
            <span className="text-3xl font-black leading-none">”</span>
            <p className="flex-1 text-[0.95rem] leading-relaxed text-bone/90">
              {t.quote}
            </p>
            <div>
              <p className="font-bold">{t.name}</p>
              {t.company && (
                <p className="text-sm uppercase tracking-wide text-bone/50">
                  {t.company}
                </p>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
