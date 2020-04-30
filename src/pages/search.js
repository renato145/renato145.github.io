import React from 'react';
import Layout from '../components/Layout';
import { Search } from '../components/Search';

const SearchPage = ({ location }) => {
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
