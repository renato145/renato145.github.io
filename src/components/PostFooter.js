import React from 'react';
import { Link } from 'gatsby';

export const PostFooter = ({ previous, next, ...props }) => {
  return (
    <div {...props}>
      <div>
      {previous && (
          <Link to={previous.fields.slug} rel='prev'>
            ← {previous.frontmatter.title}
          </Link>
      )}
      </div>
      <div>
      {next && (
          <Link to={next.fields.slug} rel='next'>
            {next.frontmatter.title} →
          </Link>
      )}
      </div>
    </div>
  );
};
