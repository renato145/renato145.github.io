import React from 'react';
import { Link } from 'gatsby';
import { TagList } from './TagList';

export const PostPreview = ({ node, ...props }) => {
  const postTitle = node.frontmatter.title || node.fields.slug;
  const tags = node.frontmatter.tags;

  return (
    <div {...props}>
      <div>
        <Link to={node.fields.slug} className="text-xl font-medium">
          {postTitle}
        </Link>
      </div>
      <p className="text-xs text-gray-600">
        {node.frontmatter.date}
        <TagList tags={tags} prefix=" - " />
      </p>
      <p
        className="mt-1"
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  );
};
