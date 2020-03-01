import React from 'react';

import imageHeader from '../assets/images/header5.png';
import alumnoIcon from '../assets/icons/alumno.png';

const ProfileEdit = (props) => {

  const handleEditBanner = () => {

  };

  const handleEditPhoto = () => {

  };

  const handleCancelEdit = (event) => {
    event.preventDefault();
    props.history.goBack();
  };

  const handleSubmitEdit = (event) => {
    event.preventDefault();
  };

  return (
    <section className="profileEdit">
      <div className="profileEdit__header">
        <img src={imageHeader} alt="Banner user" className="profileEdit__header-banner" />
        <button className="profileEdit-editBanner" onClick={handleEditBanner}>Editar</button>
        <div className="profileEdit__header-user">
          <img src={alumnoIcon} alt="User" />
          <button className="profileEdit-editPhoto" onClick={handleEditPhoto}>Editar</button>
        </div>
      </div>
      <form action="" className="profileEdit__form" onSubmit={handleSubmitEdit}>
        <div className="profileEdit__form-infoPersonal">
          <h1>Información personal</h1>
          <input type="text" name="name" id="name" placeholder="Nombre" />
          <input type="text" name="lastname" id="lastname" placeholder="Apellido" />
          <input type="date" name="birthday" id="birthday" />
        </div>
        <div className="profileEdit__form-interests">
          <h1>Intereses</h1>
          <select name="interests" id="interests" multiple="multiple">
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
            <option value="option4">option 4</option>
          </select>
        </div>
        <div className="profileEdit__form-infoAcademic">
          <h1>Información academica</h1>
          <textarea name="platforms" id="platforms" placeholder="Plataforma / Plataformas"></textarea>
          <textarea name="courses" id="courses" placeholder="Curso / Cursos"></textarea>
          <select name="school" id="school" multiple="multiple">
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
            <option value="option4">option 4</option>
          </select>
          <select name="grade" id="grade" multiple="multiple">
            <option value="option1">option 1</option>
            <option value="option2">option 2</option>
            <option value="option3">option 3</option>
            <option value="option4">option 4</option>
          </select>
          <textarea name="focus" id="focus" placeholder="Enfoque / Enfoques"></textarea>
        </div>
        <div className="profileEdit__form-account">
          <h1>Correo y contraseña</h1>
          <input type="text" name="mail" id="mail" placeholder="Email" />
          <input type="password" name="password" id="password" placeholder="Password" />
        </div>
        <div className="profileEdit__form-buttons">
          <button type="button" onClick={handleCancelEdit}>Cancelar</button>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </section>
  );
}

export default ProfileEdit;