import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

const Index = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout
      location={location}
      title={title}
      description={description}
      headerConfig={{ title: 'Home' }}
    >
      <Posts />
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
  }
`;
