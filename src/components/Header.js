import React from 'react';
import TagList from './TagList';
import './Header.css';

const Header = ({ title, description, tags }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header className='content-header'>
      <div>
        <h1>{title}</h1>
        <p className='text-muted'>
          {description}
          <TagList tags={tags} prefix=' - ' />
        </p>
      </div>
      <hr />
    </header>
  );
};

export default Header;
