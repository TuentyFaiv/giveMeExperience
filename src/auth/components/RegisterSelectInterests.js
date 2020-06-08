import React from 'react';

import AuthLayout from './AuthLayout';

const RegisterStepOne = (props) => {
  const { updateRegisterForm, nextStep, previusStep } = props;

  return (
    <AuthLayout>
      <h2 className="Auth-titleRegister">Selecciona tus intereses</h2>
      <div className="Auth__stepOne">
        <p className="Auth__stepOne-item" onClick={updateRegisterForm}>Interest 1</p>
        <p className="Auth__stepOne-item" onClick={updateRegisterForm}>rama fisoco matematico con doctorado en proyectores</p>
        <p className="Auth__stepOne-item" onClick={updateRegisterForm}>Interest 3asdfasdf</p>
        <p className="Auth__stepOne-item" onClick={updateRegisterForm}>Interest 4as</p>
        <p className="Auth__stepOne-item" onClick={updateRegisterForm}>Intereasdfasdfasdfasdfst 5</p>
        <p className="Auth__stepOne-item" onClick={updateRegisterForm}>Intere</p>
        <p className="Auth__stepOne-item" onClick={updateRegisterForm}>Interesasdsdft 7</p>
      </div>
      <button type="button" className="btn btn-next btn-primary" onClick={nextStep}>Next</button>
      <button type="button" className="btn btn-previus" onClick={previusStep}>Previus</button>
    </AuthLayout>
  );
};

export default RegisterStepOne;
