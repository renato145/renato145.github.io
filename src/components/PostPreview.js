import React from 'react';
import { Link } from 'gatsby';
import TagList from './TagList';

const PostPreview = ({ node }) => {
  const postTitle = node.frontmatter.title || node.fields.slug;
  const tags = node.frontmatter.tags;

  return (
    <article className='mb-4'>
      <header className='mb-1'>
        <h3 className='mb-0'>
          <Link to={node.fields.slug}>
            {postTitle}
          </Link>
        </h3>
        <small className='text-muted'>
          {node.frontmatter.date}
          <TagList tags={tags} prefix=' - ' />
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
