// const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
const activeEnv = "development"
console.log(`Using environment config: '${activeEnv}'`)
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

const fs = require(`fs`)
const fetch = require(`node-fetch`)
const { buildClientSchema, getAuthorizationToken } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)


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
}
