import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

interface Props {
  tags: string[],
  className?: string,
};

export const TagList: React.FC<Props> = ({ tags, className, ...props }) => {
  if (tags === null || typeof tags === 'undefined') return <></>;

  if (tags.length === 0) return <></>;

  return (
    <div {...props}>
      {tags.sort().map((tag, i) => (
        <Link
          to={`/tags/${kebabCase(tag)}`}
          className={`text-gray-600 hover:text-gray-800 ${ className ?? '' }`}
          key={i}
        >
          {`${tag} `}
        </Link>
      ))}
    </div>
  );
};
