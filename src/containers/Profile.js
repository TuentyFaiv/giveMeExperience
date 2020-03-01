import React from 'react';

import PostBox from '../components/PostBox';
import ProjectBox from '../components/ProjectBox';
import EventBox from '../components/EventBox';

import imageHeader from '../assets/images/header5.png';
import arrowIcon from '../assets/icons/arrow.png';
import alumnoIcon from '../assets/icons/alumno.png';

const Profile = (props) => {
  const handleBack = () => {
    props.history.goBack();
  };

  const handleEditProfile = () => {
    props.history.push('/profile/edit');
  };

  const handleConnectProfile = () => {

  };

  return (
    <section className="profile">
      <div className="profile__header">
        <div className="profile__header-back">
          <img src={arrowIcon} alt="Back" onClick={handleBack} />
        </div>
        {
          props.match.path === "/profile/user/:username"
            ? <button className="profile-connect" onClick={handleConnectProfile}>Conectar</button>
            : <button className="profile-edit" onClick={handleEditProfile}>Editar</button>
        }
        <img src={imageHeader} alt="Banner user" className="profile__header-banner" />
        <div className="profile__header-user">
          <img src={alumnoIcon} alt="User" />
          <div>
            <h1>Nombre Apellido</h1>
            <h2>Escuela | Plataforma</h2>
          </div>
        </div>
      </div>
      <div className="profile__content">
        <div className="profile__content-posts">
          <h2>Publicaciones</h2>
          <PostBox style="-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint harum sapiente minus nisi eum est ex quasi, modi in non eligendi tempore. Veniam ratione aliquam atque iste vel fuga.Labore temporibus vel maiores, excepturi sint corporis explicabo ratione asperiores quia quasi id cupiditate harum qui voluptas! Porro eos officiis ratione, numquam ea magnam sapiente quod consectetur nobis iusto sunt.
          </PostBox>
          <PostBox style="-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint harum sapiente minus nisi eum est ex quasi, modi in non eligendi tempore. Veniam ratione aliquam atque iste vel fuga.Labore temporibus vel maiores, excepturi sint corporis explicabo ratione asperiores quia quasi id cupiditate harum qui voluptas! Porro eos officiis ratione, numquam ea magnam sapiente quod consectetur nobis iusto sunt.
          </PostBox>
          <PostBox style="-small">
            <p>Has este proyecto conmigo</p>
            <ProjectBox style="-shared" />
          </PostBox>
          <PostBox style="-small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate sint harum sapiente minus nisi eum est ex quasi, modi in non eligendi tempore. Veniam ratione aliquam atque iste vel fuga.Labore temporibus vel maiores, excepturi sint corporis explicabo ratione asperiores quia quasi id cupiditate harum qui voluptas! Porro eos officiis ratione, numquam ea magnam sapiente quod consectetur nobis iusto sunt.
          </PostBox>
          <PostBox style="-small">
            <p>Ven a este evento conmigo</p>
            <EventBox style="-shared" />
          </PostBox>
        </div>
        <div className="profile__content-experience">
          <h2>Experiencia Obtenida</h2>
          <div className="box">
            <h4>Proyectos completados</h4>
            <p>5</p>
            <h4>Eventos asistidos</h4>
            <p>23</p>
            <h4>Conecciones</h4>
            <p>32</p>
            <h4>Intereses</h4>
            <p>6</p>
            <h4>Habilidades</h4>
            <p>7</p>
          </div>
        </div>
        <div className="profile__content-projects">
          <h2>Proyectos en curso</h2>
          <ProjectBox style="-small" />
          <ProjectBox style="-small" />
          <ProjectBox style="-small" />
          <ProjectBox style="-small" />
          <ProjectBox style="-small" />
        </div>
      </div>
    </section>
  );
}

export default Profile;