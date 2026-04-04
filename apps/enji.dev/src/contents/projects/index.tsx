import clsx from 'clsx';
import { useState } from 'react';

import { GitHubIcon } from '@/components/Icons';
import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

function ProjectsContents() {
  return (
    <>
      <SectionTitle
        title="Dynoweb"
        caption="Full-Stack Application"
        description="Full-stack backend, DB, GCP deployment."
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <p className={clsx('text-slate-600', 'dark:text-slate-400', 'mb-12')}>
            Developed the full-stack backend, designed the database schema, and handled the deployment on Google Cloud Platform.
          </p>
        </div>
      </SectionContent>

      <SectionTitle
        title="Deksie"
        caption="Frontend & QA"
        description="Frontend fixes, QA."
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <p className={clsx('text-slate-600', 'dark:text-slate-400')}>
            Focused on improving the frontend user experience, resolving bugs, and ensuring quality assurance.
          </p>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
