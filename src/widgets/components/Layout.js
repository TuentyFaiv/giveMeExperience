import React from 'react';
import { withRouter } from 'react-router';

import Sidebar from './Sidebar';
import Header from './Header';

import '../../assets/css/main.scss';

const Layout = (props) => {
  const { children, location, history } = props;

  if (location.pathname === '/login' || location.pathname === '/register') {
    return (
      <section className="layout__container">
        {children}
      </section>
    );
  }

  if (location.pathname === '/landing') {
    return (
      <section className="layout__container">
        <h1>Header landing</h1>
        {children}
      </section>
    );
  }

  return (
    <section className="layout__container">
      <Sidebar history={history} />
      <Header />
      {children}
    </section>
  );
};

export default withRouter(Layout);
