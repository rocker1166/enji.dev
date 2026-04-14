import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function DetailOriented() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="Building Intelligent Systems That Actually Work."
        caption="AI Integration"
        description="LLM agents, multi-agent orchestration with LangGraph, RAG pipelines, and generative UI — from hackathon winner to production deployments."
      />
    </header>
  );
}

export default DetailOriented;
