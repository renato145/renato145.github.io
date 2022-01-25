import React, { HTMLProps } from 'react';

interface Props extends Omit<HTMLProps<HTMLButtonElement>, "className" | "type"> {};

export const LinkButton: React.FC<Props> = ({ children, ...props }) => (
  <button
    className="p-0 bg-opacity-0 hover:bg-opacity-0 active:bg-opacity-0 focus:shadow-none text-sky-600 hover:text-sky-800"
    {...props}
  >
    {children}
  </button>
);
