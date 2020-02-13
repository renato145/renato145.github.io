import React from 'react';
import GithubPreview from './GithubPreview';
import './Experiments.css';

const Experiments = ({ user, repos }) => {
  return (
    <>
      {repos.map((repo, i) => ( 
        <>
          <GithubPreview
            key={i}
            user={user}
            repo={repo}
          />
          <hr />
        </>
      ))}
    </>
  );
}

export default Experiments;
