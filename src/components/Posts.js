import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import PostPreview from './PostPreview';
import { contains } from './utils';
import './Posts.css';

const Posts = ({ title = false, tag }) => {
  const posts = useStaticQuery(
    graphql`
      query {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
        ) {
          edges {
            node {
              excerpt
              fields {
                slug
              }
              frontmatter {
                date(formatString: "MMMM DD, YYYY")
                title
                description
                tags
              }
            }
          }
        }
      }
    `
  ).allMdx.edges;

  const filteredPosts = tag
    ? posts.filter(({ node }) => contains(node.frontmatter.tags, tag) )
    : typeof tag === 'undefined' ? posts : [];

  return (
    <>
      {title && <h2 className="general-title">Posts</h2>}
      {filteredPosts.map(({ node }) => (
        <PostPreview node={node} key={node.fields.slug} />
      ))}
      {filteredPosts.length === 0 && (
        <div>...</div>
      )}
    </>
  );
};

export default Posts;
