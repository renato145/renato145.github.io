import React from 'react';
import Layout from '../components/Layout';
import { SearchGraph } from '../components/SearchGraph';
import styled from 'styled-components';

const SearchGraphPage = ({ location }) => {
  const title = 'Search Graph';

  return (
    <Layout
      location={location}
      title=""
      // description="some description"
      headerConfig={{ title }}
    >
      <SearchGraph />
    </Layout>
  );
};

export default SearchGraphPage;
