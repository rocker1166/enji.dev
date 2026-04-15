import dynamic from 'next/dynamic';

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Shortcuts from '@/components/Shortcuts';
import Toaster from '@/components/Toaster';

import type { PropsWithChildren } from 'react';

const QuickAccess = dynamic(() => import('@/components/QuickAccess'), {
  ssr: false,
});

function WithNavigationFooter({ children }: PropsWithChildren) {
  return (
    <>
      <QuickAccess />
      <Shortcuts />
      <Navigation />
      <main>{children}</main>
      <Toaster />
      <Footer />
    </>
  );
}

export default WithNavigationFooter;
