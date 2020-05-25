import React from 'react';
import 'twin.macro';

const Content = ({ children }) => {
  return (
    <main tw="container">{children}</main>
  );
};

export default Content;
