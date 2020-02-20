import React, { useState, useEffect } from 'react';
import Posts from './Posts';
import Experiments, { gitRepos } from './Experiments';

const Tags = ({ tag }) => {
  const [ tagRepos, setTagRepos ] = useState([]);

  useEffect(() => { 
    setTagRepos(
      gitRepos
        .filter(d => d.tags)
        .filter(({ tags }) => tags.indexOf(tag) >= 0)
    );
  }, [ tag ]);

  return (
    <>
      <Posts tag={tag} title />
      <hr className='mb-4' />
      <Experiments customRepos={tagRepos} title />
    </>
  );
};

export default Tags;
