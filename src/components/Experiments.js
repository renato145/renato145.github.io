import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GithubPreview from './GithubPreview';
import './Experiments.css';
import { Button } from 'react-bootstrap';

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

const Experiments = ({
  title=false,
  showLimit=6,
  showLoadMore=true,
  loadMoreTitle='Load more',
}) => {
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
  const [ limit, setLimit ] = useState(showLimit);
  const visibleRepos = repos.slice(0, limit || repos.length);

  return (
    <>
      { title && ( <h2 className='general-title'>Experiments</h2> ) }
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3'>
        {visibleRepos.map((repo, i) => ( 
          <GithubPreview
            key={i}
            user={user}
            repo={repo}
          />
        ))}
      </div>
      {showLoadMore && visibleRepos.length < repos.length && (
        <div className='experiments-load-more'>
          <Button variant='link' onClick={() => setLimit(limit => limit+showLimit)}>
            {loadMoreTitle}
          </Button>
        </div>
      )}
    </>
  );
}

export default Experiments;
