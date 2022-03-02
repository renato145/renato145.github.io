import { graphql, useStaticQuery } from 'gatsby';
import { EducationAll } from '../Types';

export const useEducation = () => {
  const education = useStaticQuery<EducationAll>(
    graphql`
      query {
        allEducationJson {
          nodes {
            university
            degree
            yearIn
            yearOut
            country
            pending
          }
        }
      }
    `
  ).allEducationJson.nodes;

  return education;
};
