import React from 'react';
import PostPreview from './PostPreview';
import './Posts.css';

const Posts = ({ title = false, posts }) => {
  return (
    <>
      {title && <h2 className="general-title">Posts</h2>}
      {posts.map(({ node }) => (
        <PostPreview node={node} key={node.fields.slug} />
      ))}
      {posts.length === 0 && <div>...</div>}
    </>
  );
};

export default Posts;
