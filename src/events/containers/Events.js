import React from 'react';

import EventLayout from '../components/EventLayout';
import EventsWeek from '../components/EventsWeek';
import EventsNexts from '../components/EventsNexts';
import EventBox from '../components/EventBox';

const Events = (props) => {
  return (
    <EventLayout typeStyle="events-container">
      <EventsWeek>
        <EventBox margin="mr-20" />
        <EventBox margin="mr-20" />
        <EventBox margin="mr-20" />
        <EventBox margin="mr-20" />
        <EventBox margin="mr-20" />
      </EventsWeek>
      <EventsNexts>
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
        <EventBox />
      </EventsNexts>
    </EventLayout>
  );
};

export default Events;
