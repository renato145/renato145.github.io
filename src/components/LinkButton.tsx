import React, { HTMLProps } from 'react';

interface Props
  extends Omit<HTMLProps<HTMLButtonElement>, 'className' | 'type'> {}

export const LinkButton: React.FC<Props> = ({ children, ...props }) => (
  <button
    className="bg-opacity-0 p-0 text-sky-600 hover:bg-opacity-0 hover:text-sky-800 focus:shadow-none active:bg-opacity-0"
    {...props}
  >
    {children}
  </button>
);
