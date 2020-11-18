import { graphql, useStaticQuery } from 'gatsby';
import { PresentationsAll } from '../components/Types';

export const usePresentations = () => {
  const presentations = useStaticQuery<PresentationsAll>(
    graphql`
      query {
        allPresentationsJson {
          nodes {
            date
            text
          }
        }
      }
    `
  ).allPresentationsJson.nodes;

  return presentations;
};
