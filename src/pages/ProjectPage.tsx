import FadeIn from '../components/FadeIn';
import ContactSection from '../sections/ContactSection';
import type { Project } from '../data/projects';

function Meta({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.12em]">{label}</p>
      <p className="mt-1 font-mono text-sm uppercase tracking-wide opacity-60">
        {value}
      </p>
    </div>
  );
}

export default function ProjectPage({ project }: { project: Project }) {
  return (
    <>
      {/* Top bar */}
      <header className="flex items-center justify-between px-5 py-5 sm:px-8 md:px-12">
        <a href="#/" className="text-sm font-semibold uppercase tracking-[0.15em]">
          Igone Nogales
        </a>
        <a
          href="#/"
          className="text-sm font-medium uppercase tracking-[0.12em] opacity-60 transition-opacity hover:opacity-100"
        >
          ← Volver
        </a>
      </header>

      {/* Hero (dark rounded block) */}
      <section className="px-3 sm:px-4">
        <FadeIn
          y={20}
          className="rounded-[28px] bg-ink px-5 pb-5 pt-10 text-bone sm:rounded-[40px] sm:px-8 sm:pt-14 md:px-12 md:pt-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-bone/50 sm:text-sm">
            {project.category}
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-[0.95] sm:text-6xl md:text-7xl">
            {project.name}
          </h1>
          <div className="mt-8 overflow-hidden rounded-[20px] sm:mt-10 sm:rounded-[28px]">
            <img
              src={project.hero}
              alt={project.name}
              className="aspect-[16/9] w-full object-cover"
            />
          </div>
        </FadeIn>
      </section>

      {/* Description + meta */}
      <section className="px-5 py-16 sm:px-8 md:px-12 md:py-24">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <FadeIn y={20}>
            <h2 className="text-lg font-bold uppercase tracking-wide">
              Descripción del proyecto
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed opacity-70">
              {project.description}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-bone transition-transform hover:scale-105"
              >
                Ver web en vivo ↗
              </a>
            )}
          </FadeIn>

          <FadeIn y={20} delay={0.1} className="grid grid-cols-2 gap-x-8 gap-y-8">
            <Meta label="Publicado" value={project.meta.published} />
            <Meta label="Servicios" value={project.meta.services} />
            <Meta label="Sector" value={project.meta.sector} />
            <Meta label="Cliente" value={project.meta.client} />
          </FadeIn>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 0 && (
      <section className="px-3 pb-16 sm:px-4 md:pb-24">
        <div className="grid gap-3 sm:gap-4 md:grid-cols-2">
          {project.gallery.map((item, i) => (
            <FadeIn
              key={i}
              y={28}
              className={item.wide ? 'md:col-span-2' : ''}
            >
              {item.src ? (
                <img
                  src={item.src}
                  alt={`${project.name} ${i + 1}`}
                  loading="lazy"
                  className={`w-full rounded-[20px] object-cover sm:rounded-[28px] ${
                    item.wide ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                />
              ) : (
                <div
                  className={`flex items-center justify-center rounded-[20px] border border-ink/10 bg-ink/5 sm:rounded-[28px] ${
                    item.wide ? 'aspect-[16/9]' : 'aspect-[4/3]'
                  }`}
                >
                  <span className="text-xs uppercase tracking-[0.2em] opacity-40">
                    Imagen pendiente
                  </span>
                </div>
              )}
            </FadeIn>
          ))}
        </div>
      </section>
      )}

      <ContactSection />
    </>
  );
}
