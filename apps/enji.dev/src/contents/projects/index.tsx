import clsx from 'clsx';

import ProjectPreview from '@/contents/projects/ProjectPreview';

import type { TProjectFrontMatter } from '@/types';

export type ProjectsContentsProps = {
  projects: Array<{
    slug: string;
    frontMatter: TProjectFrontMatter;
  }>;
};

function ProjectsContents({ projects }: ProjectsContentsProps) {
  const [featured, ...rest] = projects;

  return (
    <div className={clsx('content-wrapper')}>
      <div
        className={clsx(
          'flex flex-col gap-8',
          'md:flex-row md:gap-8 lg:gap-24'
        )}
      >
        <div className={clsx('md:w-64')}>{/* sidebar space */}</div>
        <div className={clsx('flex-1')}>
          {featured && (
            <div
              className={clsx(
                'mb-8 flex items-start gap-4',
                'md:mb-12 md:gap-6'
              )}
            >
              <div className={clsx('flex-1')}>
                <ProjectPreview
                  featured
                  slug={featured.slug}
                  {...featured.frontMatter}
                />
              </div>
            </div>
          )}

          {rest.map(({ slug, frontMatter }) => (
            <div
              key={slug}
              className={clsx(
                'mb-8 flex items-start gap-4',
                'md:mb-4 md:gap-6'
              )}
            >
              <div
                className={clsx(
                  'border-divider-light mt-14 hidden w-8 -translate-y-1 border-b',
                  'md:mt-16 md:w-20 lg:block',
                  'dark:border-divider-dark'
                )}
              />
              <div className={clsx('flex-1')}>
                <ProjectPreview slug={slug} {...frontMatter} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectsContents;
