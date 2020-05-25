import React, { useState } from 'react';
import PostPreview from './PostPreview';
import 'twin.macro';
import { LinkButton } from './LinkButton';

const Posts = ({
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
      {title && <h2 className="general-title">Posts</h2>}
      {visiblePosts.map(({ node }) => (
        <PostPreview node={node} key={node.fields.slug} />
      ))}
      {showLoadMore && visiblePosts.length < posts.length && (
        <div tw="ml-2">
          <LinkButton onClick={() => setLimit((limit) => limit + showLimit)}>
            {loadMoreText}
          </LinkButton>
        </div>
      )}
      {posts.length === 0 && <div>...</div>}
    </>
  );
};

export default Posts;
