import React, { useState } from 'react';
import { GithubPreview } from './GithubPreview';
import { LinkButton } from './LinkButton';
import { useGitRepos } from './useGitRepos';

export const Experiments = ({
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
      {title && <h2 className="mb-5">Experiments</h2>}
      <div className="flex flex-wrap items-stretch">
        {visibleRepos.map((repo, i) => (
          <GithubPreview key={i} data={repo} className="flex flex-auto p-2 md:max-w-1/2" />
        ))}
      </div>
      {showLoadMore && visibleRepos.length < gitRepos.length && (
        <div className="mr-2 text-right">
          <LinkButton onClick={() => setLimit((limit) => limit + showLimit)}>
            {loadMoreText}
          </LinkButton>
        </div>
      )}
      {gitRepos.length === 0 && <div>...</div>}
    </>
  );
};
