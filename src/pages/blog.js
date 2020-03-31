import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

const BlogIndex = ({ data, location }) => {
  const title = 'Blog';
  const posts = data.allMdx.edges;

  return (
    <Layout
      location={location}
      title={title}
      // description={title}
      headerConfig={{ title }}
    >
      <Posts posts={posts} />
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
`;
