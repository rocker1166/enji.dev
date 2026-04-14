import clsx from 'clsx';

interface YouTubeProps {
  videoId: string;
  title?: string;
}

function YouTube({ videoId, title = 'YouTube video' }: YouTubeProps) {
  return (
    <div className={clsx('mdx-youtube', 'my-6')}>
      <div
        className={clsx(
          'relative w-full overflow-hidden rounded-xl',
          'border border-divider-light',
          'dark:border-divider-dark'
        )}
        style={{ paddingBottom: '56.25%' }}
      >
        <iframe
          className={clsx('absolute inset-0 h-full w-full')}
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          title={title}
          loading="lazy"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
}

export default YouTube;
