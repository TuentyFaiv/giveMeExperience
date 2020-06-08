import React from 'react';

import AuthLayout from './AuthLayout';

const RegisterEnterEmailPassword = (props) => {
  const { type, updateRegisterForm, handleSubmit, previusStep } = props;

  return (
    <AuthLayout>
      <h2 className="Auth-titleRegister">Ingresa un correo y una contraseña</h2>
      <div className={`Auth__stepSix ${type}`}>
        <input type="email" name="email" id="emailRegister" placeholder="Email" onKeyUp={updateRegisterForm} required />
        <input type="password" name="password" id="passwordRegister" placeholder="Password" onKeyUp={updateRegisterForm} required />
        <input type="password" name="passwordComfirm" id="passwordComfrimRegister" placeholder="Comfirm password" onKeyUp={updateRegisterForm} required />
      </div>
      <button type="button" id="btnFinish" className="btn btn-next btn-primary" onClick={handleSubmit}>Finish</button>
      <button type="button" className="btn btn-previus" onClick={previusStep}>Previus</button>
    </AuthLayout>
  );
};

export default RegisterEnterEmailPassword;
