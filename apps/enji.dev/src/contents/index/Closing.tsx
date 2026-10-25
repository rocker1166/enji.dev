import clsx from 'clsx';
import { m, useMotionValue, useSpring } from 'framer-motion';
import Link from 'next/link';

import { BADGES } from '@/contents/index/data';
import { Label } from '@/contents/index/Manifesto';

const WORDS = ['Ship', 'Scale', 'Solve', 'Own it'];

function Band() {
  return (
    <div
      aria-hidden
      className={clsx('border-line/10 overflow-hidden border-y py-6')}
    >
      {/* doubled list + margin (not gap) so the -50% loop lands exactly on the seam */}
      <div
        className={clsx(
          'flex w-max animate-[marquee_28s_linear_infinite] motion-reduce:animate-none'
        )}
      >
        {[...WORDS, ...WORDS, ...WORDS, ...WORDS].map((word, i) => (
          <span
            // eslint-disable-next-line react/no-array-index-key -- repeated words
            key={`${word}-${i}`}
            className={clsx(
              'font-display text-ink mr-[4vw] flex items-center gap-[4vw] text-[13vw] font-semibold uppercase leading-none tracking-[-0.05em]',
              'md:text-[9vw]'
            )}
          >
            {word}
            <span className={clsx('text-accent-500 text-[0.5em]')}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function Badges() {
  return (
    <div className={clsx('overflow-hidden py-6')}>
      <ul
        className={clsx(
          'flex w-max animate-[marquee_70s_linear_infinite_reverse] hover:[animation-play-state:paused]',
          'motion-reduce:animate-none'
        )}
      >
        {[...BADGES, ...BADGES].map((badge, i) => (
          <li
            // eslint-disable-next-line react/no-array-index-key -- the doubled list repeats labels
            key={`${badge}-${i}`}
            aria-hidden={i >= BADGES.length}
            className={clsx(
              'border-line/10 text-soft mr-3 whitespace-nowrap rounded-full border px-4 py-2 font-mono text-[11px] uppercase tracking-[0.12em]'
            )}
          >
            {badge}
          </li>
        ))}
      </ul>
    </div>
  );
}

// the button leans toward the cursor
function Magnetic() {
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18 });

  return (
    <m.div
      style={{ x, y }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.35);
        y.set((e.clientY - r.top - r.height / 2) * 0.35);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={clsx('inline-block')}
    >
      <Link
        href="/work/contact"
        className={clsx(
          'bg-accent-500 font-display hover:bg-accent-400 flex h-36 w-36 items-center justify-center rounded-full text-center text-lg font-semibold leading-tight text-white transition-colors',
          'md:h-44 md:w-44 md:text-xl'
        )}
      >
        Start a<br />
        project →
      </Link>
    </m.div>
  );
}

const LINKS = [
  { label: 'Email', href: 'mailto:sumanjanaled@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/rocker1166' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/suman-jana-dev' },
  { label: 'Experience', href: '/work/experience' },
];

function Closing() {
  return (
    <section className={clsx('pt-10')}>
      <Band />
      <Badges />
      <div className={clsx('content-wrapper pb-4 pt-24 md:pt-36')}>
        <Label>(06) — Next</Label>
        <div
          className={clsx(
            'flex flex-col gap-10 md:flex-row md:items-end md:justify-between'
          )}
        >
          <h2
            className={clsx(
              'font-display text-ink text-[12vw] font-semibold leading-[0.92] tracking-[-0.05em]',
              'md:text-8xl lg:text-9xl'
            )}
          >
            Got something hard?
            <span
              className={clsx(
                'text-accent-500 block font-serif font-normal italic'
              )}
            >
              Let&apos;s build it.
            </span>
          </h2>
          <Magnetic />
        </div>
        <ul
          className={clsx(
            'border-line/10 text-soft mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t pt-6 font-mono text-[11px] uppercase tracking-[0.16em]'
          )}
        >
          {LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={clsx(
                  'hover:text-accent-600 dark:hover:text-accent-400 transition'
                )}
                {...(href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                {label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Closing;
