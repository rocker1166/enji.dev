import clsx from 'clsx';
import { m } from 'framer-motion';

const animation = {
  hide: { x: -32, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

function HeaderTitle() {
  return (
    <div>
      <m.div
        className={clsx(
          'mb-1 text-2xl text-slate-600',
          'md:mb-0 md:text-4xl',
          'dark:text-slate-400'
        )}
        initial={animation.hide}
        animate={animation.show}
        transition={{ delay: 0.1 }}
      >
        hi!
      </m.div>
      <span className={clsx('text-slate-700', 'dark:text-slate-300')}>
        <m.span
          className={clsx(
            'mb-4 block text-[2.5rem] font-[1000] leading-none',
            'md:mb-6 md:text-7xl'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.2 }}
        >
          I&apos;m{' '}
          <strong className={clsx('text-accent-600', 'dark:text-accent-500')}>
            Suman
          </strong>{' '}
          Jana,{' '}
        </m.span>
        <m.h1
          className={clsx(
            'block text-xs text-slate-600',
            'md:text-sm',
            'dark:text-slate-400'
          )}
          initial={animation.hide}
          animate={animation.show}
          transition={{ delay: 0.3 }}
        >
          <strong
            className={clsx('font-bold text-slate-700', 'dark:text-slate-300')}
          >
            Full-Stack Developer
          </strong>{' '}
          &amp; AI Systems Builder.{' '}
          <span className={clsx('block')}>
            Co-founder{' '}
            <strong
              className={clsx(
                'font-bold text-slate-700',
                'dark:text-slate-300'
              )}
            >
              @LastMinuteEngineering
            </strong>{' '}
            · Building at UpDesk · 100agentdev Winner.
          </span>
        </m.h1>
      </span>
    </div>
  );
}

export default HeaderTitle;
