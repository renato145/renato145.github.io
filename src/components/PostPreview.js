import React from 'react';
import { Link } from 'gatsby';
import TagList from './TagList';

export const PostPreview = ({ node }) => {
  const postTitle = node.frontmatter.title || node.fields.slug;
  const tags = node.frontmatter.tags;

  return (
    <article className="tw-mb-4">
      <header className="tw-mb-1">
        <h4 className="tw-mb-0">
          <Link to={node.fields.slug}>{postTitle}</Link>
        </h4>
        <small className="tw-text-gray-600">
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
