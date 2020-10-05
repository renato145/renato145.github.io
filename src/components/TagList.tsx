import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { HTMLProps } from './utils';

interface Props extends HTMLProps<HTMLDivElement> {
  tags: string[],
  linkClassName?: string,
};

export const TagList: React.FC<Props> = ({ tags, linkClassName, ...props }) => {
  if (tags === null || typeof tags === 'undefined') return <></>;

  if (tags.length === 0) return <></>;

  return (
    <div {...props}>
      {tags.sort().map((tag, i) => (
        <Link
          to={`/tags/${kebabCase(tag)}`}
          className={`text-gray-600 hover:text-gray-800 ${ linkClassName ?? '' }`}
          key={i}
        >
          {`${tag} `}
        </Link>
      ))}
    </div>
  );
};
