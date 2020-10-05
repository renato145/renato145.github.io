import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Utterances from './Utterances';

type GitProps = {
  site: { siteMetadata: { git: string } };
};

export const Comments: React.FC = () => {
  const ref = useRef();
  const repo = useStaticQuery<GitProps>(
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
