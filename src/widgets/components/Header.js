import React from 'react';
import { Link } from 'react-router-dom';
import { MdNotifications } from 'react-icons/md';

import Search from './Searchbox';

import logo from '../../assets/icons/fakeLogo.png';
import user from '../../assets/images/user.jpg';

const header = () => {
  return (
    <header className="header">
      <Link to="/landing" className="header-logo">
        <img src={logo} alt="Logo" />
      </Link>
      <Search />
      <div className="header-user">
        <MdNotifications className="header-notification" />
        <Link to="/profile">
          <img src={user} alt="User" />
        </Link>
      </div>
    </header>
  );
};

export default header;
