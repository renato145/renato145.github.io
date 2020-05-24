import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { unCamelCase, singleSpace, titleCase } from './utils';

const formatName = (name) =>
  titleCase(singleSpace(unCamelCase(name.replace(/[-_]/g, ' '))));

export const useGitRepos = ({ tag, name }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allGitReposJson {
          nodes {
            name
            showName
            tags
          }
        }
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
  );
  const allRepos = data.github.repositoryOwner.repositories.nodes;
  const gitRepos = data.allGitReposJson.nodes;

  const repos = useMemo(() => {
    let data = [];
    gitRepos.forEach((d) => {
      if (name && d.name !== name) return;
      if (tag && d.tags.indexOf(tag) === -1) return;
      const repoInfo = { ...allRepos.find((o) => o.name === d.name) };
      const repo = Object.assign(repoInfo, d);
      const url = repo['openGraphImageUrl'];
      if (url.indexOf('https://repository-images') > -1) repo['imgUrl'] = url;
      repo['name'] = repo['showName']
        ? repo['showName']
        : formatName(repo['name']);
      data.push(repo);
    });

    return data;
  }, [allRepos, gitRepos, tag, name]);

  return repos;
};
