import clsx from 'clsx';
import {
  Instrument_Serif as InstrumentSerif,
  Inter_Tight as InterTight,
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from 'next/font/google';
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

const interTight = InterTight({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const instrumentSerif = InstrumentSerif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-serif',
  display: 'swap',
  adjustFontFallback: false, // next/font has no fallback metrics for this face
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
