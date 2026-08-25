import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import { PROJECTS } from '../data/projects';
import { projectUrl } from '../router';

export default function ProjectsSection() {
  return (
    <section id="proyectos" className="px-5 py-20 sm:px-8 md:px-12 md:py-28">
      <AnimatedText
        as="h2"
        text="Proyectos destacados"
        className="display text-ink"
        style={{ fontSize: 'clamp(1.5rem, 10vw, 4rem)' }}
      />

      <div className="mt-12 grid gap-x-6 gap-y-12 md:mt-16 md:grid-cols-2 md:gap-x-8 md:gap-y-16">
        {PROJECTS.map((project, i) => (
          <FadeIn key={project.slug} delay={(i % 2) * 0.08} y={28} className="group">
            <a href={projectUrl(project.slug)} className="block">
              <div className="aspect-[16/10] overflow-hidden rounded-3xl bg-ink/5">
                <img
                  src={project.thumb ?? project.hero}
                  alt={`${project.name} — ${project.category}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-bold sm:text-2xl">{project.name}</h3>
                <span className="text-xs uppercase tracking-[0.15em] opacity-50 sm:text-sm">
                  {project.category}
                </span>
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
