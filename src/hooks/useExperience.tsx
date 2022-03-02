import { graphql, useStaticQuery } from 'gatsby';
import { ExperienceAll } from '../Types';

export const useExperience = () => {
  const experience = useStaticQuery<ExperienceAll>(
    graphql`
      query {
        allExperienceJson {
          nodes {
            place
            position
            country
            dateIn
            dateOut
            details
          }
        }
      }
    `
  ).allExperienceJson.nodes;

  return experience;
};
