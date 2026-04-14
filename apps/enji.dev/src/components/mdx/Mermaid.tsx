import clsx from 'clsx';
import { useEffect, useRef, useState } from 'react';

interface MermaidProps {
  chart: string;
}

let idCounter = 0;

function Mermaid({ chart }: MermaidProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [error, setError] = useState<string>('');
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
        ref={containerRef}
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
