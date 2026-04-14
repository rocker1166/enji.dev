import clsx from 'clsx';

import SectionTitle from '@/components/sections/SectionTitle';

function PrettyOptimized() {
  return (
    <header className={clsx('mb-8')}>
      <SectionTitle
        title="CI/CD, Zero Downtime, and Systems That Stay Up."
        caption="Production Mindset"
        description="GitHub Actions pipelines, GCP Cloud Run deployments, zero-downtime database migrations, and production database operations — built to run reliably under real load."
      />
    </header>
  );
}

export default PrettyOptimized;
