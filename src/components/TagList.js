import React from 'react';
import { Link } from 'gatsby';
const _ = require('lodash');

const TagList = ({ tags, prefix }) => {
  if (tags === null || typeof tags === 'undefined') return <></>;

  if (tags.lenght === 0) return <></>;

  return (
    <>
      {prefix}
      {tags.sort().map((tag, i) => (
        <Link
          to={`/tags/${_.kebabCase(tag)}`}
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
