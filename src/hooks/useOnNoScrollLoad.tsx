import { useCallback, useEffect } from 'react';
import { throttle } from 'lodash';

export const useOnNoScrollLoad = (cb: () => void, observe: any) => {
  const throttleCb = useCallback(
    throttle(() => {
      cb();
    }, 200),
    [cb]
  );

  useEffect(() => {
    if (document.documentElement.scrollHeight === window.innerHeight){
      throttleCb();
    }
  }, [throttleCb, observe]);
};
