import React from 'react';

import Searchbox from '../components/Searchbox';
import EventBox from '../components/EventBox';

const Events = () => {
  return (
    <section className="events-container">
      <Searchbox />
      <h1>Eventos de la semana</h1>
      <div className="events-week">
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
      </div>
      <h1>Proximos eventos</h1>
      <div className="events-nexts">
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
        <EventBox margin="m-0" />
      </div>
    </section>
  );
}

export default Events;
