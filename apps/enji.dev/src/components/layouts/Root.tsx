import clsx from 'clsx';
import {
  JetBrains_Mono as JetBrainsMono,
  Plus_Jakarta_Sans as PlusJakartaSans,
} from "next/font/google";
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

function Root({ children }: PropsWithChildren) {
  return (
    <div
      id="__root"
      className={clsx([jetbrainsMono.variable, plusJakartaSans.variable])}
    >
      {children}
    </div>
  );
}

export default Root;
