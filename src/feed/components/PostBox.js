import React from 'react';

import HeaderPost from './HeaderPost';
import PostActions from './PostActions';

const PostBox = (props) => {
  const { children, typeStyle = '' } = props;

  return (
    <div className={`post${typeStyle} box`}>
      <HeaderPost />
      <div className="post-content">
        {children}
      </div>
      <PostActions />
    </div>
  );
};

export default PostBox;
