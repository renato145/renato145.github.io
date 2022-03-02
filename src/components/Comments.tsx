import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Utterances from './Utterances';
import { GraphqlSite } from '../Types';

export const Comments: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const repo = useStaticQuery<GraphqlSite>(
    graphql`
      query {
        site {
          siteMetadata {
            git
          }
        }
      }
    `
  ).site.siteMetadata.git;

  return (
    <div className="mt-6">
      <Utterances repo={repo} ref={ref} />
    </div>
  );
};
