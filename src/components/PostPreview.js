import React from 'react';
import { Link } from 'gatsby';
import TagList from './TagList';
import styled from 'styled-components';

const PostTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0px;
`;

const PostPreview = ({ node }) => {
  const postTitle = node.frontmatter.title || node.fields.slug;
  const tags = node.frontmatter.tags;

  return (
    <article className="mb-4">
      <header className="mb-1">
        <PostTitle>
          <Link to={node.fields.slug}>{postTitle}</Link>
        </PostTitle>
        <small className="text-muted">
          {node.frontmatter.date}
          <TagList tags={tags} prefix=" - " />
        </small>
      </header>
      <section>
        <p
          dangerouslySetInnerHTML={{
            __html: node.frontmatter.description || node.excerpt,
          }}
        />
      </section>
    </article>
  );
};

export default PostPreview;
