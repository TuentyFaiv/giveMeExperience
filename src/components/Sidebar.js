import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import feedIcon from '../assets/icons/feed.png';
import projectsIcon from '../assets/icons/projects.png';
import eventsIcon from '../assets/icons/events.png';
import dmsIcon from '../assets/icons/dms.png';
import alumnoIcon from '../assets/icons/alumno.png';

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMenu = () => {
    const element = document.querySelector(".menu");
    element.classList.toggle("expanded");
    setExpanded(!expanded);
  };

  const handleHideMenu = () => {
    const element = document.querySelector(".menu");
    if (element.classList.contains("expanded")) {
      element.classList.remove("expanded");
      setExpanded(!expanded);
    }
  }

  return (
    <header className="menu">
      <div className="menu__burger" onClick={handleMenu}>
        <div />
        <div />
        <div />
      </div>
      <nav className="menu__navigation">
        <ul>
          <li className="menu-item">
            <Link to="/" onClick={handleHideMenu}>
              <img src={feedIcon} className="icon" />
              {
                expanded && <h1>Feed</h1>
              }
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/projects" onClick={handleHideMenu}>
              <img src={projectsIcon} className="icon" />
              {
                expanded && <h1>Projects</h1>
              }
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/events" onClick={handleHideMenu}>
              <img src={eventsIcon} className="icon" />
              {
                expanded && <h1>Events</h1>
              }
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/dms" onClick={handleHideMenu}>
              <img src={dmsIcon} className="icon" />
              {
                expanded && <h1>Messages</h1>
              }
            </Link>
          </li>
        </ul>
      </nav>
      <div className="profile-icon">
        <Link to="/profile" onClick={handleHideMenu}>
          <img src={alumnoIcon} />
          {
            expanded && <h1>Perfil</h1>
          }
        </Link>
      </div>
    </header>
  );
}

export default Sidebar;