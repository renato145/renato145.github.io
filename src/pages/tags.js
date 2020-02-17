import React, { useMemo } from 'react';
import Layout from '../components/Layout';
import Tags from '../components/Tags';

const TagsIndex = ({ location }) => {
  const tag = useMemo(() => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('tag');
  }, [ location ]);

  return (
    <Layout
      location={location}
      title={tag}
      // description='some description'
      headerConfig={{ title: tag }}
    >
      <Tags tag={tag} />
    </Layout>
  );
};

export default TagsIndex;
