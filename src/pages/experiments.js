import React from 'react';
import { Layout } from '../components/Layout';
import { Experiments } from '../components/Experiments';

const ExperimentIndex = ({ location }) => {
  const title = 'Experiments';

  return (
    <Layout
      location={location}
      title={title}
      description='Playground, experiments, random codes...'
      headerConfig={{ title }}
    >
      <Experiments showLimit={9} />
    </Layout>
  );
};

export default ExperimentIndex;
