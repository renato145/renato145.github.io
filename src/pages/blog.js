import React from 'react';
import Layout from '../components/Layout';
import Posts from '../components/Posts';

const BlogIndex = ({ location }) => {
  return (
    <Layout
      location={location}
      title='Blog'
      // description={title}
      headerConfig={{ title: 'Blog' }}
    >
      <Posts />
    </Layout>
  );
};

export default BlogIndex;
