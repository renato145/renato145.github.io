import React, { HTMLProps, useState } from 'react';
import { GithubPreview } from './GithubPreview';
import { LinkButton } from './LinkButton';
import { useGitRepos } from './useGitRepos';

interface Props extends Omit<HTMLProps<HTMLDivElement>, "title"> {
  title?: boolean;
  showLimit?: number;
  showLoadMore?: boolean;
  loadMoreText?: string;
  tag?: string;
}

export const Experiments: React.FC<Props> = ({
  title = false,
  showLimit = 6,
  showLoadMore = true,
  loadMoreText = 'Load more',
  tag,
  ...props
}) => {
  const gitRepos = useGitRepos({ tag });
  const [limit, setLimit] = useState(showLimit);
  const visibleRepos = gitRepos.slice(0, limit || gitRepos.length);

  return (
    <div {...props}>
      {title && <h2 className="font-medium">Experiments</h2>}
      <div className="mt-2 flex flex-wrap items-stretch">
        {visibleRepos.map((repo, i) => (
          <GithubPreview
            key={i}
            data={repo}
            className="flex flex-auto p-2 md:max-w-1/2 xl:max-w-1/3"
          />
        ))}
      </div>
      {showLoadMore && visibleRepos.length < gitRepos.length && (
        <div className="mr-4 text-right">
          <LinkButton onClick={() => setLimit((limit) => limit + showLimit)}>
            {loadMoreText}
          </LinkButton>
        </div>
      )}
      {gitRepos.length === 0 && <div>...</div>}
    </div>
  );
};
