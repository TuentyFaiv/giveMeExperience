import React, { useState } from 'react';

import SelectInterests from '../components/RegisterSelectInterests';
import SetPerson from '../components/RegisterSetPerson';
import SelectPath from '../components/RegisterSelectPath';
import SelectEducation from '../components/RegisterSelectEducation';
import SelectApproaches from '../components/RegisterSelectApproaches';
import SetEmailPassword from '../components/RegisterSetEmailPassword';

const Register = (props) => {
  const [step, setStep] = useState(1);

  const [registerForm, setRegisterForm] = useState({
    interests: [],
    name: 'withoutName',
    lastname: 'withoutLastname',
    birthday: 'withoutDate',
    genre: 'withoutGenre',
    studyFormat: 'withoutFormat',
    school: 'withoutSchool',
    studyingPlatforms: [],
    studyGrade: 'withoutGrade',
    coursesTaken: [],
    projectApproaches: [],
    email: 'withoutEmail',
    password: 'withoutPassword',
    passwordComfirm: '',
  });

  const nextStep = () => {
    setStep(step + 1);
  };

  const previusStep = () => {
    switch (step) {
      case 1:
        setRegisterForm({
          ...registerForm,
          interests: [],
        });
        props.history.push('/login');
        break;
      case 2:
        setRegisterForm({
          ...registerForm,
          interests: [],
          name: 'withoutName',
          lastname: 'withoutLastname',
          birthday: 'withoutDate',
          genre: 'withoutGenre',
        });
        setStep(step - 1);
        break;
      case 3:
        setRegisterForm({
          ...registerForm,
          name: 'withoutName',
          lastname: 'withoutLastname',
          birthday: 'withoutDate',
          genre: 'withoutGenre',
          studyFormat: 'withoutFormat',
        });
        setStep(step - 1);
        break;
      case 4:
        setRegisterForm({
          ...registerForm,
          studyFormat: 'withoutFormat',
          school: 'withoutSchool',
          studyGrade: 'withoutGrade',
          studyingPlatforms: [],
          coursesTaken: [],
        });
        setStep(step - 1);
        break;
      case 5:
        setRegisterForm({
          ...registerForm,
          school: 'withoutSchool',
          studyGrade: 'withoutGrade',
          studyingPlatforms: [],
          coursesTaken: [],
          projectApproaches: [],
        });
        setStep(step - 1);
        break;
      case 6:
        if (registerForm.studyFormat === 'presential' | registerForm.studyFormat === 'online') {
          setRegisterForm({
            ...registerForm,
            projectApproaches: [],
            email: 'withoutEmail',
            password: 'withoutPassword',
            passwordComfirm: '',
          });
        } else {
          setRegisterForm({
            ...registerForm,
            studyingPlatforms: [],
            coursesTaken: [],
            projectApproaches: [],
          });
        }
        setStep(step - 1);
        break;
      case 7:
        setRegisterForm({
          ...registerForm,
          projectApproaches: [],
          email: 'withoutEmail',
          password: 'withoutPassword',
          passwordComfirm: '',
        });
        setStep(step - 1);
        break;
      default:
        setStep(step - 1);
        break;
    }
  };

  const updateRegisterForm = {
    setInterests: (event) => {
      const interest = event.target;

      if (interest.classList.contains('interestSelected')) {
        setRegisterForm({
          ...registerForm,
          interests: registerForm.interests.filter((item) => item !== interest.textContent),
        });
        interest.classList.remove('interestSelected');
      } else {
        setRegisterForm({
          ...registerForm,
          interests: [...registerForm.interests, interest.textContent],
        });
        interest.classList.add('interestSelected');
      }
    },
    addPerson: (event) => {
      const input = event.target.name;
      const valueInput = event.target.value;
      setRegisterForm({
        ...registerForm,
        [input]: valueInput,
      });
    },
    setPath: (type) => {
      setRegisterForm({
        ...registerForm,
        studyFormat: type,
      });
    },
    stepFour: (event, type) => {
      if (type === 'presential') {
        const schoolSelected = event.target.textContent;
        const inputSchool = document.getElementById('schoolRegister');

        inputSchool.value = schoolSelected;
        setRegisterForm({
          ...registerForm,
          school: schoolSelected,
        });
        document.querySelector('.search').style.display = 'none';
      } else {
        const platformsSelected = event.target.textContent;
        const inputPlatform = document.getElementById('platformsRegister');

        inputPlatform.value = platformsSelected;
        setRegisterForm({
          ...registerForm,
          studyingPlatforms: [...registerForm.studyingPlatforms, platformsSelected],
        });
      }
    },
    stepFive: (event, type) => {
      if (type === 'presential') {
        const grade = event.target.value;
        setRegisterForm({
          ...registerForm,
          studyGrade: grade,
        });
      } else {
        const coursesSelected = event.target.textContent;
        const inputCourses = document.getElementById('coursesRegister');

        inputCourses.value = coursesSelected;
        setRegisterForm({
          ...registerForm,
          coursesTaken: [...registerForm.coursesTaken, coursesSelected],
        });
      }
    },
    setApproaches: (event) => {
      const approachSelected = event.target.textContent;
      const inputFocus = document.getElementById('focusRegister');

      inputFocus.value = approachSelected;
      setRegisterForm({
        ...registerForm,
        projectApproaches: [...registerForm.projectApproaches, approachSelected],
      });
    },
    addEmailPassword: (event) => {
      const inputType = event.target.name;
      const { value } = event.target;

      document.getElementById('btnFinish').disabled = !(inputType === 'passwordComfirm' && (document.getElementById('passwordRegister').value === value));

      setRegisterForm({
        ...registerForm,
        [inputType]: value,
      });
    },
    searchOptions: (event) => {
      const searchedOption = event.target.value;
      const regex = new RegExp(searchedOption.toLowerCase(), 'gi');

      const options = document.querySelectorAll('.search p');

      if (searchedOption.length > 0) {
        for (let i = 0; i < options.length; i++) {
          const option = options[i].textContent;

          if (!(option.match(regex))) {
            options[i].style.display = 'none';
          } else {
            options[i].style.display = 'block';
          }
        }
      } else {
        for (let i = 0; i < options.length; i++) {
          options[i].style.display = 'block';
        }
      }
    },
  };

  const handleSubmit = (event) => {
    console.log('Usuario registrado');
    props.history.push('/');
  };

  if (step === 1 || step === 2 || step === 3) {
    switch (step) {
      case 1:
        return (
          <SelectInterests
            updateRegisterForm={updateRegisterForm.setInterests}
            nextStep={nextStep}
            previusStep={previusStep}
          />
        );
      case 2:
        return (
          <SetPerson
            updateRegisterForm={updateRegisterForm.addPerson}
            genre={registerForm.genre}
            nextStep={nextStep}
            previusStep={previusStep}
          />
        );
      case 3:
        return (
          <SelectPath
            updateRegisterForm={updateRegisterForm.setPath}
            nextStep={nextStep}
            previusStep={previusStep}
          />
        );
      default:
        return (
          <HasRegister />
        );
    }
  } else if (step >= 4 && (registerForm.studyFormat === 'presential' || registerForm.studyFormat === 'online' || registerForm.studyFormat === 'both')) {
    switch (registerForm.studyFormat) {
      case 'presential':
        switch (step) {
          case 4:
            return (
              <SelectEducation
                type="presential"
                registerForm={registerForm}
                updateRegisterForm={{ searchSchool: updateRegisterForm.stepFour, searchGrade: updateRegisterForm.stepFive }}
                searchOptions={updateRegisterForm.searchOptions}
                nextStep={nextStep}
                previusStep={previusStep}
              />
            );
          case 5:
            return (
              <SelectApproaches
                type="presential"
                updateRegisterForm={updateRegisterForm.setApproaches}
                searchOptions={updateRegisterForm.searchOptions}
                nextStep={nextStep}
                previusStep={previusStep}
              />
            );
          case 6:
            return (
              <SetEmailPassword
                type="presential"
                updateRegisterForm={updateRegisterForm.addEmailPassword}
                handleSubmit={handleSubmit}
                previusStep={previusStep}
              />
            );
          default:
            return (
              <HasRegister />
            );
        }
      case 'online':
        switch (step) {
          case 4:
            return (
              <SelectEducation
                type="online"
                registerForm={registerForm}
                updateRegisterForm={{ searchSchool: updateRegisterForm.stepFour, searchGrade: updateRegisterForm.stepFive }}
                searchOptions={updateRegisterForm.searchOptions}
                nextStep={nextStep}
                previusStep={previusStep}
              />
            );
          case 5:
            return (
              <SelectApproaches
                type="online"
                updateRegisterForm={updateRegisterForm.setApproaches}
                searchOptions={updateRegisterForm.searchOptions}
                nextStep={nextStep}
                previusStep={previusStep}
              />
            );
          case 6:
            return (
              <SetEmailPassword
                type="online"
                updateRegisterForm={updateRegisterForm.addEmailPassword}
                handleSubmit={handleSubmit}
                previusStep={previusStep}
              />
            );
          default:
            return (
              <HasRegister />
            );
        }
      case 'both':
        switch (step) {
          case 4:
            return (
              <SelectEducation
                type="presential"
                registerForm={registerForm}
                updateRegisterForm={{ searchSchool: updateRegisterForm.stepFour, searchGrade: updateRegisterForm.stepFive }}
                searchOptions={updateRegisterForm.searchOptions}
                nextStep={nextStep}
                previusStep={previusStep}
              />
            );
          case 5:
            return (
              <SelectEducation
                type="online"
                registerForm={registerForm}
                updateRegisterForm={{ searchSchool: updateRegisterForm.stepFour, searchGrade: updateRegisterForm.stepFive }}
                searchOptions={updateRegisterForm.searchOptions}
                nextStep={nextStep}
                previusStep={previusStep}
              />
            );
          case 6:
            return (
              <SelectApproaches
                type="both"
                updateRegisterForm={updateRegisterForm.setApproaches}
                searchOptions={updateRegisterForm.searchOptions}
                nextStep={nextStep}
                previusStep={previusStep}
              />
            );
          case 7:
            return (
              <SetEmailPassword
                type="both"
                updateRegisterForm={updateRegisterForm.addEmailPassword}
                handleSubmit={handleSubmit}
                previusStep={previusStep}
              />
            );
          default:
            return (
              <HasRegister />
            );
        }
      default:
        return (
          <HasRegister />
        );
    }
  } else {
    return (
      <HasRegister />
    );
  }
};

const HasRegister = (props) => {
  return (
    <div className="Auth">
      <h2 className="Auth-titleRegister">Ya te has registrado</h2>
      <span className="terms-conditions"><a href="/termnsandconditions">Terminos y Condiciones</a></span>
    </div>
  );
};

export default Register;
