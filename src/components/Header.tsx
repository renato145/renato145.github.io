import React from 'react';
import { TagList } from './TagList';

interface Props {
  title: string;
  description?: string;
  tags?: string[];
}

export const Header: React.FC<Props> = ({ title, description, tags }) => {
  return (
    <header>
      <div>
        <h1 className="font-medium">{title}</h1>
        <div className="pl-1 flex text-gray-600 text-sm">
          {description && <p>{description}</p>}
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
