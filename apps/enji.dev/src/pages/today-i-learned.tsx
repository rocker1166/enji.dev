import TILContents from '@/contents/TIL';
import HeaderImage from '@/contents/TIL/HeaderImage';
import Page from '@/contents-layouts/Page';

function TIL() {
  return (
    <Page
      frontMatter={{
        title: 'Today I Learned',
        description: `Short, real lessons from shipping and running things in production.`,
      }}
      headerImage={<HeaderImage />}
    >
      <TILContents />
    </Page>
  );
}

export default TIL;
