import React from 'react';

import AuthLayout from './AuthLayout';

const RegisterSelectApproaches = (props) => {
  const { type, updateRegisterForm, searchOptions, nextStep, previusStep } = props;

  return (
    <AuthLayout>
      <h2 className="Auth-titleRegister">¿Que enfoque le quieres dar a tus proyectos?</h2>
      <div className={`Auth__stepFive ${type}`}>
        <input type="text" name="focus" id="focusRegister" placeholder="Enfoque / Enfoques" onKeyUp={searchOptions} required />
        <div className="Auth__stepFive-search search">
          <p onClick={updateRegisterForm}>Academico</p>
          <p onClick={updateRegisterForm}>Profesional</p>
          <p onClick={updateRegisterForm}>Hobbie</p>
          <p onClick={updateRegisterForm}>Industria</p>
        </div>
      </div>
      <button type="button" className="btn btn-next btn-primary" onClick={nextStep}>Next</button>
      <button type="button" className="btn btn-previus" onClick={previusStep}>Previus</button>
    </AuthLayout>
  );
};

export default RegisterSelectApproaches;
