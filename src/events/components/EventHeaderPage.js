import React from 'react';

import imageHeader from '../../assets/images/header1.png';
import alumnoIcon from '../../assets/icons/alumno.png';
import alumnaIcon from '../../assets/icons/alumna.png';

const EventHeaderPage = (props) => {
  return (
    <div className="page__header">
      <img src={imageHeader} alt="header" className="page__header-banner" />
      <div className="page__header-title">
        <div>
          <h1>Titulo</h1>
        </div>
        <div>
          <h3>Organizadores</h3>
          <img src={alumnoIcon} alt="participants" />
          <img src={alumnaIcon} alt="participants" />
          <img src={alumnoIcon} alt="participants" />
          <img src={alumnaIcon} alt="participants" />
        </div>
      </div>
    </div>
  );
};

export default EventHeaderPage;
