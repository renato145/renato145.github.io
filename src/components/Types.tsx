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
  };
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
      };
    };
  };
};

export type GraphqlGithubAll = GraphqlRepos & GraphqlGitAll;

export type RepoInfo = GraphqlGit &
  GraphqlRepo & {
    imgUrl?: string;
  };

export type MdxNode = {
  fields: {
    slug: string;
  };
  frontmatter: {
    description: string;
    tags: string[];
    title: string;
    date: string;
  };
  headings: {
    depth: number;
    value: string;
  };
  excerpt: string;
  tableOfContents: {
    items: {
      url: string;
      title: string;
    }[];
  };
  timeToRead: number;
  wordCount: {
    paragraphs: number;
    sentences: number;
    words: number;
  };
};

export type NodesOf<T> = {
  node: T;
}[];

export type MdxAllNodes = {
  allMdx: {
    edges: NodesOf<MdxNode>;
  };
};

export type Publication = {
  authors: string;
  conference: string;
  doi: string;
  title: string;
  year: number;
};

export type PublicationsAll = {
  allPublicationsJson: { nodes: Publication[] };
};

export type Experience = {
  place: string;
  position: string;
  dateIn: string;
  dateOut: string;
};

export type ExperienceAll = {
  allExperienceJson: { nodes: Experience[] };
};

export type Education = {
  university: string;
  degree: string;
  yearIn: number;
  yearOut: number;
  country: string;
  pending?: boolean;
};

export type EducationAll = {
  allEducationJson: { nodes: Education[] };
};
