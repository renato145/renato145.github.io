import React, { useMemo } from 'react';
import { graphql, Link } from 'gatsby';
import { ascending } from 'd3';
import moment from 'moment';
import kebabCase from 'lodash/kebabCase';
import Layout from '../components/Layout';
import Posts from '../components/Posts';
import Experiments from '../components/Experiments';
import { useGitRepos } from '../components/useGitRepos';

const Tags = ({ data, location }) => {
  const title = 'Tags';
  const blogData = data.allMdx.edges;
  const gitData = useGitRepos({});

  const allTags = useMemo(() => {
    const blogTags = blogData.map(d => d.node.frontmatter.tags).flat();
    const gitTags = gitData.map(d => d.tags).flat();
    return [...new Set(blogTags.concat(gitTags))].sort(ascending);
  }, [blogData, gitData]);

  const tagsContent = useMemo(() => {
    let results = {};
    allTags.forEach(tag => {
      results[tag] = {
        blog: blogData.filter(d => d.node.frontmatter.tags.includes(tag)),
        git: gitData.filter(d => d.tags.includes(tag)),
      };
    });
    return results;
  }, [allTags, blogData, gitData]);
  console.log(tagsContent);

  return (
    <Layout
      location={location}
      title={title}
      // description={description}
      headerConfig={{ title }}
    >
      <h3>Content</h3>
      <ul>
        {allTags.map(tag => (
          <li key={tag}>
            <a href={`#${tag}`}>{tag}</a>
          </li>
        ))}
      </ul>

      <div>
        {allTags.map(tag => (
          <div key={tag}>
            <h3 id={tag}>
              <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
            </h3>
            {tagsContent[tag]['blog'] &&
              tagsContent[tag]['blog'].map(({ node }, i) => (
                <p key={i}>
                  <Link to={node.fields.slug}>
                    {node.frontmatter.title || node.fields.slug}
                  </Link>
                  <span className="text-muted">{node.frontmatter.date}</span>
                </p>
              ))}
            {tagsContent[tag]['git'] &&
              tagsContent[tag]['git'].map(
                (
                  {
                    homepageUrl,
                    url,
                    imgUrl,
                    name,
                    tags,
                    description,
                    updatedAt,
                  },
                  i
                ) => (
                  <p key={i}>
                    <a href={url}>{name}</a>
                    <span className="text-muted">
                      {updatedAt && (
                        <small className="text-muted">
                          {moment(updatedAt).calendar(null, {
                            sameElse: 'DD/MM/YYYY',
                          })}
                        </small>
                      )}
                    </span>
                  </p>
                )
              )}
          </div>
        ))}
      </div>

      {/* <h2 className="general-title">Tags</h2> */}
      {/* <Posts posts={posts} title /> */}
      {/* <Experiments title /> */}
    </Layout>
  );
};

export default Tags;

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tags
          }
        }
      }
    }
  }
`;
