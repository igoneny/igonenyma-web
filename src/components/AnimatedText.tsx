import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import type { CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Character-by-character scroll-reveal text. Each character animates its
 * opacity from 0.2 to 1 based on its position in the string relative to the
 * paragraph's scroll progress.
 */
export default function AnimatedText({
  text,
  className,
  style,
}: AnimatedTextProps) {
  const container = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start 0.8', 'end 0.2'],
  });

  const chars = text.split('');

  return (
    <p ref={container} className={className} style={style}>
      {chars.map((char, i) => {
        const start = i / chars.length;
        const end = start + 1 / chars.length;
        return (
          <Char key={i} progress={scrollYProgress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </p>
  );
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Char({ children, progress, range }: CharProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  // Preserve spaces so word breaks survive the per-character split.
  const display = children === ' ' ? ' ' : children;

  return (
    <span className="relative">
      <span className="absolute left-0 top-0 opacity-20">{display}</span>
      <motion.span style={{ opacity }}>{display}</motion.span>
    </span>
  );
}
