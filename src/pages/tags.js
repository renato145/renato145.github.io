import React, { useMemo } from 'react';
import Layout from '../components/Layout';
import Tags from '../components/Tags';

const TagsIndex = ({ location }) => {
  console.log(location);
  const tag = useMemo(() => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get('tag');
  });

  return (
    <Layout
      location={location}
      title={tag}
      // description='some description'
      headerConfig={{ tag }}
    >
      <Tags tag={tag} />
    </Layout>
  );
};

export default TagsIndex;
