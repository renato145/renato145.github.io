import React, { useRef } from 'react';
import { Utteranc } from './Utteranc';
import './Comments.css';

const Comments = () => {
  const ref = useRef();

  return (
    <div className='comments-container'>
      <Utteranc ref={ref}/>
    </div>
  );
};

export default Comments;
