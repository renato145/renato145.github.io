import React, { useState } from 'react';
import PostPreview from './PostPreview';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import './Posts.css';

const LoadMore = styled.div`
  text-align: start;
  margin-right: 0.2rem;
`;

const Posts = ({
  title = false,
  showLimit = 5,
  showLoadMore = true,
  loadMoreTitle = 'Load more',
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
        <LoadMore>
          <Button
            variant="link"
            onClick={() => setLimit((limit) => limit + showLimit)}
          >
            {loadMoreTitle}
          </Button>
        </LoadMore>
      )}
      {posts.length === 0 && <div>...</div>}
    </>
  );
};

export default Posts;
