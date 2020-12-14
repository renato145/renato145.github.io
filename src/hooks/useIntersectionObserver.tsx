import React from 'react';
import { useEffect } from 'react';

interface Props extends IntersectionObserverInit {
  target: React.RefObject<HTMLElement>;
  onIntersect: () => void;
  enabled?: boolean;
}

export const useIntersectionObserver: (props: Props) => void = ({
  target,
  onIntersect,
  enabled = true,
  root,
  rootMargin = '0px',
  threshold = 1.0,
}) => {
  useEffect(() => {
    if (!enabled) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && onIntersect());
      },
      {
        root,
        rootMargin,
        threshold,
      }
    );

    const el = target && target.current;
    if (!el) return;

    observer.observe(el);

    return () => observer.unobserve(el);
  }, [target.current, enabled]);
};
