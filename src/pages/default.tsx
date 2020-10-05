import React from 'react';
import { graphql, PageProps } from 'gatsby';
import { Layout } from '../components/Layout';
import { GraphqlSite } from '../components/Types';

interface Props extends PageProps {
  data: GraphqlSite;
}

const DefaultPage: React.FC<Props> = ({ data, location }) => {
  const title = data.site.siteMetadata.title;

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
  }
`;
