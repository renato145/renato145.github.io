import React from 'react';
import { DiscussionEmbed } from 'disqus-react';
import './Comments.css';

const Comments = ({ id, title }) => {
  const disqusShortname = 'renato145';
  const disqusConfig = {
    identifier: id,
    title: title,
  }

  return (
    <div className='comments-container'>
      <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
    </div>
  );
};

export default Comments;
