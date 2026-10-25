import clsx from 'clsx';

import { DarkIcon, LightIcon } from '@/components/Icons';

import useTheme from '@/hooks/useTheme';

function NavThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label="Switch between light and dark mode"
      title="Switch between light and dark mode"
      className={clsx(
        'flex h-9 w-9 items-center justify-center rounded-xl text-slate-700',
        'hover:bg-slate-300/50',
        'dark:text-slate-200 dark:hover:bg-slate-800/50'
      )}
    >
      {/* both icons render and CSS picks one, so SSR and client markup match */}
      <LightIcon className={clsx('h-5 w-5', 'dark:hidden')} />
      <DarkIcon className={clsx('hidden h-5 w-5', 'dark:block')} />
    </button>
  );
}

export default NavThemeToggle;
