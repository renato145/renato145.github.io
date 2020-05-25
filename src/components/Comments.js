import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Utterances from './Utterances';

export const Comments = () => {
  const ref = useRef();
  const repo = useStaticQuery(
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
    <div className="tw-mt-6">
      <Utterances repo={repo} ref={ref}/>
    </div>
  );
};
