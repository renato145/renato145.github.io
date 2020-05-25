import React, { useState } from 'react';
import GithubPreview from './GithubPreview';
import 'twin.macro';
import { LinkButton } from './LinkButton';
import { useGitRepos } from './useGitRepos';

const Experiments = ({
  title = false,
  showLimit = 6,
  showLoadMore = true,
  loadMoreText = 'Load more',
  tag,
}) => {
  const gitRepos = useGitRepos({ tag });
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
        <div tw="mr-2 text-right">
          <LinkButton onClick={() => setLimit((limit) => limit + showLimit)}>
            {loadMoreText}
          </LinkButton>
        </div>
      )}
      {gitRepos.length === 0 && <div>...</div>}
    </>
  );
};

export default Experiments;
