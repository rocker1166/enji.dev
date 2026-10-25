import clsx from 'clsx';
import { m } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import GalleryTunnel from '@/contents/index/Header/GalleryTunnel';
import { introDelay } from '@/contents/index/Intro';

import type { ReactNode } from 'react';

const EASE = [0.16, 1, 0.3, 1];

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

function Meta({ delay }: { delay: number }) {
  const cell = clsx('flex flex-col gap-1');
  return (
    <m.div
      className={clsx(
        'border-line/10 text-faint grid grid-cols-2 gap-4 border-b pb-4 font-mono text-[11px] uppercase tracking-[0.16em]',
        'md:grid-cols-3'
      )}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.8 }}
    >
      <div className={cell}>
        <span className={clsx('text-ink')}>Suman Jana</span>
        <span>Full-stack engineer · co-founder</span>
      </div>
      <div className={clsx(cell, 'hidden md:flex')}>
        <span className={clsx('text-ink')}>Kolkata, IN</span>
        <Clock />
      </div>
      <div className={clsx(cell, 'items-end text-right')}>
        <span className={clsx('text-ink flex items-center gap-2')}>
          <span
            className={clsx(
              'bg-accent-500 h-1.5 w-1.5 animate-pulse rounded-full'
            )}
          />
          <span className={clsx('whitespace-nowrap md:hidden')}>
            Open to work
          </span>
          <span className={clsx('hidden whitespace-nowrap md:inline')}>
            Open to hard problems
          </span>
        </span>
        <Link
          href="/work/contact"
          className={clsx('hover:text-accent-600 dark:hover:text-accent-400')}
        >
          Say hello →
        </Link>
      </div>
    </m.div>
  );
}

function Header() {
  const [d] = useState(introDelay);

  return (
    <header
      id="page-header"
      className={clsx(
        'text-ink relative flex min-h-[100svh] flex-col pt-24',
        'md:pt-28'
      )}
    >
      <div className={clsx('content-wrapper w-full')}>
        <Meta delay={d} />
        <h1
          className={clsx(
            'font-display mt-10 text-center text-[16vw] font-semibold leading-[0.9] tracking-[-0.045em]',
            'md:mt-12 md:text-[8.6vw]',
            'xl:text-[8rem]'
          )}
        >
          <Line delay={d + 0.05}>I build the</Line>
          <Line delay={d + 0.15}>
            <span
              className={clsx('text-accent-500 font-serif font-normal italic')}
            >
              whole
            </span>{' '}
            thing.
          </Line>
        </h1>
        <m.p
          className={clsx(
            'text-soft mx-auto mt-6 max-w-xl text-center text-sm leading-relaxed',
            'md:text-base'
          )}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: d + 0.45, duration: 0.8, ease: EASE }}
        >
          Product, backend, AI, infra and mobile, designed, shipped and run by
          me. Co-founder &amp; CTO at Deksie and DynoWeb, CTO at Kaafila.
        </m.p>
      </div>
      <m.div
        className={clsx('mt-6 flex-1 md:mt-4')}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: d + 0.3, duration: 1.4, ease: EASE }}
      >
        <GalleryTunnel />
      </m.div>
      <div
        className={clsx(
          'content-wrapper text-faint flex w-full items-center justify-between pb-6 font-mono text-[11px] uppercase tracking-[0.16em]'
        )}
      >
        <a href="#manifesto" className={clsx('flex items-center gap-3')}>
          <span
            className={clsx('bg-line/15 relative h-8 w-px overflow-hidden')}
          >
            <span
              className={clsx(
                'bg-accent-500 absolute inset-x-0 top-0 h-1/2 animate-[scrollcue_1.6s_ease-in-out_infinite]'
              )}
            />
          </span>
          Scroll
        </a>
        <span className={clsx('hidden sm:inline')}>
          Hover the tunnel to slow it · click a screen
        </span>
        <span>(5) products live</span>
      </div>
    </header>
  );
}

export default Header;
