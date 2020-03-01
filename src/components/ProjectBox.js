import React from 'react';

import HeaderBox from './HeaderBox';
import BoxActions from './BoxActions';

const ProjectBox = ({ style = "", margin = "" }) => {
  return (
    <div className={`project${style} box ${margin}`}>
      <HeaderBox />
      <p className="project-sinopsis">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo quasi minima facilis ratione laborum consequuntur.
      </p>
      <BoxActions project />
    </div>
  );
}

export default ProjectBox;