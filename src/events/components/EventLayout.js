import React from 'react';

import Header from './EventHeaderPage';

const EventLayout = (props) => {
  const { children, history, typeStyle = '', page } = props;

  const handleBack = () => {
    history.goBack();
  };

  return (
    <section className={typeStyle}>
      {
        page && <Header handleBack={handleBack} />
      }
      {children}
    </section>
  );
};

export default EventLayout;
