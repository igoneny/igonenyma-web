import { motion, useScroll, useTransform } from 'framer-motion';
import { Fragment, useRef } from 'react';
import type { CSSProperties } from 'react';
import type { MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * Word-by-word scroll-reveal text. Each word fades from 0.2 to 1 opacity based
 * on its position relative to the paragraph's scroll progress. Words are
 * inline-block with real space text nodes between them, so the paragraph wraps
 * and centers normally instead of overflowing on a single line.
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

  const words = text.split(' ');

  return (
    <p ref={container} className={className} style={style}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Fragment key={i}>
            <Word progress={scrollYProgress} range={[start, end]}>
              {word}
            </Word>
            {i < words.length - 1 ? ' ' : ''}
          </Fragment>
        );
      })}
    </p>
  );
}

interface WordProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

function Word({ children, progress, range }: WordProps) {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative inline-block">
      <span className="absolute left-0 top-0 opacity-20">{children}</span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}
