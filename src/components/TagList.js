import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

export const TagList = ({ tags, prefix, className }) => {
  if (tags === null || typeof tags === 'undefined') return <></>;

  if (tags.lenght === 0) return <></>;

  return (
    <>
      {prefix}
      {tags.sort().map((tag, i) => (
        <Link
          to={`/tags/${kebabCase(tag)}`}
          className={`text-gray-600 hover:text-gray-800 ${ className ?? '' }`}
          key={i}
        >
          {`${tag} `}
        </Link>
      ))}
    </>
  );
};
