import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { unCamelCase, singleSpace, titleCase } from './utils';

const gitRepos = [
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

const formatName = name =>
  titleCase(singleSpace(unCamelCase(name.replace(/[-_]/g, ' '))));

export const useGitRepos = () => {
  const allRepos = useStaticQuery(
    graphql`
      query {
        github {
          repositoryOwner(login: "renato145") {
            repositories(
              last: 100
              orderBy: { field: UPDATED_AT, direction: DESC }
            ) {
              nodes {
                name
                homepageUrl
                url
                updatedAt
                openGraphImageUrl
                description
              }
            }
          }
        }
      }
    `
  ).github.repositoryOwner.repositories.nodes;
  const repos = useMemo(() => {
    let data = [];
    gitRepos.forEach(d => {
      const repoInfo = { ...allRepos.find(o => o.name === d.name) };
      const repo = Object.assign(repoInfo, d);
      const url = repo['openGraphImageUrl'];
      if (url.indexOf('https://repository-images') > -1) repo['imgUrl'] = url;
      repo['name'] = repo['showName'] ? repo['showName'] : formatName(repo['name'])
      console.log(repo);
      data.push(repo);
    });
    return data;
  }, []);

  return repos;
};
