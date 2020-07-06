const path = require(`path`);
const _ = require('lodash');
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const tagTemplate = path.resolve('src/templates/tags.js');

  const result = await graphql(
    `
      {
        postsRemark: allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
        gitRepos: allGitReposJson {
          nodes {
            name
            showName
            tags
          }
        }
      }
    `
  );

  if (result.errors) {
    throw result.errors;
  }

  // Create blog posts pages.
  const posts = result.data.postsRemark.edges;

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.fields.slug,
      component: blogPost,
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    });
  });

  // Create tag pages.
  const blogTags = result.data.tagsGroup.group.map((d) => d.fieldValue);
  const gitTags = result.data.gitRepos.nodes.map((d) => d.tags).flat();
  const tags = [...new Set(blogTags.concat(gitTags))];

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag)}/`,
      component: tagTemplate,
      context: {
        tag: tag,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({
      node,
      getNode,
      // basePath: 'blog/',
    });
    createNodeField({
      name: `slug`,
      node,
      value: `/blog${value}`,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions, loaders, getConfig }) => {
  const wasmExtensionRegExp = /\.wasm$/;

  const config = getConfig();

  config.resolve.extensions.push('.wasm');

  config.module.rules.forEach((rule) => {
    (rule.oneOf || []).forEach((oneOf) => {
      if (oneOf.loader && oneOf.loader.indexOf('file-loader') >= 0) {
        // Make file-loader ignore WASM files
        oneOf.exclude.push(wasmExtensionRegExp);
      }
    });
  });

  // Add a dedicated loader for WASM
  config.module.rules.push({
    test: wasmExtensionRegExp,
    include: path.resolve(__dirname, 'src'),
    use: [{ loader: require.resolve('wasm-loader'), options: {} }],
  });

  // This will completely replace the webpack config with the modified object.
  actions.replaceWebpackConfig(config);
};
