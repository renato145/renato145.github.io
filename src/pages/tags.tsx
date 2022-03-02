import React, { useMemo } from 'react';
import { graphql, Link, PageProps } from 'gatsby';
import { ascending } from 'd3';
import kebabCase from 'lodash/kebabCase';
import { Layout } from '../components/Layout';
import { useGitRepos } from '../hooks/useGitRepos';
import { MdxAllNodes } from '../Types';
import { formatRelativeDate } from '../utils';
import './tags.css';

const formatDate = (date: string) =>
  formatRelativeDate(new Date(date), 'MMMM dd, yyyy');

interface Props extends PageProps {
  data: MdxAllNodes;
}

const Tags: React.FC<Props> = ({ data, location }) => {
  const title = 'Tags';
  const blogData = data.allMdx.edges;
  const gitData = useGitRepos({});

  const allTags = useMemo(() => {
    const blogTags = blogData.map((d) => d.node.frontmatter.tags).flat();
    const gitTags = gitData.map((d) => d.tags).flat();
    return [...new Set(blogTags.concat(gitTags))].sort(ascending);
  }, [blogData, gitData]);

  const tagsContent = useMemo(() => {
    let results = {};
    allTags.forEach((tag) => {
      results[tag] = {
        blog: blogData.filter((d) => d.node.frontmatter.tags.includes(tag)),
        git: gitData.filter((d) => d.tags.includes(tag)),
      };
    });
    return results;
  }, [allTags, blogData, gitData]);

  return (
    <Layout location={location} title={title} headerConfig={{ title }}>
      <h3 className="mt-2 font-medium">Content</h3>
      <div className="ml-2 mt-1 flex flex-wrap">
        {allTags.map((tag) => (
          <p className="w-full text-lg lg:w-1/2 xl:w-1/3" key={tag}>
            <span className="mr-1 text-base">&bull;</span>
            <a href={`#${tag}`}>{tag}</a>
          </p>
        ))}
      </div>

      <div className="mt-4 ml-4">
        <ul className="tree-root">
          {allTags.map((tag) => (
            <li key={tag}>
              <h3 id={tag} className="tag-title">
                <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
              </h3>
              <ul className="tag-content">
                {tagsContent[tag]['blog'].length > 0 && (
                  <>
                    <li>
                      <p className="tag-type text-gray-700">Blog posts</p>
                      <ul>
                        {tagsContent[tag]['blog'].map(({ node }, i) => (
                          <li key={i} className="tag-line">
                            <Link to={node.fields.slug}>
                              {node.frontmatter.title || node.fields.slug}
                            </Link>
                            <small className="text-gray-500">
                              {formatDate(node.frontmatter.date)}
                            </small>
                          </li>
                        ))}
                      </ul>
                    </li>
                  </>
                )}
                {tagsContent[tag]['git'].length > 0 && (
                  <>
                    <li>
                      <p className="tag-type text-gray-700">Github repos</p>
                      <ul>
                        {tagsContent[tag]['git'].map(
                          ({ url, name, updatedAt }, i) => (
                            <li key={i} className="tag-line">
                              <a href={url}>{name}</a>
                              {updatedAt && (
                                <small className="text-gray-500">
                                  {formatDate(updatedAt)}
                                </small>
                              )}
                            </li>
                          )
                        )}
                      </ul>
                    </li>
                  </>
                )}
              </ul>
            </li>
          ))}
        </ul>
      </div>
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
