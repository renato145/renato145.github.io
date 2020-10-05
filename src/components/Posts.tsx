import React, { HTMLProps, useCallback, useEffect, useState } from 'react';
import { PostPreview } from './PostPreview';
import { LinkButton } from './LinkButton';
import { MdxNode, NodesOf } from './Types';
import { useOnScrollEnd } from '../hooks/useOnScrollEnd';
import { useOnNoScrollLoad } from '../hooks/useOnNoScrollLoad';

interface Props extends Omit<HTMLProps<HTMLDivElement>, 'title'> {
  title?: boolean;
  showLimit?: number;
  showLoadMore?: boolean;
  loadMoreText?: string;
  autoLoadMore?: boolean;
  posts: NodesOf<MdxNode>;
}

export const Posts: React.FC<Props> = ({
  title = false,
  showLimit = 6,
  showLoadMore = true,
  loadMoreText = 'Load more',
  autoLoadMore = true,
  posts,
  ...props
}) => {
  const [limit, setLimit] = useState(showLimit);
  const visiblePosts = posts.slice(0, limit || posts.length);
  const increaseLimit = useCallback(() => {
    if (limit < posts.length) setLimit((limit) => limit + showLimit);
  }, [posts.length, showLimit]);

  useOnNoScrollLoad(increaseLimit, limit);
  if (autoLoadMore) useOnScrollEnd(increaseLimit);

  return (
    <div {...props}>
      {title && <h2 className="font-medium">Posts</h2>}
      <div className="mt-2 flex flex-wrap">
        {visiblePosts.map(({ node }) => (
          <PostPreview
            node={node}
            key={node.fields.slug}
            className="w-full lg:w-1/2 mb-4"
          />
        ))}
      </div>
      {showLoadMore && visiblePosts.length < posts.length && (
        <div className="mt-0 ml-2">
          <LinkButton onClick={() => setLimit((limit) => limit + showLimit)}>
            {loadMoreText}
          </LinkButton>
        </div>
      )}
      {posts.length === 0 && <div>...</div>}
    </div>
  );
};
