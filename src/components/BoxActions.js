import React from 'react';
import { useHistory } from 'react-router-dom'

import alumnoIcon from '../assets/icons/alumno.png';

const BoxActions = ({ project }) => {

  const history = useHistory();

  const handlePage = () => {
    if (project) {
      history.push("/projects/12313d1f23");
    } else {
      history.push("/events/12313d1f23");
    }
  }

  return (
    <div className="box-actions">
      {
        project ?
          <div>
            <img src={alumnoIcon} alt="user" />
            <img src={alumnoIcon} alt="user" />
            <img src={alumnoIcon} alt="user" />
          </div>
          : <p>Asistiran 30 personas</p>
      }
      <button onClick={handlePage}>{project ? "Unirme" : "Asistir"}</button>
    </div>
  );
}

export default BoxActions;