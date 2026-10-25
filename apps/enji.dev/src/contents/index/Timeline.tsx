import clsx from 'clsx';
import { m, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

import { TIMELINE } from '@/contents/index/data';
import { Label } from '@/contents/index/Manifesto';

// vertical scroll drives a horizontal ride through the year
function Timeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;
    const measure = () =>
      setDistance(Math.max(0, track.scrollWidth - window.innerWidth));
    measure();
    const resize = new ResizeObserver(measure);
    resize.observe(track);
    window.addEventListener('resize', measure);
    return () => {
      resize.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <section ref={sectionRef} className={clsx('relative h-[360vh]')}>
      <div
        className={clsx(
          'sticky top-0 flex h-[100svh] flex-col justify-center overflow-hidden'
        )}
      >
        <div className={clsx('content-wrapper w-full')}>
          <Label>(05) — The last 12 months</Label>
          <h2
            className={clsx(
              'font-display text-ink text-[10vw] font-semibold leading-[0.95] tracking-[-0.045em]',
              'md:text-7xl'
            )}
          >
            A year,{' '}
            <span className={clsx('text-faint font-serif font-normal italic')}>
              month by month.
            </span>
          </h2>
        </div>
        <m.div
          ref={trackRef}
          style={{ x }}
          className={clsx(
            'mt-10 flex w-max gap-4 px-4',
            'md:mt-14 md:gap-6 md:px-[8vw]'
          )}
        >
          {TIMELINE.map(({ when, title, body }, i) => (
            <article
              key={title}
              className={clsx(
                'bg-card flex h-[46svh] w-[78vw] flex-col justify-between rounded-[24px] border p-6',
                'sm:w-[400px] md:h-[44vh] md:p-8',
                i === TIMELINE.length - 2
                  ? 'border-accent-500/50'
                  : 'border-line/10'
              )}
            >
              <div>
                <div
                  className={clsx(
                    'font-display text-6xl font-semibold tracking-[-0.05em] text-transparent',
                    'md:text-7xl'
                  )}
                  style={{ WebkitTextStroke: '1px rgb(var(--c-line) / 0.35)' }}
                >
                  {when.split(' ')[0]}
                </div>
                <div
                  className={clsx(
                    'text-accent-500 mt-1 font-mono text-[11px] uppercase tracking-[0.2em]'
                  )}
                >
                  {when}
                </div>
              </div>
              <div>
                <h3
                  className={clsx(
                    'font-display text-ink text-2xl font-semibold tracking-[-0.02em]',
                    'md:text-3xl'
                  )}
                >
                  {title}
                </h3>
                <p className={clsx('text-soft mt-3 text-sm leading-relaxed')}>
                  {body}
                </p>
              </div>
            </article>
          ))}
        </m.div>
        <div className={clsx('content-wrapper mt-10 w-full')}>
          <div className={clsx('bg-line/10 h-px w-full')}>
            <m.div
              style={{ scaleX: scrollYProgress }}
              className={clsx('bg-accent-500 h-px origin-left')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
