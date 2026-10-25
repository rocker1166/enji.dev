import clsx from 'clsx';
import Link from 'next/link';

import { ExternalLink, GitHubIcon, LinkedInIcon } from '@/components/Icons';

import dayjs from '@/utils/dayjs';

interface FooterLinkProps {
  title: string;
  href: string;
  label?: 'new' | 'soon';
  isInternal?: boolean;
}

function FooterLink({
  title,
  href,
  label = undefined,
  isInternal = true,
}: FooterLinkProps) {
  if (label === 'soon') {
    return (
      <span className={clsx('footer-link footer-link--soon')}>
        {title}
        <span className={clsx('footer-link__label')}>{label}</span>
      </span>
    );
  }

  if (isInternal) {
    return (
      <Link href={href} className={clsx('footer-link')}>
        {title}
        {label && <span className={clsx('footer-link__label')}>{label}</span>}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer nofollow"
      className={clsx('footer-link')}
    >
      {title}
      <ExternalLink className={clsx('h-3.5 w-3.5')} />
      {label && <span className={clsx('footer-link__label')}>{label}</span>}
    </a>
  );
}

interface FooterGroupProps {
  title: string;
  links: Array<FooterLinkProps>;
}

function FooterGroup({ title, links }: FooterGroupProps) {
  return (
    <div className={clsx('flex-1')}>
      <div
        className={clsx(
          'mb-2 px-2 text-[13px] text-slate-600',
          'dark:text-slate-400'
        )}
      >
        {title}
      </div>
      <ul className={clsx('flex flex-col')}>
        {links.map(({ title: linkTitle, href, label, isInternal }) => (
          <li key={href}>
            <FooterLink
              title={linkTitle}
              href={href}
              label={label}
              isInternal={isInternal}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterDescription() {
  return (
    <div className={clsx('max-w-sm')}>
      <p
        className={clsx(
          'mb-4 font-normal leading-relaxed text-slate-600',
          'dark:text-slate-400'
        )}
      >
        <strong className={clsx('text-slate-900 dark:text-slate-100')}>
          Suman Jana
        </strong>
        , full-stack engineer and co-founder in Kolkata. I build products end to
        end: Deksie, DynoWeb, Karmyug AI, Yantratools and Kaafila.
      </p>
      <ul className={clsx('-ml-2 flex gap-1')}>
        <li>
          <a
            href="https://github.com/rocker1166"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx(
              'hover:text-accent-500 flex h-9 w-9 items-center justify-center'
            )}
            aria-label="My GitHub profile"
            title="My GitHub profile"
          >
            <GitHubIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/suman-jana-dev/"
            target="_blank"
            rel="noreferrer nofollow"
            className={clsx(
              'hover:text-accent-500 flex h-9 w-9 items-center justify-center'
            )}
            aria-label="My LinkedIn profile"
            title="My LinkedIn profile"
          >
            <LinkedInIcon className={clsx('h-5 w-5')} />
          </a>
        </li>
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer
      className={clsx(
        'border-divider-light mt-24 shrink-0 overflow-hidden border-t text-sm text-slate-900',
        'bg-page dark:border-divider-dark dark:text-slate-200'
      )}
    >
      <div className={clsx('content-wrapper')}>
        <div
          className={clsx(
            'flex flex-col gap-12 py-16 font-semibold',
            'lg:flex-row lg:justify-between'
          )}
        >
          <FooterDescription />
          <div className={clsx('-mx-2 flex gap-8', 'sm:gap-16 lg:mx-0')}>
            <FooterGroup
              title="Work"
              links={[
                { title: 'Projects', href: '/projects' },
                { title: 'Experience', href: '/work/experience' },
                { title: 'Skills and Tools', href: '/work/skills-and-tools' },
                { title: 'Studio', href: '/work/studio' },
                { title: 'Contact', href: '/work/contact' },
              ]}
            />
            <FooterGroup
              title="Writing"
              links={[
                { title: 'Blog', href: '/blog' },
                { title: 'T.I.L', href: '/today-i-learned' },
                { title: 'Docs', href: '/docs' },
              ]}
            />
          </div>
        </div>
        <div
          aria-hidden
          className={clsx(
            'font-display select-none whitespace-nowrap text-[17.5vw] font-semibold leading-[0.8] tracking-[-0.06em] text-slate-900',
            'xl:text-[13rem]',
            'dark:text-slate-100'
          )}
        >
          Suman Jana
          <span className={clsx('text-accent-500')}>.</span>
        </div>
        <div
          className={clsx(
            'border-divider-light flex flex-wrap justify-between gap-2 border-t py-6 font-mono text-[11px] uppercase tracking-[0.16em] text-slate-500',
            'dark:border-divider-dark'
          )}
        >
          <span>&copy; {dayjs().format('YYYY')} Suman Jana</span>
          <span>Kolkata, IN · built and shipped by me</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
