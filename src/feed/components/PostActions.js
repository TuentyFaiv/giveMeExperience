import React from 'react';
import { MdFavoriteBorder, MdChatBubbleOutline, MdShare } from 'react-icons/md';

const PostActions = (props) => {
  return (
    <div className="post-actions">
      <div>
        <MdFavoriteBorder />
        10
      </div>
      <div>
        <MdChatBubbleOutline />
        10
      </div>
      <div>
        <MdShare />
        10
      </div>
    </div>
  );
};

export default PostActions;
