import React, { HTMLProps, useCallback, useRef, useState } from 'react';
import { PostPreview } from './PostPreview';
import { LinkButton } from './LinkButton';
import { MdxNode, NodesOf } from '../Types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

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
  const ref = useRef<HTMLDivElement>(null);
  useIntersectionObserver({
    target: ref,
    onIntersect: increaseLimit,
    enabled: autoLoadMore,
  });

  return (
    <div {...props}>
      {title && <h2 className="font-medium">Posts</h2>}
      <div className="mt-2 flex flex-wrap">
        {visiblePosts.map(({ node }) => (
          <PostPreview
            node={node}
            key={node.fields.slug}
            className="mb-4 w-full lg:w-1/2"
          />
        ))}
      </div>
      {showLoadMore && visiblePosts.length < posts.length && (
        <div ref={ref} className="mt-0 ml-2">
          <LinkButton onClick={increaseLimit}>{loadMoreText}</LinkButton>
        </div>
      )}
      {posts.length === 0 && <div>...</div>}
    </div>
  );
};
