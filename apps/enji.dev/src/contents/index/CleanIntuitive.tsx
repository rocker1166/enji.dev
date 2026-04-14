import clsx from 'clsx';
import { useState } from 'react';

import { SectionButton } from '@/components/sections/SectionButton';
import SectionContent from '@/components/sections/SectionContent';
import SectionTitle from '@/components/sections/SectionTitle';

import TodoItem from '@/contents/index/Cards/TodoItem';

import type { TodoItemState } from '@/contents/index/Cards/TodoItem';

type Content = {
  state: TodoItemState;
  shows: Array<TodoItemState>;
  title: string;
  description: string;
};

const content: Array<Content> = [
  {
    state: 'typography',
    shows: ['typography'],
    title: 'Next.js / React',
    description: 'Server components, streaming SSR, and optimistic UI updates.',
  },
  {
    state: 'spacing',
    shows: ['typography', 'spacing'],
    title: 'Node.js / APIs',
    description: 'REST APIs, auth middleware, background jobs, and webhooks.',
  },
  {
    state: 'colors',
    shows: ['typography', 'spacing', 'colors'],
    title: 'PostgreSQL / Redis',
    description: 'Schema design, indexing, caching, and zero-downtime migrations.',
  },
  {
    state: 'effects',
    shows: ['typography', 'spacing', 'colors', 'effects'],
    title: 'CI/CD / GCP',
    description: 'GitHub Actions pipelines and Cloud Run deployments.',
  },
];

function CleanIntuitive() {
  const [currentState, setCurrentState] = useState<Content | null>(null);

  return (
    <>
      <header className={clsx('mb-8')}>
        <SectionTitle
          title="From Pixel-Perfect UI to Production Backend."
          caption="Full-Stack Development"
          description="Building end-to-end with Next.js, TypeScript, Node.js, and Postgres — clean interfaces backed by solid, scalable systems."
        />
      </header>
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <div
            className={clsx('-mt-8 hidden flex-1 flex-col gap-3', 'lg:flex')}
          >
            {content.map((item, i) => (
              <SectionButton
                key={item.state}
                title={item.title}
                description={item.description}
                icon={i + 1}
                active={currentState?.state === item.state}
                onClick={() => setCurrentState(item)}
              />
            ))}
          </div>
          <div
            className={clsx('relative flex flex-1 items-center justify-center')}
          >
            <div
              className={clsx('-mt-8 flex gap-4', 'md:gap-6 lg:top-8 lg:mt-0')}
            >
              <div>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects']
                  }
                />
              </div>
              <div className={clsx('hidden', 'sm:block lg:hidden')}>
                <TodoItem
                  state={
                    currentState
                      ? currentState.shows
                      : ['typography', 'spacing', 'colors', 'effects']
                  }
                  title="Ship Auth Feature"
                  description="JWT middleware, refresh tokens, and role-based access control."
                  date="10:00 AM · Tomorrow"
                  tag1="Backend"
                  tag2="Next.js"
                />
              </div>
            </div>
          </div>
        </div>
      </SectionContent>
    </>
  );
}

export default CleanIntuitive;
