import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Search } from '../components/Search';

const SearchPage = ({ data, location }) => {
  const title = 'Search';

  return (
    <Layout
      location={location}
      title=""
      // description="some description"
      headerConfig={{ title}}
    >
      <Search />
    </Layout>
  );
};

export default SearchPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
