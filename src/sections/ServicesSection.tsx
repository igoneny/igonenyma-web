import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

interface Service {
  name: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    name: 'Web',
    description:
      'Creo páginas web a medida, funcionales y atractivas, adaptadas a tu marca y pensadas para conectar con tu audiencia desde el primer clic.',
  },
  {
    name: 'Diseño gráfico',
    description:
      'Menús para restaurantes, cartelería o papelería: doy forma a todo tipo de materiales gráficos que acompañan a tu comunicación visual.',
  },
  {
    name: 'Identidad de marca',
    description:
      'Diseño identidades visuales —no solo un logo— que transmiten la esencia de tu proyecto.',
  },
  {
    name: 'IA y automatizaciones',
    description:
      'Pongo la inteligencia artificial y la automatización a trabajar para ti: contenido audiovisual con IA, procesos que conectan tus herramientas y tareas repetitivas que se resuelven solas, para que ganes tiempo.',
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="px-5 py-20 sm:px-8 md:px-12 md:py-28">
      <AnimatedText
        text="Services"
        className="display text-ink"
        style={{ fontSize: 'clamp(3rem, 12vw, 11rem)' }}
      />

      <div className="mt-10 border-t border-ink/15 md:mt-16">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.name}
            delay={i * 0.06}
            y={20}
            className="grid items-baseline gap-3 border-b border-ink/15 py-7 md:grid-cols-[0.9fr_1.1fr] md:gap-10 md:py-9"
          >
            <h3 className="text-2xl font-bold leading-none sm:text-3xl md:text-4xl">
              {service.name}
            </h3>
            <p className="max-w-xl text-base leading-relaxed opacity-70 md:text-lg">
              {service.description}
            </p>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
