import React from 'react';
import { TagList } from './TagList';

export const Header = ({ title, description, tags }) => {

  return (
    <header>
      <div>
        <h1 className="font-medium">{title}</h1>
        <p className="pl-2 text-gray-600 text-sm">
          {description}
          <TagList tags={tags} prefix=' - ' />
        </p>
      </div>
      <hr className="mt-2" />
    </header>
  );
};
