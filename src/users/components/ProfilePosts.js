import React from 'react';

const ProfilePosts = (props) => {
  const { children } = props;

  return (
    <div className="profile__content-posts">
      <h2>Publicaciones</h2>
      {children}
    </div>
  );
};

export default ProfilePosts;
