import React from 'react';
import TagList from './TagList';

export const Header = ({ title, description, tags }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header className="tw-container tw-mb-4">
      <div>
        <h1>{title}</h1>
        <p className="tw-pl-2 tw-text-gray-600">
          {description}
          <TagList tags={tags} prefix=' - ' />
        </p>
      </div>
      <hr />
    </header>
  );
};
