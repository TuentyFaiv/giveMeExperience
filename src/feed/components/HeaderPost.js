import React from 'react';
import { Link } from 'react-router-dom';

import Options from '../../widgets/components/Options';

import alumnoIcon from '../../assets/icons/alumno.png';

const HeaderPost = (props) => {
  const { userImg = alumnoIcon } = props;

  return (
    <div className="post-header">
      <div className="post-user">
        <Link to="/profile/user/nombre-de-usuario">
          <img src={userImg} alt="user" />
          <h3>Username</h3>
        </Link>
      </div>
      <Options />
    </div>
  );
};

export default HeaderPost;
