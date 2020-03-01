import React from 'react';

import '../assets/css/main.scss';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <section className="layout__container">
      <Sidebar />
      {children}
    </section>
  );
}

export default Layout;