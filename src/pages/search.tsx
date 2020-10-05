import { PageProps } from 'gatsby';
import React from 'react';
import { Layout } from '../components/Layout';
import { Search } from '../components/Search';

const SearchPage: React.FC<PageProps> = ({ location }) => {
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
