import React from 'react';

const ProfileEditForm = (props) => {
  const { submitEdit, cancelEdit } = props;

  return (
    <form action="" className="profileEdit__form" onSubmit={submitEdit}>
      <div className="profileEdit__form-infoPersonal">
        <h1>Información personal</h1>
        <input type="text" name="name" id="name" placeholder="Nombre" />
        <input type="text" name="lastname" id="lastname" placeholder="Apellido" />
        <input type="date" name="birthday" id="birthday" />
        <select name="genre" id="genre">
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
        </select>
      </div>
      <div className="profileEdit__form-interests">
        <h1>Intereses</h1>
        <div>
          <p>iasdnterest1</p>
          <p>irest3</p>
          <p>inasdterest2</p>
          <p>iasdasdnterest5</p>
          <p>ierest4</p>
          <p>irest3</p>
          <p>iasdnterest1</p>
          <p>iasdasdnterest5</p>
          <p>ierest4</p>
          <p>inasdterest2</p>
        </div>
        <button type="button" className="btn btn-secondary btn-secondaryTwo">Cambiar intereses</button>
      </div>
      <div className="profileEdit__form-infoAcademic">
        <h1>Información academica</h1>
        <textarea name="platforms" id="platforms" placeholder="Plataforma / Plataformas" />
        <textarea name="courses" id="courses" placeholder="Curso / Cursos" />
        <select name="school" id="school">
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3">option 3</option>
          <option value="option4">option 4</option>
        </select>
        <select name="grade" id="grade">
          <option value="option1">option 1</option>
          <option value="option2">option 2</option>
          <option value="option3">option 3</option>
          <option value="option4">option 4</option>
        </select>
        <textarea name="focus" id="focus" placeholder="Enfoque / Enfoques" />
      </div>
      <div className="profileEdit__form-account">
        <h1>Correo y contraseña</h1>
        <input type="text" name="mail" id="mail" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />
      </div>
      <div className="profileEdit__form-buttons">
        <button className="btn btn-secondary" type="button" onClick={cancelEdit}>Cancelar</button>
        <button className="btn btn-primary" type="submit">Guardar</button>
      </div>
    </form>
  );
};

export default ProfileEditForm;
