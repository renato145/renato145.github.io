import React from 'react';
import { Link } from 'gatsby';

const Header = ({ location, title, description }) => {
  const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
