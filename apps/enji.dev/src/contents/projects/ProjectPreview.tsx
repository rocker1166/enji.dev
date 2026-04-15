import clsx from 'clsx';
import Link from 'next/link';

import { ChevronRightIcon } from '@/components/Icons';

import { formatDateRelative } from '@/helpers/post';

import type { TProjectFrontMatter } from '@/types';

type ProjectPreviewProps = TProjectFrontMatter & {
  slug: string;
  featured?: boolean;
};

function ProjectPreview({
  title,
  description,
  caption,
  date,
  slug,
  tags,
  featured = false,
}: ProjectPreviewProps) {
  return (
    <article>
      <Link
        key={slug}
        href={`/projects/${slug}`}
        className={clsx(
          'group relative block overflow-hidden bg-gradient-to-t',
          'sm:rounded-2xl',
          featured
            ? [
                'border-divider-light',
                'sm:border sm:p-4 md:p-6',
                'dark:border-divider-dark',
              ]
            : ['sm:p-4 md:p-6']
        )}
      >
        <div
          className={clsx(
            'mb-2 flex items-center gap-2 text-xs text-slate-500',
            'md:mb-1 dark:text-slate-400'
          )}
        >
          {caption && (
            <>
              <span
                className={clsx(
                  'font-bold text-accent-600',
                  'dark:text-accent-400'
                )}
              >
                {caption}
              </span>
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
            'mb-3 block leading-relaxed text-slate-600',
            'dark:text-slate-400'
          )}
        >
          {description}
        </p>
        {tags && tags.length > 0 && (
          <div className={clsx('mb-3 flex flex-wrap gap-1.5')}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  'text-[11px] font-medium text-slate-500',
                  'dark:text-slate-500'
                )}
              >
                #{tag}
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
          view project{' '}
          <ChevronRightIcon className="group-hover:animate-bounce-x mt-1 h-3 w-3 transition" />
        </div>
      </Link>
    </article>
  );
}

export default ProjectPreview;
