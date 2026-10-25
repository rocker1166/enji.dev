import { useSyncExternalStore } from 'react';

// one site-wide switch for auto-moving content (WCAG 2.2.2 pause, stop, hide)
const KEY = 'motion-paused';
const listeners = new Set<() => void>();

let paused: boolean | null = null;

function read() {
  if (paused === null) {
    try {
      paused = localStorage.getItem(KEY) === '1';
    } catch {
      paused = false;
    }
  }
  return paused;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setMotionPaused(value: boolean) {
  paused = value;
  try {
    localStorage.setItem(KEY, value ? '1' : '0');
  } catch {
    // storage blocked: the switch still works for this page view
  }
  listeners.forEach((l) => l());
}

function useMotionPause() {
  return useSyncExternalStore(subscribe, read, () => false);
}

export default useMotionPause;
