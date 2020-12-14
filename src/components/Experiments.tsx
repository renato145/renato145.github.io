import React, { HTMLProps, useCallback, useRef, useState } from 'react';
import { GithubPreview } from './GithubPreview';
import { LinkButton } from './LinkButton';
import { useGitRepos } from '../hooks/useGitRepos';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'title'> {
  title?: boolean;
  showLimit?: number;
  showLoadMore?: boolean;
  loadMoreText?: string;
  autoLoadMore?: boolean;
  tag?: string;
}

export const Experiments: React.FC<Props> = ({
  title = false,
  showLimit = 6,
  showLoadMore = true,
  loadMoreText = 'Load more',
  autoLoadMore = true,
  tag,
  ...props
}) => {
  const gitRepos = useGitRepos({ tag });
  const [limit, setLimit] = useState(showLimit);
  const visibleRepos = gitRepos.slice(0, limit || gitRepos.length);
  const increaseLimit = useCallback(() => {
    if (limit < gitRepos.length) setLimit((limit) => limit + showLimit);
  }, [limit, gitRepos.length, showLimit]);
  const ref = useRef<HTMLDivElement>(null);
  useIntersectionObserver({
    target: ref,
    onIntersect: increaseLimit,
    enabled: autoLoadMore,
  });

  return (
    <div {...props}>
      {title && <h2 className="font-medium">Experiments</h2>}
      <div className="mt-2 grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {visibleRepos.map((repo, i) => (
          <GithubPreview key={i} data={repo} className="flex" />
        ))}
      </div>
      {showLoadMore && visibleRepos.length < gitRepos.length && (
        <div ref={ref} className="mr-4 text-right">
          <LinkButton onClick={increaseLimit}>{loadMoreText}</LinkButton>
        </div>
      )}
      {gitRepos.length === 0 && <div>...</div>}
    </div>
  );
};
