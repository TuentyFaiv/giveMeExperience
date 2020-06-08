import React from 'react';

import imageHeader from '../../assets/images/header5.png';
import alumnoIcon from '../../assets/icons/alumno.png';

const ProfileHeader = (props) => {
  const { history, match, editBanner, editPhoto, connectProfile, edit } = props;

  const handleEditProfile = () => {
    history.push('/profile/edit');
  };

  return (
    <>
      {
        !edit ? (
          <div className="profile__header">
            {
              match.path === '/profile/user/:username' ?
                <button type="button" className="btn btn-profileConnect" onClick={connectProfile}>Conectar</button> :
                <button type="button" className="btn btn-profileEdit" onClick={handleEditProfile}>Editar</button>
            }
            <span className="profile__header-overlay" />
            <img src={imageHeader} alt="Banner user" className="profile__header-banner" />
            <div className="profile__header-user">
              <img src={alumnoIcon} alt="User" />
              <div>
                <h1>Nombre Apellido</h1>
                <h2>Escuela | Plataforma</h2>
              </div>
            </div>
          </div>
        ) :
          (
            <div className="profileEdit__header">
              <img src={imageHeader} alt="Banner user" className="profileEdit__header-banner" />
              <button type="button" className="btn btn-editBanner" onClick={editBanner}>Editar</button>
              <div className="profileEdit__header-user">
                <img src={alumnoIcon} alt="User" />
                <button type="button" className="btn btn-editPhoto" onClick={editPhoto}>Editar</button>
              </div>
            </div>
          )
      }
    </>
  );
};

export default ProfileHeader;
