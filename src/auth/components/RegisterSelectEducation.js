import React from 'react';

import AuthLayout from './AuthLayout';

const RegisterStepFour = (props) => {
  const { type, registerForm, updateRegisterForm: { searchSchool, searchGrade }, searchOptions, nextStep, previusStep } = props;

  return (
    <AuthLayout>
      <div className={`Auth__stepFour ${type}`}>
        {
          type === 'presential' && (
            <>
              <h2 className="Auth-titleRegister">¿En que escuela estudias?</h2>
              <input type="text" name="school" id="schoolRegister" placeholder="Busca tu escuela" onKeyUp={searchOptions} required />
              <div className="Auth__stepFour-search search">
                <p onClick={(event) => { searchSchool(event, type); }}>Prepa 3</p>
                <p onClick={(event) => { searchSchool(event, type); }}>CECyT 1</p>
                <p onClick={(event) => { searchSchool(event, type); }}>Bacho</p>
                <p onClick={(event) => { searchSchool(event, type); }}>ESCOM</p>
              </div>
              <h2 className="Auth-titleRegister">¿Que grado cursas?</h2>
              <select name="grade" id="gradeSchoolSelected" defaultValue={registerForm.studyGrade} onChange={(event) => { searchGrade(event, type); }} required>
                <option value="withoutGrade">Selecciona un grado</option>
                <option value="Grado 1">Grado 1</option>
                <option value="Grado 2">Grado 2</option>
                <option value="Grado 3">Grado 3</option>
                <option value="Grado 4">Grado 4</option>
              </select>
            </>
          )
        }
        {
          type === 'online' && (
            <>
              <h2 className="Auth-titleRegister">¿En que plataforma estudias?</h2>
              <input type="text" name="platforms" id="platformsRegister" placeholder="Introduce una o más plataformas" onKeyUp={searchOptions} required />
              <div className="Auth__stepFour-search search">
                <p onClick={(event) => { searchSchool(event, type); }}>Plataforma 1</p>
                <p onClick={(event) => { searchSchool(event, type); }}>Plataforma 2</p>
                <p onClick={(event) => { searchSchool(event, type); }}>Plataforma 3</p>
                <p onClick={(event) => { searchSchool(event, type); }}>Plataforma 4</p>
              </div>
              <h2 className="Auth-titleRegister">¿Que cursos has tomado?</h2>
              <input type="text" name="courses" id="coursesRegister" placeholder="Curso / Cursos" onKeyUp={searchOptions} required />
              <div className="Auth__stepFour-search search">
                <p onClick={(event) => { searchGrade(event, type); }}>Curso 1</p>
                <p onClick={(event) => { searchGrade(event, type); }}>Curso 2</p>
                <p onClick={(event) => { searchGrade(event, type); }}>Curso 3</p>
                <p onClick={(event) => { searchGrade(event, type); }}>Curso 4</p>
              </div>
            </>
          )
        }
      </div>
      <button type="button" className="btn btn-next btn-primary" onClick={nextStep}>Next</button>
      <button type="button" className="btn btn-previus" onClick={previusStep}>Previus</button>
    </AuthLayout>
  );
};

export default RegisterStepFour;
