import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Experiments from '../components/Experiments';
import { graphql } from 'gatsby';

const TagsTemplate = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const posts = data.allMdx?.edges;

  return (
    <Layout
      location={location}
      title={tag}
      // description='some description'
      headerConfig={{ title: tag }}
    >
      <Posts posts={posts} title />
      <hr className="mb-4" />
      <Experiments tag={tag} title />
    </Layout>
  );
};

export default TagsTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMdx(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
