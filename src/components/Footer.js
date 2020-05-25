import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import 'twin.macro';

const Footer = () => {
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
    <footer tw="container">
      <hr />
      <div tw="flex justify-center">
        <div tw="px-4">
          <a href={`mailto:${mail}`}>{mail}</a>
        </div>
        <div tw="px-4">
          <a href={`https://twitter.com/${social.twitter}`} target="_black">
            Twitter
          </a>
        </div>
        <div tw="px-4">
          <a href={`https://github.com/${social.github}`} target="_black">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
