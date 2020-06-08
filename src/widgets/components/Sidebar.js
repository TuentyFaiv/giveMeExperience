import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdMenu, MdHome, MdDashboard, MdEvent, MdForum } from 'react-icons/md';
import { RiLogoutCircleLine } from 'react-icons/ri';

const Sidebar = (props) => {
  const [expanded, setExpanded] = useState(false);

  const handleMenu = () => {
    const element = document.querySelector('.menu');
    element.classList.toggle('expanded');
    setExpanded(!expanded);
  };

  const handleHideMenu = () => {
    const element = document.querySelector('.menu');
    if (element.classList.contains('expanded')) {
      element.classList.remove('expanded');
      setExpanded(!expanded);
    }
  };

  const handleLogout = () => {
    props.history.push('/login');
    handleHideMenu();
  };

  return (
    <IconContext.Provider value={{ color: 'white' }}>
      <section className="menu">
        <div className="menu__burger">
          <MdMenu onClick={handleMenu} />
          {
            expanded && <h1>Menu</h1>
          }
        </div>
        <nav className="menu__navigation">
          <ul>
            <li className="menu-item">
              <Link to="/" onClick={handleHideMenu}>
                <MdHome />
                {
                  expanded && <h1>Feed</h1>
                }
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/projects" onClick={handleHideMenu}>
                <MdDashboard />
                {
                  expanded && <h1>Projects</h1>
                }
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/events" onClick={handleHideMenu}>
                <MdEvent />
                {
                  expanded && <h1>Events</h1>
                }
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/dms" onClick={handleHideMenu}>
                <MdForum />
                {
                  expanded && <h1>Messages</h1>
                }
              </Link>
            </li>
          </ul>
        </nav>
        <div className="logout">
          <div role="button" tabIndex={0} onClick={handleLogout}>
            <RiLogoutCircleLine />
            {
              expanded && <h1>Logout</h1>
            }
          </div>
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Sidebar;
