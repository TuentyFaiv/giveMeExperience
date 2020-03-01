import React from 'react';

import HeaderPost from '../components/HeaderPost';
import PostActions from '../components/PostActions';

const PostBox = ({ children, style = "" }) => {
  return (
    <div className={`post${style} box`}>
      <HeaderPost />
      <div className="post-content">
        {children}
      </div>
      <PostActions />
    </div>
  );
}

export default PostBox;