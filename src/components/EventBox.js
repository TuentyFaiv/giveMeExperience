import React from 'react';

import HeaderBox from '../components/HeaderBox';
import BoxActions from '../components/BoxActions';

const EventBox = ({ style = "", margin = "" }) => {
  return (
    <div className={`event${style} box ${margin}`}>
      <HeaderBox />
      <p className="event-sinopsis">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error quo quasi minima facilis ratione laborum consequuntur.
      </p>
      <BoxActions />
    </div>
  );
}

export default EventBox;