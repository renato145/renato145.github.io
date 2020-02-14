import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Experiments from '../components/Experiments';

const Index = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata;

  return (
    <Layout
      location={location}
      title={title}
      description={description}
      headerConfig={{ title: 'Home' }}
    >
      <Posts title />
      <hr />
      <Experiments title />
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
