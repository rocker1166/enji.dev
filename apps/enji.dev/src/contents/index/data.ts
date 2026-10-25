// Numbers are rounded and public-safe; sources live in the private work log.

const G = '/assets/images/work/gallery';

export const GALLERY = [
  {
    src: `${G}/01.jpg`,
    alt: 'DynoWeb dashboard inside Shopify admin',
    href: '/projects/dynoweb',
  },
  {
    src: `${G}/02.jpg`,
    alt: 'Deksie agency dashboard',
    href: '/projects/deksie',
  },
  {
    src: `${G}/03.jpg`,
    alt: 'Kaafila trip reels',
    href: '/projects/kaafila',
    phone: true,
  },
  {
    src: `${G}/04.jpg`,
    alt: 'Karmyug AI admin overview',
    href: '/projects/karmyug-ai',
  },
  {
    src: `${G}/05.jpg`,
    alt: 'DynoWeb session replay',
    href: '/projects/dynoweb',
  },
  { src: `${G}/06.jpg`, alt: 'Deksie task board', href: '/projects/deksie' },
  {
    src: `${G}/07.jpg`,
    alt: 'Yantratools storefront',
    href: '/projects/yantratools',
  },
  {
    src: `${G}/08.jpg`,
    alt: 'Kaafila live trip screen',
    href: '/projects/kaafila',
    phone: true,
  },
  {
    src: `${G}/09.jpg`,
    alt: 'DynoWeb popup editor',
    href: '/projects/dynoweb',
  },
  { src: `${G}/10.jpg`, alt: 'Deksie finance', href: '/projects/deksie' },
  {
    src: `${G}/11.jpg`,
    alt: 'Karmyug AI website',
    href: '/projects/karmyug-ai',
  },
  {
    src: `${G}/12.jpg`,
    alt: 'Kaafila op assistant',
    href: '/projects/kaafila',
    phone: true,
  },
  { src: `${G}/13.jpg`, alt: 'DynoWeb website', href: '/projects/dynoweb' },
  { src: `${G}/14.jpg`, alt: 'Deksie AI assistant', href: '/projects/deksie' },
  {
    src: `${G}/15.jpg`,
    alt: 'Karmyug AI worker app',
    href: '/projects/karmyug-ai',
  },
  {
    src: `${G}/16.jpg`,
    alt: 'Kaafila onboarding',
    href: '/projects/kaafila',
    phone: true,
  },
  {
    src: `${G}/17.jpg`,
    alt: 'Deksie revenue report',
    href: '/projects/deksie',
  },
  { src: `${G}/18.jpg`, alt: 'Deksie website', href: '/projects/deksie' },
];

export const STATS = [
  {
    value: 8,
    suffix: 'K+',
    label: 'workers joined Karmyug AI in its first ~4 days',
  },
  {
    value: 62,
    suffix: 'K+',
    label: 'customers on Yantratools, the marketplace I run',
  },
  { value: 74, suffix: '', label: 'Shopify stores installed DynoWeb' },
  {
    value: 1.3,
    suffix: 'M+',
    label: 'clicks DynoWeb tracks every month',
    decimals: 1,
  },
  { value: 150, suffix: '', label: 'DynoWeb releases shipped in 5 months' },
  { value: 5371, suffix: '', label: 'GitHub contributions in the last year' },
];

export const WORK = [
  {
    slug: 'dynoweb',
    name: 'DynoWeb',
    kind: 'Shopify AI CRO app',
    role: 'Co-founder & CTO',
    period: 'Feb 2026 – now',
    blurb:
      'Finds where a Shopify store loses sales and ships the fix: session replays, heatmaps, an AI agent, popups and SEO autopilot.',
    points: [
      '74 stores installed, 1.3M+ clicks tracked a month',
      '150 releases in 5 months, ~70% of 3,000 commits',
      'AI agent + MCP server, canary deploys on Cloud Run',
    ],
    stack: ['React Router', 'Prisma', 'Postgres', 'GCP', 'Gemini', 'MCP'],
    image: '/assets/images/work/dynoweb/dashboard.jpg',
    live: 'https://www.dynoweb.app',
  },
  {
    slug: 'karmyug-ai',
    name: 'Karmyug AI',
    kind: 'AI training-data platform',
    role: 'Sole engineer · freelance',
    period: 'Sep – Oct 2026',
    blurb:
      'People record voice tasks on their phones in their own language and get paid. I built all of it: site, worker app, admin and API.',
    points: [
      '8,000+ workers joined in ~4 days of launch',
      '4 apps and a 200-route API in ~4 weeks',
      'Load test: 80 recorders at once, 0 errors',
    ],
    stack: ['Next.js', 'NestJS', 'Prisma', 'Cloud Run', 'Cloud SQL'],
    image: '/assets/images/work/karmyug/admin-overview.jpg',
    live: 'https://karmyug.in',
  },
  {
    slug: 'deksie',
    name: 'Deksie',
    kind: 'Agency operations platform',
    role: 'Co-founder & CTO',
    period: 'Dec 2025 – now',
    blurb:
      'CRM, projects, client approvals, contracts, invoices and an AI assistant, in one workspace for creative agencies.',
    points: [
      '~83% of 1,361 commits across Go and Next.js',
      '598 API routes, 100 migrations, 385 Go tests',
      'Money-safe finance, AI assistant, fail-closed RBAC',
    ],
    stack: ['Go', 'Postgres', 'Next.js 16', 'React 19', 'Vertex AI'],
    image: '/assets/images/work/deksie/dashboard.jpg',
    live: 'https://www.deksie.com',
  },
  {
    slug: 'yantratools',
    name: 'Yantratools',
    kind: 'Tools marketplace',
    role: 'Platform engineer · freelance',
    period: 'Sep 2026 – now',
    blurb:
      'A live marketplace I took over and now run. I built the whole seller side and the ops layer that keeps it safe.',
    points: [
      '62K+ customers, 2,800+ products',
      'Seller portal + Android seller app from scratch',
      'Backups, restore drills, CI/CD for 4 apps on AWS',
    ],
    stack: ['Node.js', 'MongoDB', 'Angular', 'Expo', 'AWS'],
    image: '/assets/images/work/yantratools/storefront.jpg',
    live: 'https://yantratools.com',
  },
  {
    slug: 'kaafila',
    name: 'Kaafila',
    kind: 'Group-travel app',
    role: 'CTO · equity partner',
    period: 'Oct 2026 – now',
    blurb:
      'Small group trips run by verified hosts. Meet the group before you pay, then a companion app runs the trip.',
    points: [
      'iOS on TestFlight, Android, web and admin',
      'Gemini voice assistant that edits live trip plans',
      '~220 commits in 3 weeks across 4 repos',
    ],
    stack: ['NestJS', 'Drizzle', 'Expo', 'React', 'Razorpay'],
    image: '/assets/images/work/kaafila/screens.jpg',
    live: 'https://kaafila.club',
  },
];

