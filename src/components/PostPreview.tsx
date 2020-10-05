import React, { HTMLProps } from 'react';
import { Link } from 'gatsby';
import { TagList } from './TagList';
import { MdxNode } from './Types';

interface Props extends HTMLProps<HTMLDivElement> {
  node: MdxNode;
}

export const PostPreview: React.FC<Props> = ({ node, ...props }) => {
  const postTitle = node.frontmatter.title || node.fields.slug;
  const tags = node.frontmatter.tags;

  return (
    <div {...props}>
      <div>
        <Link to={node.fields.slug} className="text-xl font-medium">
          {postTitle}
        </Link>
      </div>
      <div className="flex text-xs text-gray-600">
        <p>{node.frontmatter.date}</p>
        <p className="px-1">-</p>
        <TagList tags={tags} />
      </div>
      <p
        className="mt-1"
        dangerouslySetInnerHTML={{
          __html: node.frontmatter.description || node.excerpt,
        }}
      />
    </div>
  );
};
