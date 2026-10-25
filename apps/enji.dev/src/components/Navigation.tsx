import clsx from 'clsx';

import { GitHubIcon, LinkedInIcon } from '@/components/Icons';
import NavIcon from '@/components/navigations/NavIcon';
import NavIconQuickAccess from '@/components/navigations/NavIconQuickAccess';
import NavLink from '@/components/navigations/NavLink';
import NavLinkDropdown from '@/components/navigations/NavLinkDropdown';
import NavLogo from '@/components/navigations/NavLogo';
import NavThemeToggle from '@/components/navigations/NavThemeToggle';

import useOnScroll from '@/hooks/useOnScroll';

import track from '@/helpers/track';

import { RESUME_URL } from '@/contents/index/data';

// one dropdown at every width keeps the bar to five choices (Hick's law)
const workLinks = [
  { title: 'Experience', href: '/work/experience' },
  { title: 'Contact', href: '/work/contact' },
  { title: 'Skills & Tools', href: '/work/skills-and-tools' },
  { title: 'Studio', href: '/work/studio' },
];

function Navbar() {
  const isScrolled = useOnScroll(0);

  return (
    <header
      className={clsx('fixed left-0 right-0 top-0 z-[1000]', 'fm:absolute')}
    >
      <div
        className={clsx(
          'fixed inset-0 h-16',
          [
            isScrolled === true && [
              'border-divider-light border-b bg-white/70 backdrop-blur',
              'dark:border-divider-dark dark:bg-[#0a0a0a]/80',
            ],
          ],
          'fm:hidden'
        )}
      />
      <div className={clsx('h-2', [isScrolled === true && ['-mt-2']])} />
      <div className={clsx('content-wrapper-max')}>
        <div
          className={clsx(
            'relative z-50 flex h-16 items-center justify-between px-2 text-sm',
            'md:px-4'
          )}
        >
          <nav className={clsx('flex', 'md:gap-2')} data-accent="violet">
            <NavLogo href="/" title="Home" />
            <ul className={clsx('flex items-center', 'md:gap-1')}>
              <li>
                <NavLink title="Projects" href="/projects" />
              </li>
              <li>
                <NavLink title="Blog" href="/blog" />
              </li>
              <li>
                <NavLink title="T.I.L" href="/today-i-learned" />
              </li>
              <li data-accent="blue">
                <NavLinkDropdown title="Work" items={workLinks} />
              </li>
            </ul>
          </nav>
          <ul className={clsx('flex items-center')}>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://www.linkedin.com/in/suman-jana-dev/"
                icon={<LinkedInIcon className={clsx('h-5 w-5')} />}
                title="LinkedIn"
              />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <NavIcon
                href="https://github.com/rocker1166"
                icon={<GitHubIcon className={clsx('h-5 w-5')} />}
                title="GitHub"
              />
            </li>
            <li className={clsx('mr-1 hidden', 'sm:block')}>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => track('resume_nav')}
                className={clsx(
                  'border-line/20 text-ink hover:border-accent-600 dark:hover:border-accent-500 flex h-9 items-center rounded-full border px-4 text-[13px] font-semibold transition'
                )}
              >
                Resume
              </a>
            </li>
            <li>
              <NavThemeToggle />
            </li>
            <li className={clsx('hidden', 'sm:block')}>
              <div
                className={clsx(
                  'ml-2 mr-4 h-3 w-[1px] bg-slate-200',
                  'dark:bg-slate-700'
                )}
              />
            </li>
            <li className={clsx('sm:mr-2')}>
              <NavIconQuickAccess />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
