import clsx from 'clsx';
import { m, useInView } from 'framer-motion';
import { useRef } from 'react';

import CountUp from '@/components/CountUp';

import { STATS } from '@/contents/index/data';
import { Label } from '@/contents/index/Manifesto';

function ImpactStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-120px' });

  return (
    <section className={clsx('content-wrapper pb-28 md:pb-40')}>
      <Label>(02) — By the numbers</Label>
      <div
        ref={ref}
        className={clsx(
          'border-line/10 grid grid-cols-2 border-t',
          'md:grid-cols-3'
        )}
      >
        {STATS.map(({ value, suffix, label, decimals }, i) => (
          <m.div
            key={label}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              delay: i * 0.08,
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={clsx(
              'border-line/10 border-b py-8 pr-4',
              'md:py-12 md:pr-8',
              i % 2 === 0 ? 'border-r' : 'border-r-0 pl-4',
              i % 3 === 2 ? 'md:border-r-0' : 'md:border-r',
              i % 3 === 0 ? 'md:pl-0' : 'md:pl-8'
            )}
          >
            <div
              className={clsx(
                'font-display text-ink text-5xl font-semibold tabular-nums tracking-[-0.04em]',
                'md:text-7xl lg:text-8xl'
              )}
            >
              {inView ? <CountUp from={0} to={value} decimals={decimals} /> : 0}
              <span className={clsx('text-accent-500')}>{suffix}</span>
            </div>
            <p
              className={clsx(
                'text-faint mt-3 max-w-[16rem] font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em]'
              )}
            >
              {label}
            </p>
          </m.div>
        ))}
      </div>
    </section>
  );
}

export default ImpactStats;
