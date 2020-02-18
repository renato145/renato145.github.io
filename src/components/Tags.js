import React, { useState, useEffect } from 'react';
import Experiments, { gitRepos } from './Experiments';
import { Spinner } from 'react-bootstrap';

const Tags = ({ tag }) => {
  const [ tagRepos, setTagRepos ] = useState();
  useEffect(() => { 
    setTagRepos(
      gitRepos
        .filter(d => d.tags)
        .filter(({ tags }) => tags.indexOf(tag) >= 0)
    );
  }, [ tag ]);
  console.log(tagRepos);

  return (
    <>
      { typeof tagRepos === 'undefined'
        ? (
          <Spinner animation='border' />
        )
        : (
          tagRepos.length > 0
            ? <Experiments customRepos={tagRepos} />
            : <p>No results found for tag "{tag}"...</p>
        )
      }
    </>
  );
};

export default Tags;
