import { useRef, useEffect, useState, useMemo } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

export const useDimensions = () => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ro = useMemo(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0];
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      }),
    []
  );

  useEffect(() => {
    const element = ref.current;
    if (element) ro.observe(element);
    return () => ro.unobserve(element);
  }, [ro]);

  return { ref, width, height };
};
