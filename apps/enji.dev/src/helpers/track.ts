import { sendGAEvent } from '@next/third-parties/google';

// GA4 event for the actions the home page exists to drive
export default function track(cta: string) {
  try {
    sendGAEvent('event', 'cta_click', { cta });
  } catch {
    // analytics must never break a click
  }
}
