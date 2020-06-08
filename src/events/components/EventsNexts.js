import React from 'react';

const EventsNexts = (props) => {
  const { children } = props;

  return (
    <>
      <h1>Proximos eventos</h1>
      <div className="events-nexts">
        {children}
      </div>
    </>
  );
};

export default EventsNexts;
