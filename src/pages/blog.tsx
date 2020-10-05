import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/Layout';
import { Posts } from '../components/Posts';
import { MdxAllNodes } from '../components/Types';

interface Props extends PageProps {
  data: MdxAllNodes;
}

const BlogIndex: React.FC<Props> = ({ data, location }) => {
  const title = 'Blog';
  const posts = data.allMdx.edges;

  return (
    <Layout
      location={location}
      title={title}
      // description={title}
      headerConfig={{ title }}
    >
      <Posts posts={posts} showLimit={9} />
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
