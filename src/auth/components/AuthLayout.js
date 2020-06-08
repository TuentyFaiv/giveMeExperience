import React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

import fakeLogo from '../../assets/icons/fakeLogo.png';

const AuthLayout = (props) => {
  const { children, location: { pathname } } = props;

  console.log(pathname);

  if (pathname === '/register') {
    return (
      <div className="Auth">
        <Link to="/landing" className="Auth-logo Auth-logo-left">
          <img src={fakeLogo} alt="Logo" />
        </Link>
        {children}
        <span className="terms-conditions"><a href="/termnsandconditions">Terminos y Condiciones</a></span>
      </div>
    );
  }

  return (
    <div className="Auth">
      <Link to="/landing" className="Auth-logo">
        <img src={fakeLogo} alt="Logo" />
      </Link>
      {children}
      <span className="terms-conditions"><a href="/termnsandconditions">Terminos y Condiciones</a></span>
    </div>
  );
};

export default withRouter(AuthLayout);
