import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef } from 'react';
import type { MotionValue } from 'framer-motion';

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatar?: string;
}

// PLACEHOLDER testimonials — replace with Igone's real reviews
// (name, role/company, quote, rating, optional avatar in /public).
const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Igone es muy responsable y amable, siempre atenta a los requerimientos y buscando que quedara satisfecha con los resultados. Rápida y efectiva. ¡Repetiremos seguro!',
    name: 'Nombre Apellido',
    role: 'Cliente · Proyecto',
    rating: 5,
  },
  {
    quote:
      'Entendió la idea a la primera y la convirtió en una web que conecta con nuestros clientes. El proceso fue claro y muy cómodo.',
    name: 'Nombre Apellido',
    role: 'Cliente · Proyecto',
    rating: 5,
  },
  {
    quote:
      'Diseño cuidado, comunicación constante y entrega en plazo. Recomiendo su trabajo sin dudarlo.',
    name: 'Nombre Apellido',
    role: 'Cliente · Proyecto',
    rating: 5,
  },
];

function ReviewStars({ rating, maxRating = 5 }: { rating: number; maxRating?: number }) {
  const filled = Math.floor(rating);
  const frac = rating - filled;
  const empty = maxRating - filled - (frac > 0 ? 1 : 0);
  const PATH =
    'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z';

  return (
    <div className="flex items-center gap-1 text-black">
      {[...Array(filled)].map((_, i) => (
        <svg key={`f-${i}`} className="size-5" fill="currentColor" viewBox="0 0 20 20">
          <path d={PATH} />
        </svg>
      ))}
      {frac > 0 && (
        <svg className="size-5" fill="currentColor" viewBox="0 0 20 20">
          <defs>
            <linearGradient id="half-star">
              <stop offset={`${frac * 100}%`} stopColor="currentColor" />
              <stop offset={`${frac * 100}%`} stopColor="rgb(209 213 219)" />
            </linearGradient>
          </defs>
          <path d={PATH} fill="url(#half-star)" />
        </svg>
      )}
      {[...Array(Math.max(0, empty))].map((_, i) => (
        <svg key={`e-${i}`} className="size-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
          <path d={PATH} />
        </svg>
      ))}
      <span className="sr-only">{rating}</span>
    </div>
  );
}

interface CardProps {
  testimonial: Testimonial;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

function Card({ testimonial, index, total, progress }: CardProps) {
  // Cards rise from below and stack to the front, one at a time, as you scroll.
  const span = Math.max(1, total - 1);
  const entryStart = index === 0 ? 0 : (index - 1) / span;
  const entryEnd = index === 0 ? 0.0001 : index / span;

  const y = useTransform(progress, [entryStart, entryEnd], [
    index === 0 ? '0%' : '120%',
    '0%',
  ]);
  const rotate = useTransform(progress, [entryStart, entryEnd], [
    index === 0 ? 0 : 6,
    0,
  ]);
  const opacity = useTransform(
    progress,
    [entryStart, entryStart + (entryEnd - entryStart) * 0.35],
    [index === 0 ? 1 : 0, 1]
  );
  const transform = useMotionTemplate`translateY(${y}) rotate(${rotate}deg)`;

  return (
    <div
      className="absolute inset-x-0"
      style={{ top: index * 14, zIndex: index + 1 }}
    >
      <motion.div
        style={{ transform, opacity, backfaceVisibility: 'hidden' }}
        className="flex w-full flex-col items-center justify-center gap-6 rounded-2xl border border-black/10 bg-white p-8 text-center shadow-2xl will-change-transform sm:p-10"
      >
        <ReviewStars rating={testimonial.rating} />
        <p
          className="font-light leading-relaxed text-black"
          style={{ fontSize: 'clamp(1.05rem, 2vw, 1.5rem)' }}
        >
          “{testimonial.quote}”
        </p>
        <div className="flex items-center gap-3">
          {testimonial.avatar && (
            <img
              src={testimonial.avatar}
              alt={testimonial.name}
              className="size-12 rounded-full object-cover"
            />
          )}
          <div className="text-left">
            <p className="font-medium uppercase tracking-wide text-black">
              {testimonial.name}
            </p>
            <p className="text-sm text-black/50">{testimonial.role}</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      id="testimonios"
      className="bg-black px-5 pt-[16vh] sm:px-8 md:px-10"
    >
      <div
        ref={scrollRef}
        className="relative"
        style={{
          perspective: '1000px',
          height: `${TESTIMONIALS.length * 75 + 25}vh`,
        }}
      >
        <div className="sticky top-0 flex h-screen flex-col items-center justify-center gap-10 sm:gap-14">
          <h2
            className="hero-heading text-center font-black uppercase leading-none tracking-tight"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Testimonios
          </h2>
          <div className="relative h-[340px] w-full max-w-[560px]">
            {TESTIMONIALS.map((t, i) => (
              <Card
                key={i}
                testimonial={t}
                index={i}
                total={TESTIMONIALS.length}
                progress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
