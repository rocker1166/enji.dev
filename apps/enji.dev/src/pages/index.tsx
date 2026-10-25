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
        'Full-stack engineer and co-founder. Lead engineering at DynoWeb and Deksie, built Karmyug AI (8,000+ workers in 4 days), run Yantratools (62K+ customers), CTO at Kaafila.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Suman Jana',
      url: baseUrl,
      jobTitle: 'Full-Stack Engineer & Co-founder',
      sameAs: [
        'https://github.com/rocker1166',
        'https://www.linkedin.com/in/suman-jana-dev',
      ],
      image: `${baseUrl}/assets/images/me.png`,
    },
  ]);
};

function Index() {
  return (
    <>
      <Head
        title="Suman Jana · Full-Stack Engineer & Co-founder"
        description="Full-stack engineer and co-founder. Lead engineering at DynoWeb and Deksie, built Karmyug AI (8,000+ workers in 4 days), run Yantratools (62K+ customers), CTO at Kaafila."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
        structuredData={getHomeStructuredData()}
      />
      <IndexContents />
    </>
  );
}

export default Index;
