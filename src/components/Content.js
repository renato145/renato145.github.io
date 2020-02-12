import React from 'react';
import './Content.css';

const Content = ({ children }) => {
  return (
    <main className='general-content'>{children}</main>
  );
};

export default Content;
