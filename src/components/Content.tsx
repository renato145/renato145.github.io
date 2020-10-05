import React from 'react';

export const Content: React.FC = ({ children }) => {
  return (
    <main className="w-full mt-2">{children}</main>
  );
};
