import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Utterances from './Utterances';
import 'twin.macro';

const Comments = () => {
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
    <div tw="mt-6">
      <Utterances repo={repo} ref={ref}/>
    </div>
  );
};

export default Comments;
