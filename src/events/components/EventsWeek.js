import React from 'react';

const EventsWeek = (props) => {
  const { children } = props;

  return (
    <>
      <h1>Eventos de la semana</h1>
      <div className="events-week">
        {children}
      </div>
    </>
  );
};

export default EventsWeek;
