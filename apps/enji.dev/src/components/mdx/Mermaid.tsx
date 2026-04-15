import clsx from 'clsx';
import { useCallback, useEffect, useRef, useState } from 'react';

interface MermaidProps {
  chart: string;
}

let idCounter = 0;

function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
  // eslint-disable-next-line no-plusplus
  const idRef = useRef(`mermaid-${++idCounter}`);

  useEffect(() => {
    if (!containerRef.current) return;

    const isDark =
      document.documentElement.classList.contains('dark') ||
      document.documentElement.getAttribute('data-theme') === 'dark';

    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: isDark ? 'dark' : 'default',
        fontFamily: 'inherit',
        fontSize: 14,
        flowchart: {
          curve: 'basis',
          padding: 20,
          htmlLabels: true,
          nodeSpacing: 50,
          rankSpacing: 50,
        },
        themeVariables: isDark
          ? {
              primaryColor: '#1e293b',
              primaryTextColor: '#e2e8f0',
              primaryBorderColor: '#475569',
              lineColor: '#64748b',
              secondaryColor: '#0f172a',
              tertiaryColor: '#0f172a',
              background: '#0f172a',
              mainBkg: '#1e293b',
              nodeBorder: '#475569',
              clusterBkg: '#1e293b',
              titleColor: '#e2e8f0',
              edgeLabelBackground: '#1e293b',
              attributeBackgroundColorEven: '#1e293b',
              attributeBackgroundColorOdd: '#0f172a',
            }
          : {
              primaryColor: '#f8fafc',
              primaryTextColor: '#0f172a',
              primaryBorderColor: '#cbd5e1',
              lineColor: '#64748b',
              secondaryColor: '#f1f5f9',
              tertiaryColor: '#f1f5f9',
              background: '#ffffff',
              mainBkg: '#f8fafc',
              nodeBorder: '#cbd5e1',
            },
      });

      mermaid
        .render(idRef.current, chart.trim())
        .then(({ svg: rendered }) => {
          setSvg(rendered);
          setError('');
        })
        .catch((err) => {
          setError(String(err));
        });
    });
  }, [chart]);

  const attachTooltips = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;
    containerRef.current = node;

    const tooltip = document.createElement('div');
    tooltip.style.cssText =
      'position:fixed;pointer-events:none;opacity:0;transition:opacity 150ms;z-index:9999;max-width:320px;padding:6px 10px;border-radius:6px;font-size:13px;line-height:1.4;white-space:pre-wrap;word-break:break-word;';

    const applyTheme = () => {
      const isDark =
        document.documentElement.classList.contains('dark') ||
        document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        tooltip.style.background = '#1e293b';
        tooltip.style.color = '#e2e8f0';
        tooltip.style.border = '1px solid #475569';
      } else {
        tooltip.style.background = '#ffffff';
        tooltip.style.color = '#0f172a';
        tooltip.style.border = '1px solid #cbd5e1';
      }
    };
    applyTheme();
    document.body.appendChild(tooltip);

    const isOverflowing = (el: Element): boolean => {
      if (el instanceof HTMLElement) {
        return (
          el.scrollWidth > el.clientWidth ||
          el.scrollHeight > el.clientHeight
        );
      }
      if (el instanceof SVGTextElement) {
        const parent = el.closest('.nodeLabel, .edgeLabel, .label');
        if (parent instanceof HTMLElement) {
          return (
            parent.scrollWidth > parent.clientWidth ||
            parent.scrollHeight > parent.clientHeight
          );
        }
      }
      return false;
    };

    const getFullText = (el: Element): string => {
      const label = el.closest('.nodeLabel, .edgeLabel, .label');
      if (label) return label.textContent?.trim() || '';
      return el.textContent?.trim() || '';
    };

    const show = (e: MouseEvent) => {
      const target = e.target as Element;
      const textEl =
        target.closest('.nodeLabel, .edgeLabel, .label') ||
        (target instanceof SVGTextElement ? target : null);
      if (!textEl) return;

      const wrapper =
        textEl.closest('.nodeLabel, .edgeLabel, .label') || textEl;
      if (!isOverflowing(wrapper)) return;

      const fullText = getFullText(wrapper);
      if (!fullText) return;

      applyTheme();
      tooltip.textContent = fullText;
      tooltip.style.opacity = '1';
    };

    const move = (e: MouseEvent) => {
      if (tooltip.style.opacity === '0') return;
      const x = Math.min(e.clientX + 12, window.innerWidth - 340);
      const y = e.clientY + 16;
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
    };

    const hide = () => {
      tooltip.style.opacity = '0';
    };

    node.addEventListener('mouseover', show);
    node.addEventListener('mousemove', move);
    node.addEventListener('mouseout', hide);

    // eslint-disable-next-line consistent-return
    return () => {
      node.removeEventListener('mouseover', show);
      node.removeEventListener('mousemove', move);
      node.removeEventListener('mouseout', hide);
      tooltip.remove();
    };
  }, []);

  if (error) {
    return (
      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
        Diagram error: {error}
      </div>
    );
  }

  const wrapperClass = clsx(
    'mdx-mermaid',
    'not-prose my-6 flex justify-center overflow-x-auto rounded-xl',
    'border border-divider-light bg-slate-50 p-6',
    'dark:border-divider-dark dark:bg-slate-900/50'
  );

  if (svg) {
    return (
      <div
        ref={attachTooltips}
        className={wrapperClass}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: svg }}
      />
    );
  }

  return (
    <div ref={containerRef} className={wrapperClass}>
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-slate-400 border-t-transparent" />
        Loading diagram...
      </div>
    </div>
  );
}

export default Mermaid;
