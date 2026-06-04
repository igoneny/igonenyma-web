import FadeIn from '../components/FadeIn';

interface Service {
  number: string;
  name: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    number: '01',
    name: 'Diseño y desarrollo web',
    description:
      'Páginas web a medida, funcionales y atractivas, adaptadas a tu marca y pensadas para conectar con tu audiencia desde el primer clic.',
  },
  {
    number: '02',
    name: 'Diseño gráfico y packaging',
    description:
      'Identidad visual, cartelería, papelería y packaging: doy forma a materiales gráficos que acompañan tu comunicación y hacen único tu producto.',
  },
  {
    number: '03',
    name: 'Automatizaciones',
    description:
      'Flujos y procesos automatizados que te ahorran tiempo y conectan tus herramientas para que tu negocio funcione casi solo.',
  },
  {
    number: '04',
    name: 'IA para contenido audiovisual',
    description:
      'Creación de contenido audiovisual potenciado con IA: imágenes, vídeo y recursos que dan energía y narrativa a tu marca.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="rounded-t-[40px] px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
      style={{ background: '#F5F5DC' }}
    >
      <h2
        className="mb-16 text-center font-black uppercase sm:mb-20 md:mb-28"
        style={{ color: '#2A1810', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Servicios
      </h2>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 py-8 sm:gap-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(42, 24, 16, 0.18)',
              ...(i === SERVICES.length - 1
                ? { borderBottom: '1px solid rgba(42, 24, 16, 0.18)' }
                : {}),
            }}
          >
            <span
              className="shrink-0 font-black leading-none"
              style={{ color: '#2A1810', fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-2 pt-1 sm:gap-3 sm:pt-2 md:pt-4">
              <h3
                className="font-medium uppercase"
                style={{ color: '#2A1810', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="max-w-2xl font-light leading-relaxed"
                style={{
                  color: '#2A1810',
                  opacity: 0.65,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
