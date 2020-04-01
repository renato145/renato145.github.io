import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';

const TagList = ({ tags, prefix }) => {
  if (tags === null || typeof tags === 'undefined') return <></>;

  if (tags.lenght === 0) return <></>;

  return (
    <>
      {prefix}
      {tags.sort().map((tag, i) => (
        <Link
          to={`/tags/${kebabCase(tag)}`}
          className="text-muted mb-2 card-subtitle"
          key={i}
        >
          {`${tag} `}
        </Link>
      ))}
    </>
  );
};

export default TagList;
