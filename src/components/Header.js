import React from 'react';
import TagList from './TagList';
import "twin.macro";

export const Header = ({ title, description, tags }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;

  return (
    <header tw="container mb-4">
      <div>
        <h1>{title}</h1>
        <p tw="pl-2 text-gray-600" className="">
          {description}
          <TagList tags={tags} prefix=' - ' />
        </p>
      </div>
      <hr />
    </header>
  );
};
