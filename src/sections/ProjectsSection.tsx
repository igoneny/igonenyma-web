import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';
import LiveProjectButton from '../components/LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  link: string;
  palette: [string, string];
}

// Featured projects. Each image slot is a styled placeholder for now — drop
// your real mockups in public/projects/ and replace the <Placeholder> blocks
// with <img src="/projects/..."> using the same className.
const PROJECTS: Project[] = [
  { number: '01', category: 'Web', name: 'Buy From Argentina', link: 'https://buyfromargentina.com/', palette: ['#6B3A1F', '#F4A460'] },
  { number: '02', category: 'Web', name: 'Digital Developers', link: 'https://digitaldevelopers.es/', palette: ['#2A1408', '#C9622E'] },
  { number: '03', category: 'Web', name: 'Pro Active Trainer', link: 'https://proactivetrainer.com/', palette: ['#5B2A14', '#E35336'] },
  { number: '04', category: 'Centro de nutrición · Web', name: 'Nutrialde', link: 'https://www.nutrialde.com/', palette: ['#3A2410', '#A0522D'] },
];

const IMG_RADIUS = 'rounded-[40px] sm:rounded-[50px] md:rounded-[60px]';

function Placeholder({
  palette,
  label,
  style,
  className,
}: {
  palette: [string, string];
  label: string;
  style?: CSSProperties;
  className?: string;
}) {
  return (
    <div
      className={`flex items-end p-5 ${IMG_RADIUS} ${className ?? ''}`}
      style={{
        background: `linear-gradient(135deg, ${palette[0]} 0%, ${palette[1]} 100%)`,
        ...style,
      }}
    >
      <span className="text-xs font-light uppercase tracking-widest text-white/60">
        {label}
      </span>
    </div>
  );
}

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
        className="relative w-full rounded-[40px] border-2 border-[#F2E7D3] p-4 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        <div
          className="absolute inset-0 -z-10 rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
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

        {/* Bottom row — image grid */}
        <div className="flex gap-3 sm:gap-4 md:gap-5">
          <div className="flex w-2/5 flex-col gap-3 sm:gap-4 md:gap-5">
            <Placeholder
              palette={project.palette}
              label={`${project.name} · 01`}
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            />
            <Placeholder
              palette={[project.palette[1], project.palette[0]]}
              label={`${project.name} · 02`}
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            />
          </div>
          <div className="w-3/5">
            <Placeholder
              palette={project.palette}
              label={`${project.name} · 03`}
              className="h-full"
            />
          </div>
        </div>
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
