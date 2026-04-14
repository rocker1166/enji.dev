import clsx from 'clsx';
import Link from 'next/link';

import { ChevronRightIcon } from '@/components/Icons';

import { formatDateRelative } from '@/helpers/post';

import type { TProjectFrontMatter } from '@/types';

type ProjectPreviewProps = TProjectFrontMatter & {
  slug: string;
};

function ProjectPreview({
  title,
  description,
  caption,
  date,
  slug,
  tags,
}: ProjectPreviewProps) {
  return (
    <article>
      <Link
        key={slug}
        href={`/projects/${slug}`}
        className={clsx(
          'border-divider-light group relative block overflow-hidden rounded-2xl border p-4',
          'md:p-6',
          'dark:border-divider-dark',
          'hover:border-accent-400 dark:hover:border-accent-500 transition-colors'
        )}
      >
        <div
          className={clsx(
            'mb-2 flex items-center gap-2 text-xs text-slate-500',
            'dark:text-slate-400'
          )}
        >
          {caption && (
            <>
              <span className={clsx('font-semibold')}>{caption}</span>
              <span>&middot;</span>
            </>
          )}
          <time dateTime={date} className={clsx('first-letter:uppercase')}>
            {formatDateRelative(date)}
          </time>
        </div>
        <div className={clsx('mb-2')}>
          <h2
            className={clsx(
              'text-xl font-extrabold text-slate-700',
              'md:text-2xl',
              'dark:text-slate-300'
            )}
          >
            {title}
          </h2>
        </div>
        <p
          className={clsx(
            'mb-4 block leading-relaxed text-slate-600',
            'dark:text-slate-400'
          )}
        >
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className={clsx('mb-4 flex flex-wrap gap-2')}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  'rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-semibold text-slate-600',
                  'dark:bg-slate-800 dark:text-slate-400'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <div
          className={clsx(
            'text-accent-600 flex items-center gap-1 text-sm font-semibold',
            'dark:text-accent-400'
          )}
        >
          read more{' '}
          <ChevronRightIcon className="group-hover:animate-bounce-x mt-1 h-3 w-3 transition" />
        </div>
      </Link>
    </article>
  );
}

export default ProjectPreview;
