import { animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface CountUpProps {
  from: number;
  to: number;
  decimals?: number;
}

function CountUp({ from, to, decimals = 0 }: CountUpProps) {
  const nodeRef = useRef(null);
  const format = (value: number) =>
    value.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });

  useEffect(() => {
    const node = nodeRef.current;

    const controls = animate(from, to, {
      duration: 1.4,
      ease: 'easeOut',
      onUpdate(value) {
        node.textContent = format(value);
      },
    });

    return () => controls.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps -- format only depends on decimals
  }, [from, to, decimals]);

  return <span ref={nodeRef}>{format(to)}</span>;
}

export default CountUp;
