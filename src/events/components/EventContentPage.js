import React from 'react';

import PageActions from '../../widgets/components/PageActions';

const EventContentPage = (props) => {
  const { children } = props;

  return (
    <div className="page__content">
      <div className="events-info">
        <button type="button" className="btn btn-pageHeader">Asistir al evento</button>
        <h3>Asistiran 24 personas</h3>
      </div>
      <PageActions />
      {children}
    </div>
  );
};

export default EventContentPage;
