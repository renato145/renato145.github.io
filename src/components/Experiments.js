import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GithubPreview from './GithubPreview';
import './Experiments.css';

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

const Experiments = ({ title=false }) => {
  const user = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            social {
              github
            }
          }
        }
      }
    `
  ).site.siteMetadata.social.github;

  return (
    <>
      { title && ( <h2 className='general-title'>Experiments</h2> ) }
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
        {repos.map((repo, i) => ( 
          <GithubPreview
            key={i}
            user={user}
            repo={repo}
          />
        ))}
      </div>
    </>
  );
}

export default Experiments;
