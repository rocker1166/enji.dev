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
        title="Ai Chatbot Builder"
        caption="Frontend + AI Integration"
        description="Next.js, Vercel AI SDK, MongoDB, Tailwind CSS, Groq LLM"
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <p className={clsx('text-slate-600', 'dark:text-slate-400', 'mb-12')}>
            Built a platform enabling organizations to create custom AI chatbots with tools like ticket booking, promotional flags, and analytics.
            With a simple form, organizations can provide relevant data about their entity and enable tools. The chatbot is created by fine-tuning a pre-deployed model, like Groq Llama, to align with the organization's specific needs.
          </p>
        </div>
      </SectionContent>

      <SectionTitle
        title="IntelliSupply"
        caption="Frontend, Backend, and AI Agent System"
        description="TypeScript, Next.js, Supabase, Vercel AI SDK, Shadcn"
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <p className={clsx('text-slate-600', 'dark:text-slate-400', 'mb-12')}>
            IntelliSupply is an enterprise platform that uses AI-powered digital twins and LLMs to simulate supply chain disruptions, predict operational risks, and recommend real-time mitigation strategies.
          </p>
        </div>
      </SectionContent>
      
      <SectionTitle
        title="Lastminuteengineering"
        caption="Complete UI, API, and DB Infrastructure"
        description="TypeScript, React.js, Next.js, Tailwind CSS, Gemini LLM, Firebase"
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <p className={clsx('text-slate-600', 'dark:text-slate-400', 'mb-12')}>
            Developed an AI-powered platform for seamless student learning, offering features like AI-generated notes, topic-specific YouTube videos, and customized practice questions, improving student productivity.
          </p>
        </div>
      </SectionContent>

      <SectionTitle
        title="Home AI"
        caption="Complete UI, API, and DB Infrastructure"
        description="React, Groq LLM, Vercel, Shadcn, Tailwind, Next.js"
      />
      <SectionContent>
        <div className={clsx('flex', 'lg:gap-12')}>
          <p className={clsx('text-slate-600', 'dark:text-slate-400')}>
            Designed a smart home dashboard/assistant with a chatbot UI providing real-time data on electricity usage, camera feeds, and more. Highly secure authentication system hashing passwords.
          </p>
        </div>
      </SectionContent>
    </>
  );
}

export default ProjectsContents;
