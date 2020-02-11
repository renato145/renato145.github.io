import React from 'react';
import Layout from '../components/Layout';

const DefaultPage = ({ location }) => {
  const title = 'Experiments';

  return (
    <Layout
      location={location}
      title={title}
      description='Playground'
      headerConfig={{ title }}
    ></Layout>
  );
};

export default DefaultPage;
