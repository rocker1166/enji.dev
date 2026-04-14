import { getSortedProjects } from '@/lib/projects';

import ProjectsContents from '@/contents/projects';
import HeaderImage from '@/contents/projects/HeaderImage';
import Page from '@/contents-layouts/Page';

import type { ProjectsContentsProps } from '@/contents/projects';
import type { GetStaticProps } from 'next';

type ProjectsProps = {
  projects: ProjectsContentsProps['projects'];
};

function Projects({ projects }: ProjectsProps) {
  return (
    <Page
      frontMatter={{
        title: 'Projects',
        description: 'Showcase of my software engineering projects.',
      }}
      headerImage={<HeaderImage />}
    >
      <ProjectsContents projects={projects} />
    </Page>
  );
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  const allProjectsData = getSortedProjects();

  return {
    props: {
      projects: allProjectsData,
    },
  };
};

export default Projects;
