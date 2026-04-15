import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

const getHomeStructuredData = () => {
  const baseUrl = getBaseUrl();
  return JSON.stringify([
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Suman Jana',
      url: baseUrl,
      description:
        'Full-stack developer building production-grade apps, AI agent systems, and scalable backends with Next.js, TypeScript, and LLMs.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Suman Jana',
      url: baseUrl,
      jobTitle: 'Full-Stack Developer',
      sameAs: ['https://twitter.com/suman_jana', 'https://github.com/sumanjana'],
      image: `${baseUrl}/assets/images/me.png`,
    },
  ]);
};

function Index() {
  return (
    <>
      <Head
        title="Suman Jana · Full-Stack Developer & AI Systems Builder"
        description="Full-stack developer building production-grade apps, AI agent systems, and scalable backends with Next.js, TypeScript, and LLMs."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
        structuredData={getHomeStructuredData()}
      />
      <IndexContents />
    </>
  );
}

export default Index;
