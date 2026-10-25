import clsx from 'clsx';
import { m } from 'framer-motion';

import { CAPABILITIES } from '@/contents/index/data';
import { Label } from '@/contents/index/Manifesto';

function Capabilities() {
  return (
    <section className={clsx('content-wrapper pb-24 md:pb-32')}>
      <Label>(05) — Everything in-house</Label>
      <h2
        className={clsx(
          'font-display text-ink max-w-4xl text-[10vw] font-semibold leading-[0.95] tracking-[-0.045em]',
          'md:text-7xl'
        )}
      >
        No hand-offs.{' '}
        <span
          className={clsx(
            'text-accent-600 dark:text-accent-500 font-serif font-normal italic'
          )}
        >
          One person,
        </span>{' '}
        every layer.
      </h2>
      <ul className={clsx('border-line/10 mt-10 border-t')}>
        {CAPABILITIES.map(({ title, proof, items }, i) => (
          <m.li
            key={title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{
              delay: i * 0.06,
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={clsx(
              'border-line/10 hover:bg-line/[0.03] group grid gap-3 border-b py-5 transition-colors duration-300',
              'md:grid-cols-12 md:items-baseline md:gap-6 md:py-5'
            )}
          >
            <span
              className={clsx(
                'text-faint font-mono text-[11px] tracking-[0.16em] md:col-span-1'
              )}
            >
              0{i + 1}
            </span>
            <h3
              className={clsx(
                'font-display text-ink text-3xl font-semibold tracking-[-0.03em] transition-transform duration-300 group-hover:translate-x-2',
                'md:col-span-4 md:text-4xl'
              )}
            >
              {title}
            </h3>
            <p className={clsx('text-soft text-sm md:col-span-3')}>{proof}</p>
            <ul
              className={clsx(
                'text-faint flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.12em]',
                'md:col-span-4 md:flex-col md:items-end'
              )}
            >
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </m.li>
        ))}
      </ul>
    </section>
  );
}

export default Capabilities;
