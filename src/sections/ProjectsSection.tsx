import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';

interface Project {
  name: string;
  category: string;
  image?: string;
  link?: string;
}

const PROJECTS: Project[] = [
  { name: 'ProActive Trainer', category: 'Web', image: '/Proactivetrainer-portada.png', link: 'https://proactivetrainer.com/' },
  { name: 'Nutrialde', category: 'Identidad & Web', image: '/nutrialde-web.png', link: 'https://www.nutrialde.com/' },
  { name: 'Digital Developers', category: 'Identidad & Web', image: '/digitaldev-02.png', link: 'https://digitaldevelopers.es/' },
  { name: 'Buy from Argentina', category: 'Identidad & Web', image: '/buyfrom-03.png', link: 'https://buyfromargentina.com/' },
  { name: 'Chetto', category: 'Packaging', image: '/chetto-cajas-01.png' },
  { name: 'Chetto', category: 'Stands' }, // image pending upload
  { name: 'Condrys', category: 'Identidad & Packaging', image: '/condrys-01.png' },
];

function Card({ project, index }: { project: Project; index: number }) {
  const Wrapper = project.link ? 'a' : 'div';
  const wrapperProps = project.link
    ? { href: project.link, target: '_blank', rel: 'noreferrer' }
    : {};

  return (
    <FadeIn delay={(index % 2) * 0.08} y={28} className="group">
      <Wrapper {...wrapperProps} className="block">
        <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-ink/5">
          {project.image ? (
            <img
              src={project.image}
              alt={`${project.name} — ${project.category}`}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center border border-ink/10">
              <span className="text-xs uppercase tracking-[0.2em] opacity-40">
                Imagen pendiente
              </span>
            </div>
          )}
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="text-xl font-bold sm:text-2xl">{project.name}</h3>
          <span className="text-xs uppercase tracking-[0.15em] opacity-50 sm:text-sm">
            {project.category}
          </span>
        </div>
      </Wrapper>
    </FadeIn>
  );
}

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="px-5 py-20 sm:px-8 md:px-12 md:py-28">
      <AnimatedText
        text="Featured Projects"
        className="display text-ink"
        style={{ fontSize: 'clamp(2.6rem, 10vw, 9rem)' }}
      />

      <div className="mt-12 grid gap-x-6 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
        {PROJECTS.map((project, i) => (
          <Card key={`${project.name}-${i}`} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
