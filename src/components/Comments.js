import React, { useRef } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Utterances from './Utterances';
import './Comments.css';

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
    <div className='comments-container'>
      <Utterances repo={repo} ref={ref}/>
    </div>
  );
};

export default Comments;
