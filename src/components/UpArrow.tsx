import React, { useCallback, useState } from 'react';

export const UpArrow: React.FC = () => {
  const [show, setShow] = useState(false);

  const onScroll = useCallback(() => {
    if (window.scrollY > 0) setShow(true);
    else setShow(false);
  }, [setShow]);

  const ref = useCallback(
    (node) => {
      if (node) window.addEventListener('scroll', onScroll);
      else window.removeEventListener('scroll', onScroll);
    },
    [onScroll]
  );

  const goTop = useCallback(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div
      ref={ref}
      className={[
        show ? 'fixed' : 'hidden',
        'bottom-0 right-0 mr-1 mb-4 sm:mr-6',
        'xl:w-18 xl:h-18 h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16',
        'bg-slate-600 text-gray-200 opacity-25 hover:bg-slate-300 hover:text-gray-700 hover:opacity-50',
        'rounded-full shadow transition-all duration-500',
      ].join(' ')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        className="fill-current"
        onClick={goTop}
      >
        <title>Go to top</title>
        <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
      </svg>
    </div>
  );
};
