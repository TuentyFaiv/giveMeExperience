import React from 'react';

import ProjectLayout from '../components/ProjectLayout';
import PopularProjects from '../components/PopularProjects';
import MoreProjects from '../components/MoreProjects';
import ProjectBox from '../components/ProjectBox';

const Projects = (props) => {
  return (
    <ProjectLayout typeStyle="projects-container">
      <PopularProjects>
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
        <ProjectBox margin="mr-20" />
      </PopularProjects>
      <MoreProjects>
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
        <ProjectBox />
      </MoreProjects>
    </ProjectLayout>
  );
};

export default Projects;
