import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Layout from '../components/Layout';
import PostFooter from '../components/PostFooter';
import Comments from '../components/Comments';

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const { excerpt, frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;

  return (
    <Layout
      location={location}
      title={frontmatter.title}
      description={frontmatter.date}
      headerConfig={{
        title: frontmatter.title,
        description: frontmatter.description || excerpt,
      }}
      tags={frontmatter.tags}
    >
      <article>
        <MDXRenderer>{body}</MDXRenderer>
      </article>

      <PostFooter
        previous={previous}
        next={next}
      />

      <Comments />

    </Layout>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
  }
`;
