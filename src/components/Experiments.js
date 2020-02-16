import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import GithubPreview from './GithubPreview';
import './Experiments.css';
import { Button } from 'react-bootstrap';

const repos = [
  {name: 'show_evolution'},
  {name: 'show_evolution3d', showName: 'Show Evolution 3D'},
  {name: 'gcn', showName: 'GCN'},
  {name: 'parallel_ex'},
  {name: 'ClassificationUncertainty'},
  {name: 'fastai_scans'},
  {name: 'd3sims', showName: 'D3 simulations'},
  {name: 'react_tests'},
  {name: 'stn', showName: 'STN'},
  {name: 'peru-stats'},
  {name: 'bayesian-opt'},
  {name: 'waimlap2017', showName: 'Waimlap 2017'},
  {name: '3D-ORGAN', showName: '3D-ORGAN'},
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
      <div className='row row-cols-1 row-cols-md-2'>
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
