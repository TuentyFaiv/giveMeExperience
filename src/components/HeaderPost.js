import React from 'react';
import { Link } from 'react-router-dom'

import Options from './Options';

import alumnoIcon from '../assets/icons/alumno.png';

const HeaderPost = () => {
  return (
    <div className="post-header">
      <div className="post-user">
        <Link to="/profile/user/nombre-de-usuario">
          <img src={alumnoIcon} alt="user" />
          <h3>Username</h3>
        </Link>
      </div>
      <Options />
    </div>
  );
}

export default HeaderPost;