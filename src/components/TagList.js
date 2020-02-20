import React from 'react';

const TagList = ({ tags, prefix }) => {
  if (tags === null || typeof tags === 'undefined') return <></>;

  if (tags.lenght === 0) return <></>;

  return (
    <>
      {prefix}
      {tags.sort().map((tag, i) => (
        <a
          href={`/tags?tag=${tag}`}
          className="text-muted mb-2 card-subtitle"
          key={i}
        >
          {`${tag} `}
        </a>
      ))}
    </>
  );
};

export default TagList;
