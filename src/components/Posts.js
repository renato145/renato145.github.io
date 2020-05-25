import React, { useState } from 'react';
import { PostPreview } from './PostPreview';
import { LinkButton } from './LinkButton';

export const Posts = ({
  title = false,
  showLimit = 5,
  showLoadMore = true,
  loadMoreText = 'Load more',
  posts,
}) => {
  const [limit, setLimit] = useState(showLimit);
  const visiblePosts = posts.slice(0, limit || posts.length);

  return (
    <>
      {title && <h2 className="tw-mb-5">Posts</h2>}
      {visiblePosts.map(({ node }) => (
        <PostPreview node={node} key={node.fields.slug} />
      ))}
      {showLoadMore && visiblePosts.length < posts.length && (
        <div className="tw-ml-2">
          <LinkButton onClick={() => setLimit((limit) => limit + showLimit)}>
            {loadMoreText}
          </LinkButton>
        </div>
      )}
      {posts.length === 0 && <div>...</div>}
    </>
  );
};
