import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Experiments from '../components/Experiments';

const DefaultPage = ({ data, location }) => {
  const title = 'Experiments';
  const repos = [
    'show_evolution',
    'show_evolution3d',
    'd3sims',
    'react_tests',
    'gcn',
    'parallel_ex',
    'ClassificationUncertainty',
    'fastai_scans',
    'stn',
    'peru-stats',
    'bayesian-opt',
    'waimlap2017',
    '3D-ORGAN',
  ];
  const gitUser = data.site.siteMetadata.social.github;

  return (
    <Layout
      location={location}
      title={title}
      description='Playground, experiments, random codes...'
      headerConfig={{ title }}
    >
      <Experiments user={gitUser} repos={repos} />
    </Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
        }
      }
    }
  }
`;
