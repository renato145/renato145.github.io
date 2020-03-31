import React, { useState } from 'react';
import GithubPreview from './GithubPreview';
import './Experiments.css';
import { Button } from 'react-bootstrap';
import { useGitRepos } from './useGitRepos';

const Experiments = ({
  title = false,
  showLimit = 6,
  showLoadMore = true,
  loadMoreTitle = 'Load more',
  tag
}) => {
  const gitRepos = useGitRepos({tag});
  const [limit, setLimit] = useState(showLimit);
  const visibleRepos = gitRepos.slice(0, limit || gitRepos.length);

  return (
    <>
      {title && <h2 className="general-title">Experiments</h2>}
      <div className="row row-cols-1 row-cols-md-2">
        {visibleRepos.map((repo, i) => (
          <GithubPreview key={i} data={repo} />
        ))}
      </div>
      {showLoadMore && visibleRepos.length < gitRepos.length && (
        <div className="experiments-load-more">
          <Button
            variant="link"
            onClick={() => setLimit(limit => limit + showLimit)}
          >
            {loadMoreTitle}
          </Button>
        </div>
      )}
      {gitRepos.length === 0 && <div>...</div>}
    </>
  );
};

export default Experiments;
