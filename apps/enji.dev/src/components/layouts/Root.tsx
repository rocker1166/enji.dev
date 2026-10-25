import clsx from 'clsx';
import {
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from 'next/font/google';
import localFont from 'next/font/local';
import { PropsWithChildren } from 'react';

const jetbrainsMono = JetBrainsMono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const plusJakartaSans = PlusJakartaSans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// display faces are self-hosted (latin subset): a Google Fonts fetch timeout
// at build time once failed the Vercel deploy
const interTight = localFont({
  src: '../../assets/fonts/InterTight-Variable-latin.woff2',
  weight: '100 900',
  variable: '--font-display',
  display: 'swap',
});

const instrumentSerif = localFont({
  src: [
    {
      path: '../../assets/fonts/InstrumentSerif-Regular-latin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../assets/fonts/InstrumentSerif-Italic-latin.woff2',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-serif',
  display: 'swap',
});

function Root({ children }: PropsWithChildren) {
  return (
    <div
      id="__root"
      className={clsx([
        jetbrainsMono.variable,
        plusJakartaSans.variable,
        interTight.variable,
        instrumentSerif.variable,
      ])}
    >
      {children}
    </div>
  );
}

export default Root;
