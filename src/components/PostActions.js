import React from 'react';

import likeIcon from '../assets/icons/likePost.png';
import commentIcon from '../assets/icons/commentPost.png';
import shareIcon from '../assets/icons/sharePost.svg';

const PostActions = () => {
  return (
    <div className="post-actions">
      <div>
        <img src={likeIcon} alt="Like" />
        10
      </div>
      <div>
        <img src={commentIcon} alt="Comment" />
        10
      </div>
      <div>
        <img src={shareIcon} alt="Share" />
        10
      </div>
    </div>
  );
}

export default PostActions;