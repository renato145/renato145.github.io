import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/Layout';
import { Posts } from '../components/Posts';
import { Experiments } from '../components/Experiments';
import { GraphqlSite, MdxAllNodes } from '../components/Types';

interface Props extends PageProps {
  data: GraphqlSite & MdxAllNodes;
}

const Index: React.FC<Props> = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata;
  const posts = data.allMdx.edges;

  return (
    <Layout
      location={location}
      title={title}
      description={description}
      headerConfig={{ title: 'Home' }}
    >
      <Posts posts={posts} autoLoadMore={false} title />
      <hr className="mt-6" />
      <Experiments className="mt-6" title />
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
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
