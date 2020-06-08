import React from 'react';
import { MdFavoriteBorder, MdChatBubbleOutline, MdShare } from 'react-icons/md';

const PageActions = (props) => {
  return (
    <div className="page__content-actions">
      <MdFavoriteBorder />
      <MdChatBubbleOutline />
      <MdShare />
    </div>
  );
};

export default PageActions;
