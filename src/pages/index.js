import React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/Layout';

const Index = ({ data, location }) => {
  const { title, description } = data.site.siteMetadata;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout
      location={location}
      title={title}
      description={description}
      headerConfig={{ title: 'Home' }}
    >
      <h2>Posts</h2>
      {posts.map(({ node }) => {
        const postTitle = node.frontmatter.title || node.fields.slug;
        return (
          <article key={node.fields.slug}>
            <header>
              <h3>
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {postTitle}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description || node.excerpt,
                }}
              />
            </section>
          </article>
        );
      })}
    </Layout>
  );
};

export default Index;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
