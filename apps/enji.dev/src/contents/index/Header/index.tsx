import clsx from 'clsx';
import { m } from 'framer-motion';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';

import useMotionPause, { setMotionPaused } from '@/hooks/useMotionPause';

import track from '@/helpers/track';

import { MAILTO_HELLO, RESUME_URL } from '@/contents/index/data';
import GalleryTunnel from '@/contents/index/Header/GalleryTunnel';
import { introDelay } from '@/contents/index/Intro';

import type { ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1];

const PROOF = [
  '5 products live',
  '8K+ users in 4 days',
  '62K+ customers served',
];

function Line({ children, delay }: { children: ReactNode; delay: number }) {
  return (
    <span className={clsx('block overflow-hidden pb-[0.06em]')}>
      <m.span
        className={clsx('block')}
        initial={{ y: '110%' }}
        animate={{ y: 0 }}
        transition={{ delay, duration: 1, ease: EASE }}
      >
        {children}
      </m.span>
    </span>
  );
}

function Clock() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
      });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time || '--:--'} IST</span>;
}

// who, what and availability, readable at a glance (recruiters scan this row first)
function Meta({ delay }: { delay: number }) {
  return (
    <m.div
      className={clsx(
        'border-line/10 flex items-center justify-between gap-4 border-b pb-4'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      <div className={clsx('flex items-center gap-3')}>
        <NextImage
          src="/assets/images/avatar.jpg"
          alt="Suman Jana"
          width={44}
          height={44}
          priority
          className={clsx('ring-line/10 h-11 w-11 rounded-full ring-1')}
        />
        <div className={clsx('leading-tight')}>
          <div className={clsx('text-ink text-sm font-semibold')}>
            Suman Jana
          </div>
          <div className={clsx('text-soft text-xs')}>
            Full-stack engineer · Co-founder &amp; CTO
          </div>
        </div>
      </div>
      <div
        className={clsx(
          'text-faint hidden flex-col items-center gap-0.5 font-mono text-[11px] uppercase tracking-[0.16em]',
          'md:flex'
        )}
      >
        <span className={clsx('text-ink')}>Kolkata, IN</span>
        <Clock />
      </div>
      <div className={clsx('flex items-center gap-2 text-right text-xs')}>
        <span
          aria-hidden
          className={clsx(
            'bg-accent-500 h-2 w-2 shrink-0 animate-pulse rounded-full'
          )}
        />
        <span className={clsx('text-ink font-medium')}>
          Open to full-time roles
          <span className={clsx('hidden sm:inline')}> &amp; contracts</span>
        </span>
      </div>
    </m.div>
  );
}

function PauseMotion() {
  const paused = useMotionPause();
  return (
    <button
      type="button"
      aria-pressed={paused}
      onClick={() => setMotionPaused(!paused)}
      className={clsx(
        'hover:text-accent-700 dark:hover:text-accent-400 flex min-h-[44px] items-center gap-2 uppercase'
      )}
    >
      <span aria-hidden className={clsx('text-base leading-none')}>
        {paused ? '▶' : '❚❚'}
      </span>
      {paused ? 'Play motion' : 'Pause motion'}
    </button>
  );
}

function Header() {
  const [d] = useState(introDelay);

  return (
    <header
      id="page-header"
      className={clsx(
        'text-ink relative flex min-h-[100svh] flex-col pt-20',
        'md:pt-24'
      )}
    >
      <div className={clsx('content-wrapper w-full')}>
        <Meta delay={d} />
        <h1
          className={clsx(
            'font-display mt-8 text-center text-[16vw] font-semibold leading-[0.9] tracking-[-0.045em]',
            'md:mt-10 md:text-[8.2vw]',
            'xl:text-[7.6rem]'
          )}
        >
          <Line delay={d + 0.05}>I build the</Line>
          <Line delay={d + 0.15}>
            <span
              className={clsx(
                'text-accent-600 dark:text-accent-500 font-serif font-normal italic'
              )}
            >
              whole
            </span>{' '}
            thing.
          </Line>
        </h1>
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 0.4, duration: 0.8, ease: EASE }}
        >
          <p
            className={clsx(
              'text-soft mx-auto mt-5 max-w-xl text-center text-sm leading-relaxed',
              'md:text-base'
            )}
          >
            Product, backend, AI, infra and mobile, designed, shipped and run by
            me. Co-founder &amp; CTO at Deksie and DynoWeb, CTO at Kaafila.
          </p>
          <ul
            className={clsx(
              'text-faint mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 font-mono text-[11px] uppercase tracking-[0.14em]'
            )}
          >
            {PROOF.map((item) => (
              <li key={item} className={clsx('text-ink')}>
                {item}
              </li>
            ))}
          </ul>
          <div className={clsx('mt-6 flex flex-wrap justify-center gap-3')}>
            <a
              href={MAILTO_HELLO}
              onClick={() => track('email_hero')}
              className={clsx(
                'bg-ink text-page inline-flex min-h-[48px] items-center rounded-full px-6 text-sm font-semibold transition',
                'hover:bg-accent-700 dark:hover:bg-accent-500 hover:text-white'
              )}
            >
              Email me
            </a>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => track('resume_hero')}
              className={clsx(
                'border-line/20 text-ink inline-flex min-h-[48px] items-center rounded-full border px-6 text-sm font-semibold transition',
                'hover:border-accent-600 dark:hover:border-accent-500'
              )}
            >
              Resume (PDF)
            </a>
          </div>
        </m.div>
      </div>
      <m.div
        className={clsx('mt-4 flex-1')}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: d + 0.3, duration: 1.4, ease: EASE }}
      >
        <GalleryTunnel />
      </m.div>
      <div
        className={clsx(
          'content-wrapper text-faint flex w-full items-center justify-between pb-4 font-mono text-[11px] uppercase tracking-[0.16em]'
        )}
      >
        <a
          href="#manifesto"
          className={clsx('flex min-h-[44px] items-center gap-3')}
        >
          <span
            className={clsx('bg-line/15 relative h-8 w-px overflow-hidden')}
          >
            <span
              className={clsx(
                'bg-accent-500 absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.6s_ease-in-out_infinite] motion-reduce:animate-none'
              )}
            />
          </span>
          Scroll
        </a>
        <span className={clsx('hidden md:inline')}>
          Hover the tunnel to slow it · the same work is below
        </span>
        <PauseMotion />
      </div>
    </header>
  );
}

export default Header;
