import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export const Footer = () => {
  const { mail, social } = useStaticQuery(
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
    <footer className="container">
      <hr />
      <div className="flex flex-wrap justify-center">
        <div className="px-4">
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <div className="px-4">
          <a href={`https://twitter.com/${social.twitter}`} target="_black">
            Twitter
          </a>
        </div>
        <div className="px-4">
          <a href={`https://github.com/${social.github}`} target="_black">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
