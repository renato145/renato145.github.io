import React from 'react';
import { graphql } from 'gatsby';
import { Layout } from '../components/Layout';

const DefaultPage = ({ data, location }) => {
  const title = data.site.siteMetadata.title;

  return (
    <Layout
      location={location}
      title={title}
      description="some description"
      headerConfig={{ title: 'header' }}
    ></Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
