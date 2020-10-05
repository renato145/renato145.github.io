export type GraphqlSite = {
  site: {
    siteMetadata: {
      author: string;
      description: string;
      git: string;
      mail: string;
      shortName: string;
      siteUrl: string;
      social: {
        github: string;
        linkedin: string;
        twitter: string;
      };
      title: string;
    };
  };
};

export type GraphqlRepo = {
  name: string;
  showName?: string;
  tags: string[];
};

export type GraphqlRepos = {
  allGitReposJson: {
    nodes: GraphqlRepo[];
  }
};

export type GraphqlGit = {
  name: string;
  homepageUrl: string | null;
  url: string;
  updatedAt: string;
  openGraphImageUrl: string;
  description: string | null;
};

export type GraphqlGitAll = {
  github: {
    repositoryOwner: {
      repositories: {
        nodes: GraphqlGit[];
      }
    }
  }
};

export type GraphqlGithubAll = GraphqlRepos & GraphqlGitAll;
