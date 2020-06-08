import React from 'react';

import HeaderBox from '../../widgets/components/HeaderBox';
import BoxActions from '../../widgets/components/BoxActions';

const EventBox = (props) => {
  const { typeStyle = '', margin = '' } = props;

  return (
    <div className={`event${typeStyle} box ${margin}`}>
      <HeaderBox />
      <p className="event-sinopsis">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo quasi minima facilis ratione laborum consequuntur.
      </p>
      <BoxActions />
    </div>
  );
};

export default EventBox;
