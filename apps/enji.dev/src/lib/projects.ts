import frontMatter from 'front-matter';
import fs from 'fs';
import path from 'path';

import type { TProjectFrontMatter } from '@/types';

const projectsDirectory = path.join(process.cwd(), 'src/pages/projects');

export const getProjectSlugs = () => {
  if (!fs.existsSync(projectsDirectory)) return [];

  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames
    .filter((name) => name.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''));
};

export const getProjectFrontMatter = (
  slug: string
): TProjectFrontMatter => {
  const fullPath = path.join(projectsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { attributes } = frontMatter<TProjectFrontMatter>(fileContents);

  return attributes;
};

export const getSortedProjects = () => {
  const slugs = getProjectSlugs();

  const allProjectsData = slugs.map((slug) => {
    const data = getProjectFrontMatter(slug);

    return {
      slug,
      frontMatter: data,
    };
  });

  return allProjectsData.sort(
    ({ frontMatter: { date: a } }, { frontMatter: { date: b } }) => {
      if (a < b) {
        return 1;
      }
      if (a > b) {
        return -1;
      }
      return 0;
    }
  );
};
