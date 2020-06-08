import React from 'react';

const PopularProjects = (props) => {
  const { children, feed } = props;

  if (feed) {
    return (
      <section className="feed-projects_populars">
        <h1>Proyectos populares</h1>
        <div className="projects-populars">
          {children}
        </div>
      </section>
    );
  }

  return (
    <>
      <h1>Proyectos populares</h1>
      <div className="projects-populars">
        {children}
      </div>
    </>
  );
};

export default PopularProjects;
