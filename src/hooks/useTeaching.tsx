import { graphql, useStaticQuery } from 'gatsby';
import { TeachingAll } from '../Types';

export const useTeaching = () => {
  const teaching = useStaticQuery<TeachingAll>(
    graphql`
      query {
        allTeachingJson {
          nodes {
            place
            dateIn
            dateOut
            details
          }
        }
      }
    `
  ).allTeachingJson.nodes;

  return teaching;
};
