import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

const d = 'covid2019';

const DefaultPage = ({ data, location }) => {
  const title = data.site.siteMetadata.title;
  console.log(data.github);

  return (
    <Layout
      location={location}
      title={title}
      description="some description"
      headerConfig={{ title: 'header' }}
    ></Layout>
  );
};

export default DefaultPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    github {
      repositoryOwner(login: "renato145") {
        repositories(last: 100, orderBy: {field: UPDATED_AT, direction: DESC}) {
          nodes {
            name
            homepageUrl
            url
            updatedAt
            openGraphImageUrl
            description
          }
        }
      }
    }
  }
`;
