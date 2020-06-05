import React from 'react';
import { TagList } from './TagList';

export const Header = ({ title, description, tags }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header className="container">
      <div>
        <h1>{title}</h1>
        <p className="pl-2 text-gray-600 text-sm">
          {description}
          <TagList tags={tags} prefix=' - ' />
        </p>
      </div>
      <hr />
    </header>
  );
};
