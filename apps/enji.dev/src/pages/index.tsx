import Head from '@/components/meta/Head';

import { getBaseUrl } from '@/helpers/url';

import IndexContents from '@/contents/index';

function Index() {
  return (
    <>
      <Head
        title="Suman Jana · CSE (AI/ML) Student"
        description="An online portfolio featuring a showcase of my projects and some thoughts as a 3rd-year CSE (AI/ML) student."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
    </>
  );
}

export default Index;
