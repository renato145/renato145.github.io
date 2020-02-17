import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

const BlogIndex = ({ location }) => {
  const title = 'Blog';

  return (
    <Layout
      location={location}
      title={title}
      // description={title}
      headerConfig={{ title }}
    >
      <Posts />
    </Layout>
  );
};

export default BlogIndex;
