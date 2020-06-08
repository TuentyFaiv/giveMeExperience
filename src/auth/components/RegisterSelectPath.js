import React from 'react';

import AuthLayout from './AuthLayout';

const RegisterStepThree = (props) => {
  const { updateRegisterForm, nextStep, previusStep } = props;

  return (
    <AuthLayout>
      <h2 className="Auth-titleRegister">¿En que formato estudias?</h2>
      <div className="Auth__stepThree">
        <button type="button" className="btn btn-secondary btn-secondaryTwo btn-select_path" onClick={() => { updateRegisterForm('presential'); nextStep(); }}>Presencial</button>
        <button type="button" className="btn btn-secondary btn-secondaryTwo btn-select_path" onClick={() => { updateRegisterForm('online'); nextStep(); }}>En linea</button>
        <button type="button" className="btn btn-secondary btn-secondaryTwo btn-select_path" onClick={() => { updateRegisterForm('both'); nextStep(); }}>Ambas</button>
      </div>
      <button type="button" className="btn btn-previus" onClick={previusStep}>Previus</button>
    </AuthLayout>
  );
};

export default RegisterStepThree;
