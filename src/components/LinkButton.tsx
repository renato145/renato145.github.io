import React from 'react';
import { HTMLProps } from './utils'

export const LinkButton: React.FC<HTMLProps<HTMLButtonElement>> = ({ children, ...props }) => (
  <button
    className="p-0 bg-opacity-0 hover:bg-opacity-0 active:bg-opacity-0 focus:shadow-none text-blue-600 hover:text-blue-800"
    {...props}
  >
    {children}
  </button>
);
