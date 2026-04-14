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
  return (
    <div className={clsx('content-wrapper')}>
      <div className={clsx('flex flex-col gap-6')}>
        {projects.map(({ slug, frontMatter }) => (
          <ProjectPreview key={slug} slug={slug} {...frontMatter} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsContents;
