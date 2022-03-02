import { graphql, useStaticQuery } from 'gatsby';
import { NewsAll } from '../Types';

export const useNews = () => {
  const news = useStaticQuery<NewsAll>(
    graphql`
      query {
        allNewsJson {
          nodes {
            date
            text
          }
        }
      }
    `
  ).allNewsJson.nodes;

  return news;
};
