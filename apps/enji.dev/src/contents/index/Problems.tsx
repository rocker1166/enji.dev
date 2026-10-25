import clsx from 'clsx';
import { m } from 'framer-motion';

import { PROBLEMS } from '@/contents/index/data';
import { Label } from '@/contents/index/Manifesto';

const EASE = [0.16, 1, 0.3, 1];

// the result rides the row's own in-view trigger, so it can never miss its cue
const row = {
  hide: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};
const figure = {
  hide: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { delay: 0.15, duration: 0.8, ease: EASE },
  },
};

function Problems() {
  return (
    <section className={clsx('content-wrapper pb-28 md:pb-44')}>
      <Label>(04) — Hard problems, solved</Label>
      <h2
        className={clsx(
          'font-display text-ink max-w-4xl text-[10vw] font-semibold leading-[0.95] tracking-[-0.045em]',
          'md:text-7xl'
        )}
      >
        Problems I fixed in production.{' '}
        <span className={clsx('text-faint font-serif font-normal italic')}>
          With the numbers.
        </span>
      </h2>
      <ol className={clsx('border-line/10 mt-14 border-t')}>
        {PROBLEMS.map(({ project, problem, fix, result, unit }, i) => (
          <m.li
            key={problem}
            variants={row}
            initial="hide"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className={clsx(
              'border-line/10 hover:bg-line/[0.03] group relative grid gap-4 border-b py-8 transition-colors duration-300',
              'md:grid-cols-12 md:gap-8 md:py-10'
            )}
          >
            {/* hover draws an accent hairline across the top of the row */}
            <span
              aria-hidden
              className={clsx(
                'bg-accent-500 absolute inset-x-0 top-[-1px] h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100'
              )}
            />
            <div
              className={clsx(
                'text-faint flex gap-3 font-mono text-[11px] uppercase tracking-[0.16em]',
                'md:col-span-2 md:flex-col md:gap-1'
              )}
            >
              <span className={clsx('text-accent-700 dark:text-accent-500')}>
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{project}</span>
            </div>
            <div className={clsx('md:col-span-6')}>
              <h3
                className={clsx(
                  'font-display text-ink text-2xl font-semibold leading-tight tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-1',
                  'md:text-4xl'
                )}
              >
                {problem}
              </h3>
              <p
                className={clsx(
                  'text-soft mt-3 max-w-xl text-sm leading-relaxed',
                  'md:text-base'
                )}
              >
                {fix}
              </p>
            </div>
            <div
              className={clsx(
                'flex items-baseline gap-3',
                'md:col-span-4 md:flex-col md:items-end md:gap-1 md:text-right'
              )}
            >
              <m.span
                variants={figure}
                className={clsx(
                  'font-display text-accent-600 dark:text-accent-500 origin-left whitespace-nowrap text-4xl font-semibold tracking-[-0.04em]',
                  'md:origin-right md:text-6xl'
                )}
              >
                {result}
              </m.span>
              <span
                className={clsx(
                  'text-faint font-mono text-[11px] uppercase leading-relaxed tracking-[0.12em]'
                )}
              >
                {unit}
              </span>
            </div>
          </m.li>
        ))}
      </ol>
    </section>
  );
}

export default Problems;
