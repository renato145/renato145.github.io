import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GithubPreview from './GithubPreview';
import './Experiments.css';
import { Button } from 'react-bootstrap';

export const gitRepos = [
  {
    name: 'covid2019',
    tags: ['reactjs', 'javascript', 'visualization', 'covid2019', 'd3'],
  },
  {
    name: 'tfjs_test',
    tags: ['reactjs', 'machine-learning', 'tfjs', 'javascript'],
  },
  {
    name: 'show_evolution',
    tags: [
      'd3',
      'threejs',
      'reactjs',
      'evolutionary-algorithms',
      'visualization',
      'javascript',
    ],
  },
  {
    name: 'show_evolution3d',
    showName: 'Show Evolution 3D',
    tags: [
      'threejs',
      'reactjs',
      'evolutionary-algorithms',
      'visualization',
      '3d',
      'javascript',
    ],
  },
  {
    name: 'gcn',
    showName: 'GCN',
    tags: ['pytorch', 'graph-neural-networks', 'machine-learning', 'python'],
  },
  {
    name: 'DENN',
    showName: 'DENN',
    tags: ['pytorch', 'evolutionary-algorithms', 'machine-learning', 'python'],
  },
  { name: 'parallel_ex', tags: ['python', 'utilities'] },
  {
    name: 'ClassificationUncertainty',
    tags: ['pytorch', 'machine-learning', 'python'],
  },
  {
    name: 'fastai_scans',
    tags: ['pytorch', 'machine-learning', 'python', 'medical-imaging'],
  },
  {
    name: 'd3sims',
    showName: 'D3 simulations',
    tags: [
      'pytorch',
      'simulation',
      'sockets',
      'python',
      'javascript',
      'visualization',
      'd3',
    ],
  },
  {
    name: 'react_tests',
    tags: ['d3', 'reactjs', 'visualization', 'javascript', 'visualization'],
  },
  {
    name: 'stn',
    showName: 'STN',
    tags: ['pytorch', 'machine-learning', 'python'],
  },
  { name: 'peru-stats', tags: ['python', 'data-scrapping'] },
  { name: 'bayesian-opt', tags: ['pytorch', 'machine-learning', 'python'] },
  {
    name: 'waimlap2017',
    showName: 'Waimlap 2017',
    tags: ['machine-learning', 'python', 'tutorial'],
  },
  {
    name: '3D-ORGAN',
    showName: '3D-ORGAN',
    tags: ['tensorflow', '3d', 'gan', 'machine-learning', 'python'],
  },
];

const Experiments = ({
  title = false,
  showLimit = 6,
  showLoadMore = true,
  loadMoreTitle = 'Load more',
  customRepos,
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
  const [limit, setLimit] = useState(showLimit);
  const repos = customRepos || gitRepos;
  const visibleRepos = repos.slice(0, limit || repos.length);

  return (
    <>
      {title && <h2 className="general-title">Experiments</h2>}
      <div className="row row-cols-1 row-cols-md-2">
        {visibleRepos.map((repo, i) => (
          <GithubPreview key={i} user={user} repo={repo} />
        ))}
      </div>
      {showLoadMore && visibleRepos.length < repos.length && (
        <div className="experiments-load-more">
          <Button
            variant="link"
            onClick={() => setLimit(limit => limit + showLimit)}
          >
            {loadMoreTitle}
          </Button>
        </div>
      )}
      {repos.length === 0 && <div>...</div>}
    </>
  );
};

export default Experiments;
