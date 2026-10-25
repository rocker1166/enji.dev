import clsx from 'clsx';

import Capabilities from '@/contents/index/Capabilities';
import Closing from '@/contents/index/Closing';
import Header from '@/contents/index/Header';
import ImpactStats from '@/contents/index/ImpactStats';
import Intro from '@/contents/index/Intro';
import Manifesto from '@/contents/index/Manifesto';
import SelectedWork from '@/contents/index/SelectedWork';
import Timeline from '@/contents/index/Timeline';

// matte film grain over the whole page
const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function IndexContents() {
  return (
    <div className={clsx('bg-page text-ink relative')}>
      <div
        aria-hidden
        className={clsx(
          'pointer-events-none fixed inset-0 z-[999] opacity-[0.06] mix-blend-overlay'
        )}
        style={{ backgroundImage: GRAIN }}
      />
      <Intro />
      <Header />
      <Manifesto />
      <ImpactStats />
      <SelectedWork />
      <Capabilities />
      <Timeline />
      <Closing />
    </div>
  );
}

export default IndexContents;
