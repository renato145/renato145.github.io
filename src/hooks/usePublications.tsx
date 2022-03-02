import { graphql, useStaticQuery } from 'gatsby';
import { PublicationsAll } from '../Types';

export const usePublications = () => {
  const publications = useStaticQuery<PublicationsAll>(
    graphql`
      query {
        allPublicationsJson {
          nodes {
            authors
            conference
            doi
            title
            year
          }
        }
      }
    `
  ).allPublicationsJson.nodes;

  return publications;
};
