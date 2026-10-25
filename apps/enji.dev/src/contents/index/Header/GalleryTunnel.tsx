import clsx from 'clsx';
import { useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

import { GALLERY } from '@/contents/index/data';

const SPEED = 140; // depth units per second
const WALL_ANGLE = 62; // deg each wall turns toward the centre

// two walls of shots in a corridor: far shots meet as a thin strip in the
// middle, near shots swing out past the edges, like flying down a tunnel
function GalleryTunnel() {
  const stageRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const target = useRef(SPEED);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    let k = 1;
    let depth = 0;
    let speed = SPEED;
    let last = 0;
    let raf = 0;

    const perWall = Math.ceil(GALLERY.length / 2);
    const gap = 430;
    const loop = perWall * gap;
    const near = 120;

    const measure = () => {
      k = Math.max(0.62, Math.min(1, stage.clientWidth / 1440));
      stage.style.perspective = `${620 * k}px`;
      GALLERY.forEach((shot, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const h = 300 * k;
        el.style.height = `${h}px`;
        el.style.width = `${shot.phone ? h * 0.46 : h * 1.6}px`;
      });
    };

    const paint = () => {
      GALLERY.forEach((shot, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const side = i % 2 === 0 ? -1 : 1;
        const slot = Math.floor(i / 2) + (side > 0 ? 0.5 : 0); // stagger the walls
        let d = (slot * gap - depth) % loop;
        if (d < 0) d += loop;
        d += near; // distance from the camera
        const fadeFar = Math.min(1, (loop + near - d) / 700);
        const fadeNear = Math.min(1, (d - near) / 160);
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        el.style.opacity = String(Math.max(0, Math.min(fadeFar, fadeNear)));
        el.style.transform = `translate3d(${side * 470 * k - w / 2}px, ${
          -h / 2
        }px, ${620 * k - d * k}px) rotateY(${-side * WALL_ANGLE}deg)`;
        el.style.zIndex = String(10000 - Math.round(d));
      });
    };

    const tick = (t: number) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      speed += (target.current - speed) * Math.min(1, dt * 3);
      depth = (depth + speed * dt) % loop;
      paint();
      raf = requestAnimationFrame(tick);
    };

    const start = () => {
      if (reduceMotion || raf) return;
      last = 0;
      raf = requestAnimationFrame(tick);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };

    // the camera leans a little toward the pointer
    const onMove = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width - 0.5) * 16;
      const y = ((e.clientY - r.top) / r.height - 0.5) * 12;
      stage.style.perspectiveOrigin = `${50 + x}% ${50 + y}%`;
    };

    measure();
    paint();
    stage.addEventListener('pointermove', onMove);

    const resize = new ResizeObserver(() => {
      measure();
      paint();
    });
    resize.observe(stage);

    const seen = new IntersectionObserver(([entry]) =>
      entry.isIntersecting ? start() : stop()
    );
    seen.observe(stage);

    return () => {
      stop();
      stage.removeEventListener('pointermove', onMove);
      resize.disconnect();
      seen.disconnect();
    };
  }, [reduceMotion]);

  return (
    <div
      ref={stageRef}
      className={clsx('relative h-[46vh] min-h-[280px] overflow-hidden')}
      onMouseEnter={() => {
        target.current = 30;
      }}
      onMouseLeave={() => {
        target.current = SPEED;
      }}
    >
      <div
        className={clsx('absolute left-1/2 top-1/2')}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {GALLERY.map((shot, i) => (
          <Link
            key={shot.src}
            href={shot.href}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            aria-label={shot.alt}
            className={clsx(
              'bg-card absolute left-0 top-0 block overflow-hidden opacity-0',
              'outline-line/10 outline outline-1 -outline-offset-1',
              shot.phone ? 'rounded-xl' : 'rounded-md'
            )}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- transformed every frame, next/image adds nothing here */}
            <img
              src={shot.src}
              alt={shot.alt}
              loading={i < 10 ? 'eager' : 'lazy'}
              decoding="async"
              draggable={false}
              className={clsx('h-full w-full object-cover object-left-top')}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default GalleryTunnel;
