// const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
const activeEnv = 'development';
console.log(`Using environment config: '${activeEnv}'`);
require('dotenv').config({
  path: `.env.${activeEnv}`,
});

const fs = require(`fs`);
const fetch = require(`node-fetch`);
const { buildClientSchema, getAuthorizationToken } = require(`graphql`);
const { createHttpLink } = require(`apollo-link-http`);

module.exports = {
  siteMetadata: {
    title: `Renato Hermoza`,
    author: `Renato Hermoza`,
    shortName: `Renato`,
    mail: `renato.hermoza@pucp.edu.pe`,
    description: `Personal portfolio / blog.`,
    siteUrl: `https://renato145.github.io`,
    git: `renato145/renato145.github.io`,
    social: {
      twitter: `renato145`,
      github: `renato145`,
      linkedin: `lala`,
    },
    gitRepos: [
      {
        name: 'fastexplorer',
        tags: ['fastai', 'reactjs', 'javascript', 'visualization', 'sockets'],
      },
      {
        name: 'gcn-js',
        tags: ['reactjs', 'javascript', 'visualization', 'graphs', 'd3'],
      },
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
        tags: [
          'pytorch',
          'graphs',
          'graph-neural-networks',
          'machine-learning',
          'python',
        ],
      },
      {
        name: 'DENN',
        showName: 'DENN',
        tags: [
          'pytorch',
          'evolutionary-algorithms',
          'machine-learning',
          'python',
        ],
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
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        fieldName: `github`,
        typeName: `GitHub`,
        createLink: () =>
          createHttpLink({
            uri: `https://api.github.com/graphql`,
            headers: {
              Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            },
            fetch,
          }),
        // createSchema: async () => {
        //   const json = JSON.parse(fs.readFileSync(`${__dirname}/github.json`))
        //   return buildClientSchema(json.data)
        // },
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `UA-119996617-1`,
    //   },
    // },
    `gatsby-plugin-feed-mdx`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Renato Hermoza`,
        short_name: `Renato`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `tags`, `description`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          Mdx: {
            title: (node) => node.frontmatter.title,
            tags: (node) => node.frontmatter.tags,
            description: (node) => node.frontmatter.description,
            slug: (node) => node.fields.slug,
          },
          GitReposJson: {
            title: (node) => node.name,
            tags: (node) => node.tags,
          },
        },
        // Optional filter to limit indexed nodes
        // filter: (node, getNode) => node.frontmatter.tags !== 'exempt',
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
