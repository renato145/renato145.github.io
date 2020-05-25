import React from 'react';
import 'twin.macro';

export const LinkButton = ({ children, ...props }) => (
  <button
    tw="text-blue-600 transition duration-150 ease-in-out hover:underline hover:text-blue-800 focus:outline-none"
    {...props}
  >
    {children}
  </button>
);
