import React, { HTMLProps } from 'react';
import { Link } from 'gatsby';
import { MdxNode } from '../Types';

interface Props extends HTMLProps<HTMLDivElement> {
  previous?: MdxNode;
  next?: MdxNode;
}

export const PostFooter: React.FC<Props> = ({ previous, next, ...props }) => {
  return (
    <div {...props}>
      <div>
        {previous && (
          <Link to={previous.fields.slug} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </div>
      <div>
        {next && (
          <Link to={next.fields.slug} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </div>
    </div>
  );
};
