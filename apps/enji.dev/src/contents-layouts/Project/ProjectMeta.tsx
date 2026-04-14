import clsx from 'clsx';

import { GitHubIcon, NpmIcon } from '@/components/Icons';

import { TProjectFrontMatter } from '@/types';

interface ProjectMetaProps {
  githubUrl?: TProjectFrontMatter['githubUrl'];
  npmUrl?: TProjectFrontMatter['npmUrl'];
  liveUrl?: TProjectFrontMatter['liveUrl'];
  tags?: TProjectFrontMatter['tags'];
}

function ProjectMeta({
  githubUrl = '',
  npmUrl = '',
  liveUrl = '',
  tags = [],
}: ProjectMetaProps) {
  const hasLinks = githubUrl || npmUrl || liveUrl;

  return (
    <div className={clsx('content-wrapper mb-10')}>
      <div
        className={clsx(
          'flex flex-col gap-4 text-sm text-slate-600',
          'dark:text-slate-500'
        )}
      >
        {hasLinks && (
          <div className={clsx('flex flex-wrap gap-x-4 gap-y-2')}>
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer nofollow"
                className={clsx('button button--soft')}
              >
                <GitHubIcon className={clsx('h-5 w-5')} />
                GitHub
              </a>
            )}
            {npmUrl && (
              <a
                href={npmUrl}
                target="_blank"
                rel="noreferrer nofollow"
                className={clsx('button button--soft')}
              >
                <NpmIcon className={clsx('h-5 w-5')} />
                npm
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer nofollow"
                className={clsx('button button--soft')}
              >
                Live Demo
              </a>
            )}
          </div>
        )}
        {tags.length > 0 && (
          <div className={clsx('flex flex-wrap gap-2')}>
            {tags.map((tag) => (
              <span
                key={tag}
                className={clsx(
                  'rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600',
                  'dark:bg-slate-800 dark:text-slate-400'
                )}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectMeta;
