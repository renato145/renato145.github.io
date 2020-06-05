import React from 'react';

export const LinkButton = ({ children, ...props }) => (
  <button
    className="text-blue-600 hover:text-blue-800 transition duration-150 ease-in-out focus:outline-none"
    {...props}
  >
    {children}
  </button>
);
