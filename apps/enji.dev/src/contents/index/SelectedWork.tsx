import clsx from 'clsx';
import { m, useScroll, useTransform } from 'framer-motion';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { WORK } from '@/contents/index/data';
import { Label } from '@/contents/index/Manifesto';

import type { MotionValue } from 'framer-motion';

interface CardProps {
  index: number;
  project: (typeof WORK)[number];
  progress: MotionValue<number>;
}

// cards pin one after another; each one shrinks a little as the next lands on it
function Card({ index, project, progress }: CardProps) {
  const { slug, name, kind, role, period, blurb, points, stack, image, live } =
    project;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'start start'],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.25, 1]);
  const scale = useTransform(
    progress,
    [index / WORK.length, 1],
    [1, 1 - (WORK.length - index) * 0.035]
  );

  return (
    <div
      ref={ref}
      className={clsx(
        'sticky top-0 flex h-[100svh] items-center justify-center px-3',
        'md:px-6'
      )}
    >
      <m.article
        style={{ scale, top: `calc(-4vh + ${index * 22}px)` }}
        className={clsx(
          'border-line/10 bg-card relative grid h-[82svh] w-full max-w-[84rem] origin-top grid-rows-[42%_1fr] overflow-hidden rounded-[28px] border',
          'lg:grid-cols-12 lg:grid-rows-1'
        )}
      >
        <div
          className={clsx(
            'order-2 flex min-h-0 flex-col p-5',
            'sm:p-8 lg:order-1 lg:col-span-5 lg:p-10'
          )}
        >
          <div
            className={clsx(
              'text-faint flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]'
            )}
          >
            <span>
              <span className={clsx('text-accent-500')}>
                ({String(index + 1).padStart(2, '0')})
              </span>{' '}
              {kind}
            </span>
            <span className={clsx('hidden sm:inline')}>{period}</span>
          </div>
          <h3
            className={clsx(
              'font-display text-ink mt-4 text-5xl font-semibold tracking-[-0.045em]',
              'md:text-7xl lg:mt-8 lg:text-8xl'
            )}
          >
            {name}
          </h3>
          <p
            className={clsx(
              'text-accent-600 dark:text-accent-400 mt-2 font-serif text-lg italic',
              'md:text-2xl'
            )}
          >
            {role}
          </p>
          <p
            className={clsx(
              'text-soft mt-4 hidden text-sm leading-relaxed',
              'sm:block md:text-base'
            )}
          >
            {blurb}
          </p>
          <ul
            className={clsx(
              'divide-line/10 border-line/10 mt-auto divide-y border-y'
            )}
          >
            {points.map((point) => (
              <li
                key={point}
                className={clsx(
                  'text-ink/80 py-2.5 text-sm',
                  'md:py-3 md:text-[15px]'
                )}
              >
                {point}
              </li>
            ))}
          </ul>
          <div
            className={clsx(
              'mt-5 flex flex-wrap items-center justify-between gap-3'
            )}
          >
            <div className={clsx('hidden flex-wrap gap-1.5 md:flex')}>
              {stack.map((tech) => (
                <span
                  key={tech}
                  className={clsx(
                    'border-line/10 text-soft rounded-full border px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider'
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className={clsx('flex gap-2')}>
              <Link
                href={`/projects/${slug}`}
                className={clsx(
                  'hover:bg-accent-500 bg-ink text-page rounded-full px-4 py-2 text-sm font-semibold transition hover:text-white'
                )}
              >
                Case study →
              </Link>
              <a
                href={live}
                target="_blank"
                rel="noreferrer"
                className={clsx(
                  'hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400 border-line/15 text-ink rounded-full border px-4 py-2 text-sm font-semibold transition'
                )}
              >
                Live ↗
              </a>
            </div>
          </div>
        </div>
        <Link
          href={`/projects/${slug}`}
          aria-label={`${name} case study`}
          className={clsx(
            'border-line/10 relative order-1 overflow-hidden border-b',
            'lg:order-2 lg:col-span-7 lg:border-b-0 lg:border-l'
          )}
        >
          <m.div
            style={{ scale: imageScale }}
            className={clsx('absolute inset-0')}
          >
            <NextImage
              src={image}
              alt={`${name} screenshot`}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={clsx('object-cover object-left-top')}
            />
          </m.div>
          <div
            className={clsx(
              'from-card/60 absolute inset-0 bg-gradient-to-t via-transparent to-transparent'
            )}
          />
        </Link>
      </m.article>
    </div>
  );
}

function SelectedWork() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="work">
      <div className={clsx('content-wrapper')}>
        <Label>(03) — Selected work</Label>
        <h2
          className={clsx(
            'font-display text-ink text-[11vw] font-semibold leading-[0.95] tracking-[-0.045em]',
            'md:text-8xl'
          )}
        >
          Five products.{' '}
          <span className={clsx('text-faint font-serif font-normal italic')}>
            All in production.
          </span>
        </h2>
      </div>
      <div ref={ref} className={clsx('relative mt-6')}>
        {WORK.map((project, index) => (
          <Card
            key={project.slug}
            index={index}
            project={project}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;
