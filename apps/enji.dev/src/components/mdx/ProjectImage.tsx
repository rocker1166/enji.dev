import clsx from 'clsx';
import NextImage from 'next/image';

interface ProjectImageProps {
  src: string;
  alt: string;
  caption?: string;
}

function ProjectImage({ src, alt, caption }: ProjectImageProps) {
  return (
    <figure className={clsx('mdx-project-image', 'my-6')}>
      <NextImage
        src={src}
        alt={alt}
        width={1200}
        height={630}
        className={clsx(
          'w-full rounded-xl',
          'border border-divider-light',
          'dark:border-divider-dark'
        )}
        sizes="(max-width: 768px) 100vw, 720px"
      />
      {caption ? (
        <figcaption
          className={clsx(
            'mt-2 text-center text-sm',
            'text-slate-500',
            'dark:text-slate-400'
          )}
        >
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}

export default ProjectImage;
