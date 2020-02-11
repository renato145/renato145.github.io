import React from 'react';
import './Header.css';

const Header = ({ location, title, description }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header className='content-header'>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <hr />
    </header>
  );
};

export default Header;
