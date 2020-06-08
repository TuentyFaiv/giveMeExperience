import React from 'react';
import { FaGoogle, FaTwitter } from 'react-icons/fa';

import AuthLayout from '../components/AuthLayout';

const Login = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    props.history.push('/');
    console.log('Se inicio sesion');
  };

  const goToRegister = () => {
    props.history.push('/register');
  };

  return (
    <AuthLayout>
      <form className="Auth__login" onSubmit={handleSubmit}>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input type="password" name="password" id="password" placeholder="Password" />
        <button className="btn btn-primary" type="submit">Login</button>
      </form>
      <button type="button" className="Auth-btnRegister btn btn-secondary" onClick={goToRegister}>Register</button>
      <div className="Auth__socials">
        <a href="/login">
          <FaGoogle color="#161416" size={24} />
          <h3>Iniciar sesion con Google</h3>
        </a>
        <a href="/login">
          <FaTwitter color="#161416" size={24} />
          <h3>Iniciar sesion con Twitter</h3>
        </a>
      </div>
    </AuthLayout>
  );
};

export default Login;
