import React from 'react';

import imageHeader from '../../assets/images/header1.png';
import alumnoIcon from '../../assets/icons/alumno.png';
import alumnaIcon from '../../assets/icons/alumna.png';

const ProjectHeaderPage = (props) => {
  return (
    <div className="page__header">
      <span className="page__header-overlay" />
      <img src={imageHeader} alt="header" className="page__header-banner" />
      <div className="page__header-title">
        <div>
          <h1>Titulo</h1>
          <button type="button" className="btn btn-pageHeader">Unirme al proyecto</button>
        </div>
        <div>
          <h3>Participantes</h3>
          <img src={alumnoIcon} alt="participants" />
          <img src={alumnaIcon} alt="participants" />
          <img src={alumnoIcon} alt="participants" />
          <img src={alumnaIcon} alt="participants" />
        </div>
      </div>
    </div>
  );
};

export default ProjectHeaderPage;
