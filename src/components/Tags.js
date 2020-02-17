import React, { useMemo } from 'react';
import Experiments, { gitRepos } from './Experiments';

const Tags = ({ tag }) => {
  const tagRepos = useMemo(() => {
    return gitRepos.filter(d => d.tags)
                .filter(({ tags }) => tags.indexOf(tag) >= 0);
  });

  return (
    <>
      { tagRepos.length > 0
        ? <Experiments customRepos={tagRepos} />
        : <p>No results found for tag "{tag}"...</p>
      }
    </>
  );
};

export default Tags;
