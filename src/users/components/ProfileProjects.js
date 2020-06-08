import React from 'react';

const ProfileProjects = (props) => {
  const { children } = props;

  return (
    <div className="profile__content-projects">
      <h2>Proyectos en curso</h2>
      {children}
    </div>
  );
};

export default ProfileProjects;
