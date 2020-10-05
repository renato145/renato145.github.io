import React from 'react';
import { Layout } from '../components/Layout';
import { Experiments } from '../components/Experiments';
import { PageProps } from 'gatsby';

const ExperimentIndex: React.FC<PageProps> = ({ location }) => {
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
