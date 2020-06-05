import React, { useState } from 'react';
import { PostPreview } from './PostPreview';
import { LinkButton } from './LinkButton';

export const Posts = ({
  title = false,
  showLimit = 6,
  showLoadMore = true,
  loadMoreText = 'Load more',
  posts,
  ...props
}) => {
  const [limit, setLimit] = useState(showLimit);
  const visiblePosts = posts.slice(0, limit || posts.length);

  return (
    <div {...props}>
      {title && <h2 className="font-medium text-gray-900">Posts</h2>}
      <div className="mt-2 flex flex-wrap">
        {visiblePosts.map(({ node }, i) => (
          <PostPreview node={node} key={node.fields.slug} className="w-full lg:w-1/2 mb-4" />
          // <PostPreview node={node} key={node.fields.slug} className="w-full lg:max-w-sm mb-4" />
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
