import React, { HTMLProps } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GraphqlSite } from './Types';

export const Footer: React.FC<HTMLProps<HTMLDivElement>> = ({ ...props }) => {
  const { mail, social } = useStaticQuery<GraphqlSite>(
    graphql`
      query {
        site {
          siteMetadata {
            mail
            social {
              github
              twitter
            }
          }
        }
      }
    `
  ).site.siteMetadata;

  return (
    <div {...props}>
      <footer className="w-full">
        <hr />
        <div className="mt-2 flex flex-col flex-wrap items-center justify-center sm:flex-row">
          <div className="px-4">
            <a href={`mailto:${mail}`}>{mail}</a>
          </div>
          <div className="px-4">
            <a
              href={`https://twitter.com/${social.twitter}`}
              target="_black"
              rel="noopener"
            >
              Twitter
            </a>
          </div>
          <div className="px-4">
            <a
              href={`https://github.com/${social.github}`}
              target="_black"
              rel="noopener"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
