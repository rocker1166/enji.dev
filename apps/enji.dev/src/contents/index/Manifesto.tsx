import clsx from 'clsx';
import { m, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { MANIFESTO } from '@/contents/index/data';

import type { MotionValue } from 'framer-motion';

export function Label({ children }: { children: string }) {
  return (
    <p
      className={clsx(
        'text-faint mb-8 font-mono text-[11px] uppercase tracking-[0.2em]'
      )}
    >
      {children}
    </p>
  );
}

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <m.span
      style={{ opacity }}
      className={clsx(
        'mr-[0.24em] inline-block',
        /\d/.test(word) && 'text-accent-600 dark:text-accent-500'
      )}
    >
      {word}
    </m.span>
  );
}

// each word lights up as it scrolls past, so the paragraph reads itself
function Manifesto() {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.45'],
  });
  const words = MANIFESTO.split(' ');

  return (
    <section id="manifesto" className={clsx('content-wrapper py-28 md:py-44')}>
      <Label>(01) — Who builds this</Label>
      <p
        ref={ref}
        className={clsx(
          'font-display text-ink text-[8.4vw] font-medium leading-[1.06] tracking-[-0.03em]',
          'md:text-6xl lg:text-7xl'
        )}
      >
        {words.map((word, i) => (
          <Word
            // eslint-disable-next-line react/no-array-index-key -- words can repeat
            key={`${word}-${i}`}
            word={word}
            progress={scrollYProgress}
            range={[i / words.length, (i + 1) / words.length]}
          />
        ))}
      </p>
    </section>
  );
}

export default Manifesto;
