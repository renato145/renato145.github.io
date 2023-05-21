import { graphql, useStaticQuery } from 'gatsby';
import { useMemo } from 'react';
import { unCamelCase, singleSpace, titleCase } from '../utils';
import { GraphqlGit, GraphqlGithubAll, RepoInfo } from '../Types';

const formatName: (string) => string = (name) =>
  titleCase(singleSpace(unCamelCase(name.replace(/[-_]/g, ' '))));

interface Props {
  tag?: string;
  name?: string;
}

export const useGitRepos = ({ tag, name }: Props) => {
  const data = useStaticQuery<GraphqlGithubAll>(
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
              orderBy: { field: UPDATED_AT, direction: ASC }
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

  const repos: RepoInfo[] = useMemo(() => {
    let data: any = [];
    gitRepos.forEach((d) => {
      if (name && d.name !== name) return;
      if (tag && d.tags.indexOf(tag) === -1) return;
      const repoInfo = {
        ...allRepos.find((o) => o.name === d.name),
      } as GraphqlGit;
      const repo = Object.assign(repoInfo, d);
      const url = repo['openGraphImageUrl'] ?? '';
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
