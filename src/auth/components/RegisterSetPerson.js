import React from 'react';

import AuthLayout from './AuthLayout';

const RegisterStepTwo = (props) => {
  const { updateRegisterForm, genre, nextStep, previusStep } = props;

  return (
    <AuthLayout>
      <h2 className="Auth-titleRegister">¿Quién eres?</h2>
      <div className="Auth__stepTwo">
        <input type="text" name="name" id="nameRegister" placeholder="Nombre" onChange={updateRegisterForm} required />
        <input type="text" name="lastname" id="lastnameRegister" placeholder="Apellido" onChange={updateRegisterForm} required />
        <input type="date" name="birthday" id="birthdayRegister" placeholder="Fecha de nacimiento" onChange={updateRegisterForm} required />
        <select name="genre" id="genreRegister" onChange={updateRegisterForm} placeholder="Genero" defaultValue={genre} required>
          <option value="withoutGenre">Genero</option>
          <option value="female">Femenino</option>
          <option value="male">Masculino</option>
        </select>
      </div>
      <button type="button" className="btn btn-next btn-primary" onClick={nextStep}>Next</button>
      <button type="button" className="btn btn-previus" onClick={previusStep}>Previus</button>
    </AuthLayout>
  );
};

export default RegisterStepTwo;
