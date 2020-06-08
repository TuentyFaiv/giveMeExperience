import React from 'react';

const MoreProjects = (props) => {
  const { children } = props;

  return (
    <>
      <h1>Más proyectos</h1>
      <div className="projects-more">
        {children}
      </div>
    </>
  );
};

export default MoreProjects;
