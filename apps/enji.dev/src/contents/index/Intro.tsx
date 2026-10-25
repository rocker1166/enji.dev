import clsx from 'clsx';
import { AnimatePresence, m } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const KEY = 'intro-seen';

// a one-per-session curtain: counter to 100, then it lifts off the hero
export function introDelay() {
  if (typeof window === 'undefined') return 1;
  try {
    return sessionStorage.getItem(KEY) ? 0.1 : 1;
  } catch {
    return 0.1;
  }
}

function Intro() {
  const [show, setShow] = useState(false);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let seen = true;
    try {
      seen = !!sessionStorage.getItem(KEY);
    } catch {
      // storage blocked: just skip the intro
    }
    const reduce = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;
    if (seen || reduce) return undefined;

    setShow(true);
    const t0 = performance.now();
    let raf = requestAnimationFrame(function tick(t) {
      const p = Math.min(1, (t - t0) / 650);
      if (countRef.current) {
        countRef.current.textContent = String(
          Math.round(100 * (1 - (1 - p) ** 3))
        ).padStart(3, '0');
      }
      if (p < 1) raf = requestAnimationFrame(tick);
    });
    // a timer, not the frame loop, lifts the curtain: rAF stalls in background tabs
    // mark it seen only once it has played (StrictMode mounts effects twice in dev)
    const finish = () => {
      setShow(false);
      try {
        sessionStorage.setItem(KEY, '1');
      } catch {
        // ignore
      }
    };
    const done = setTimeout(finish, 800);
    // any tap, click or key skips it: nobody should wait for a curtain
    window.addEventListener('pointerdown', finish, { once: true });
    window.addEventListener('keydown', finish, { once: true });
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(done);
      window.removeEventListener('pointerdown', finish);
      window.removeEventListener('keydown', finish);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <m.div
          aria-hidden
          className={clsx(
            'bg-page text-ink fixed inset-0 z-[2000] flex flex-col justify-between p-6',
            'md:p-10'
          )}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div
            className={clsx(
              'text-faint flex justify-between font-mono text-[11px] uppercase tracking-[0.2em]'
            )}
          >
            <span>Suman Jana</span>
            <span>Portfolio · 2026</span>
          </div>
          <div className={clsx('flex items-end justify-between')}>
            <span
              className={clsx(
                'font-display text-[18vw] font-semibold leading-none tracking-tighter',
                'md:text-[12vw]'
              )}
            >
              <span ref={countRef}>000</span>
            </span>
            <span
              className={clsx(
                'text-accent-600 dark:text-accent-500 mb-3 font-serif text-2xl italic',
                'md:text-4xl'
              )}
            >
              loading the work
            </span>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  );
}

export default Intro;
