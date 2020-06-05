import React from 'react';
import { TagList } from './TagList';

export const Header = ({ title, description, tags }) => {
  return (
    <header>
      <div>
        <h1 className="font-medium">{title}</h1>
        <div className="pl-2 flex text-gray-600 text-sm">
          <p>{description}</p>
          {tags && (
            <>
              <p className="px-1">-</p>
              <TagList tags={tags} />
            </>
          )}
        </div>
      </div>
      <hr className="mt-2" />
    </header>
  );
};
