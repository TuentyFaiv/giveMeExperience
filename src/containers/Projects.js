import React from 'react';

import Searchbox from '../components/Searchbox';
import ProjectBox from '../components/ProjectBox';

const Projects = () => {
  return (
    <section className="projects-container">
      <Searchbox />
      <h1>Proyectos populares</h1>
      <div className="projects-populars">
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </div>
      <h1>Más proyectos</h1>
      <div className="projects-more">
        <ProjectBox margin="m-0" />
        <ProjectBox margin="m-0" />
        <ProjectBox margin="m-0" />
        <ProjectBox margin="m-0" />
        <ProjectBox margin="m-0" />
        <ProjectBox margin="m-0" />
        <ProjectBox margin="m-0" />
      </div>
    </section>
  );
}

export default Projects;