import { useEffect } from 'react';
import { throttle } from 'lodash';

export const useOnScrollEnd = (cb: () => void) => {
  useEffect(() => {
    const throttleCb = throttle(cb, 200);
    const f = () => {
      const scrollNode = document.scrollingElement || document.documentElement;
      const scrollContainerBottomPosition = Math.round(
        scrollNode.scrollTop + window.innerHeight
      );
      const scrollPosition = Math.round(scrollNode.scrollHeight);

      if (scrollPosition === scrollContainerBottomPosition) {
        throttleCb();
      }
    };
    window.addEventListener('scroll', f);

    return () => {
      window.removeEventListener('scroll', f);
    };
  }, [cb]);
};
