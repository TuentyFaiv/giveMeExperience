import React from 'react';

import HeaderBox from '../../widgets/components/HeaderBox';
import BoxActions from '../../widgets/components/BoxActions';

const ProjectBox = (props) => {
  const { typeStyle = '', margin = '' } = props;

  return (
    <div className={`project${typeStyle} box ${margin}`}>
      <HeaderBox />
      <p className="project-sinopsis">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo quasi minima facilis ratione laborum consequuntur.
      </p>
      <BoxActions project />
    </div>
  );
};

export default ProjectBox;
