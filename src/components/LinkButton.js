import React from 'react';

export const LinkButton = ({ children, ...props }) => (
  <button
    className="tw-text-blue-600 hover:tw-text-blue-800 tw-transition tw-duration-150 tw-ease-in-out hover:tw-underline focus:tw-outline-none"
    {...props}
  >
    {children}
  </button>
);
