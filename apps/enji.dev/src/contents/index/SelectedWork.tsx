import clsx from 'clsx';
import { m } from 'framer-motion';
import NextImage from 'next/image';
import Link from 'next/link';

import { WORK } from '@/contents/index/data';
import { Label } from '@/contents/index/Manifesto';

interface CardProps {
  index: number;
  project: (typeof WORK)[number];
}

// the first project spans the grid with its image beside the text; the rest
// sit two to a row, image on top, so five products fit in about two screens
function Card({ index, project }: CardProps) {
  const { slug, name, kind, role, period, blurb, points, stack, image, live } =
    project;
  const featured = index === 0;

  return (
    <m.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        delay: featured ? 0 : (index % 2) * 0.08,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={clsx(
        'border-line/10 bg-card group relative grid overflow-hidden rounded-[28px] border',
        featured && 'lg:col-span-2 lg:min-h-[32rem] lg:grid-cols-12'
      )}
    >
      <div
        className={clsx(
          'order-2 flex min-h-0 flex-col p-5 sm:p-8',
          featured && 'lg:order-1 lg:col-span-5 lg:p-10'
        )}
      >
        <div
          className={clsx(
            'text-faint flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.16em]'
          )}
        >
          <span>
            <span className={clsx('text-accent-700 dark:text-accent-500')}>
              ({String(index + 1).padStart(2, '0')})
            </span>{' '}
            {kind}
          </span>
          <span className={clsx('hidden sm:inline')}>{period}</span>
        </div>
        <h3
          className={clsx(
            'font-display text-ink mt-4 text-4xl font-semibold tracking-[-0.045em]',
            featured ? 'md:text-6xl lg:mt-6 lg:text-7xl' : 'md:text-5xl'
          )}
        >
          {name}
        </h3>
        <p
          className={clsx(
            'text-accent-700 dark:text-accent-400 mt-1.5 font-serif text-lg italic',
            'md:text-xl'
          )}
        >
          {role}
        </p>
        {featured && (
          <p
            className={clsx(
              'text-soft mt-4 hidden text-sm leading-relaxed',
              'sm:block md:text-base'
            )}
          >
            {blurb}
          </p>
        )}
        <ul
          className={clsx(
            'divide-line/10 border-line/10 mt-5 divide-y border-y',
            featured && 'lg:mt-auto'
          )}
        >
          {points.map((point) => (
            <li
              key={point}
              className={clsx('text-ink/80 py-2.5 text-sm', 'md:text-[15px]')}
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
            {stack.slice(0, featured ? stack.length : 4).map((tech) => (
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
                'hover:bg-accent-700 dark:hover:bg-accent-600 bg-ink text-page rounded-full px-4 py-2 text-sm font-semibold transition hover:text-white'
              )}
            >
              Case study →
            </Link>
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className={clsx(
                'hover:border-accent-500 hover:text-accent-700 dark:hover:text-accent-400 border-line/15 text-ink rounded-full border px-4 py-2 text-sm font-semibold transition'
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
          'border-line/10 relative order-1 aspect-[16/9] overflow-hidden border-b',
          featured &&
            'lg:order-2 lg:col-span-7 lg:aspect-auto lg:border-b-0 lg:border-l'
        )}
      >
        <NextImage
          src={image}
          alt={`${name} screenshot`}
          fill
          sizes={
            featured
              ? '(max-width: 1024px) 100vw, 60vw'
              : '(max-width: 1024px) 100vw, 45vw'
          }
          className={clsx(
            'object-cover object-left-top transition-transform duration-700 ease-out group-hover:scale-[1.04] motion-reduce:transition-none'
          )}
        />
      </Link>
    </m.article>
  );
}

function SelectedWork() {
  return (
    <section id="work" className={clsx('content-wrapper')}>
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
      <div className={clsx('mt-10 grid gap-4', 'md:gap-6 lg:grid-cols-2')}>
        {WORK.map((project, index) => (
          <Card key={project.slug} index={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default SelectedWork;