export const PROBLEMS = [
  {
    project: 'Karmyug AI',
    problem: 'Moved a live platform to GCP with 4,000 users on it',
    fix: 'Moved the API, the website and the live database from Supabase and Vercel to Cloud Run and a new Cloud SQL database while people were using it. Checked every table and every uploaded file before switching traffic.',
    result: '10 min',
    unit: 'of downtime, no data lost',
  },
  {
    project: 'Karmyug AI',
    problem: 'Built it to take 8,000 sign-ups in 4 days',
    fix: 'Audio is checked in the browser before it uploads, and I load-tested 80 people recording at the same time before launch.',
    result: '0',
    unit: 'errors at 1,807 recordings in 90 s',
  },
  {
    project: 'DynoWeb',
    problem: 'Cut the cloud bill by removing idle servers',
    fix: 'Two old release copies were running all day with no traffic. I removed them, halved the always-on servers and shrank the image registry from 127 GB to 35 GB.',
    result: '67%',
    unit: 'of Cloud Run spend was idle servers',
  },
  {
    project: 'DynoWeb',
    problem: 'Made an AI agent safe to run on live stores',
    fix: 'Every change it makes is saved first, needs the merchant’s approval and can be undone in one step. The same tools also run as an MCP server.',
    result: '1 step',
    unit: 'to undo any agent change',
  },
  {
    project: 'Deksie',
    problem: 'Locked down data between agencies',
    fix: 'Ran a 20-agent security audit and fixed the leaks it found: IDOR, SQL injection and permission gaps. Unknown roles now get no access by default.',
    result: '249',
    unit: 'issues fixed in 14 PRs',
  },
];

export const BADGES = [
  '100agentdev winner · 600+ teams',
  'HackFest IIT Dhanbad runner-up',
  '90K PII records cleaned, zero downtime',
  'Live GCP migration with 10 min downtime',
  'MCP server with OAuth 2.1',
  '1,807 recordings in 90 s, 0 errors',
  'Container registry 127 GiB → 35 GB',
  '249 audit findings fixed in 14 PRs',
  '1,300+ test files on DynoWeb',
  'Restore drill passed on a 62K-customer store',
];

export const MANIFESTO =
  'One engineer, the whole stack. I design the system, write the code, ship it to production and stay on call when real people show up. Last week that was 8,000 of them in four days.';

export const CAPABILITIES = [
  {
    title: 'Product & frontend',
    proof: 'Popup editor, admin panels, 3 design systems',
    items: [
      'Next.js · React · React Router',
      'Design systems & motion',
      'Editors, dashboards, PWAs',
    ],
  },
  {
    title: 'Backend & data',
    proof: '598-route Go API, 77-model Prisma schema',
    items: [
      'Go · NestJS · Node',
      'Postgres · MongoDB · Prisma',
      'Billing, ledgers, attribution',
    ],
  },
  {
    title: 'AI & agents',
    proof: 'DynoAgent + MCP server, voice op assistant',
    items: [
      'Tool-calling agents · MCP',
      'Gemini · Vercel AI SDK',
      'RAG, evals, audio QC',
    ],
  },
  {
    title: 'Infra & ops',
    proof: 'Canary deploys, 67% Cloud Run waste removed',
    items: [
      'GCP Cloud Run · AWS',
      'CI/CD, rollbacks, backups',
      'Cost, security, on-call',
    ],
  },
  {
    title: 'Mobile',
    proof: 'Expo apps on TestFlight & Android',
    items: ['Expo · React Native', 'Push, OTA updates', 'Offline-first flows'],
  },
];

export const EMAIL = 'sumanjanaled@gmail.com';
export const RESUME_URL = '/resume.pdf';
export const MAILTO_HELLO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Hello from sumanlabs.in'
)}`;
export const MAILTO_PROJECT = `mailto:${EMAIL}?subject=${encodeURIComponent(
  'Project for Suman'
)}&body=${encodeURIComponent(
  'What are you building, and what is broken or missing?\n\nTimeline:\nLinks:\n'
)}`;
