import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { MotionValue } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  link: string;
  image: string;
}

const PROJECTS: Project[] = [
  { number: '01', category: 'Web', name: 'Buy From Argentina', link: 'https://buyfromargentina.com/', image: '/buyfrom-03.png' },
  { number: '02', category: 'Web', name: 'Digital Developers', link: 'https://digitaldevelopers.es/', image: '/digitaldev-02.png' },
  { number: '03', category: 'Web', name: 'Pro Active Trainer', link: 'https://proactivetrainer.com/', image: '/Proactivetrainer-portada.png' },
  { number: '04', category: 'Centro de nutrición · Web', name: 'Nutrialde', link: 'https://www.nutrialde.com/', image: '/nutrialde-web.png' },
];

const RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

interface CardProps {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Card({ project, index, total, progress }: CardProps) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const range: [number, number] = [index * (1 / total), 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-24 flex h-[85vh] items-center justify-center md:top-32">
      <motion.div
        style={{ scale, top: `${index * 28}px` }}
        className={`relative w-full border-2 border-[#F2E7D3] p-4 sm:p-6 md:p-8 ${RADIUS}`}
      >
        <div
          className={`absolute inset-0 -z-10 ${RADIUS}`}
          style={{ background: '#1A120B' }}
        />

        {/* Top row */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-4 sm:mb-6 md:mb-8">
          <div className="flex items-center gap-4 sm:gap-6 md:gap-8">
            <span
              className="font-black leading-none text-[#F2E7D3]"
              style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-sm font-light uppercase tracking-widest text-[#F2E7D3]/60 sm:text-base">
                {project.category}
              </span>
              <span
                className="font-medium uppercase text-[#F2E7D3]"
                style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <LiveProjectButton href={project.link} />
        </div>

        {/* Project mockup */}
        <img
          src={project.image}
          alt={`${project.name} — mockup`}
          loading="lazy"
          className={`w-full object-cover ${RADIUS}`}
          style={{ height: 'clamp(220px, 36vw, 480px)' }}
        />
      </motion.div>
    </div>
  );
}

export default function ProjectsSection() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="proyectos"
      ref={container}
      className="relative z-10 -mt-10 rounded-t-[40px] px-5 py-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
      style={{ background: '#1A120B' }}
    >
      <h2
        className="hero-heading mb-12 text-center font-black uppercase leading-none tracking-tight sm:mb-16 md:mb-20"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Proyectos
      </h2>

      <div className="mx-auto max-w-6xl">
        {PROJECTS.map((project, index) => (
          <Card
            key={project.number}
            project={project}
            index={index}
            total={PROJECTS.length}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}
