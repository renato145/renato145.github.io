import { graphql, useStaticQuery } from 'gatsby';
import { ExperienceAll } from '../components/Types';

export const useExperience = () => {
  const experience = useStaticQuery<ExperienceAll>(
    graphql`
      query {
        allExperienceJson {
          nodes {
            place
            position
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
