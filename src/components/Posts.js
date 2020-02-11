import React from 'react';
import { Link, useStaticQuery, graphql } from "gatsby"

const Posts = () => {
  const posts = useStaticQuery(
    graphql`
    query {
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
    }`
  ).allMarkdownRemark.edges;

  return (
    <>
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
    </>
  );
};

export default Posts;
