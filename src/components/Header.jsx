import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import headerLogo from '../assets/images/fries.png';

const Header = () => {
  const [navLinksActive, setNavLinksActive] = useState(false);

  const toggleNavLinks = () => {
    setNavLinksActive(!navLinksActive);
  };

  const hideNavLinks = () => {
    setNavLinksActive(false);
  };

  return (
    <>
      <header>
        <nav>
          <div className="nav_logo">
            <img src={headerLogo} alt="Navbar logo" />
            <span>Knight Bite</span>
          </div>
          <div className="menu-icon" onClick={toggleNavLinks}>
            {navLinksActive ? (
                // Display close icon when navLinks are active
                <span>&times;</span>
              ) : (
                // Display menu icon when navLinks are not active
                <span>&#8801;</span>
              )}
          </div>
          <div className={`nav_links ${navLinksActive ? 'active' : ''}`}>
            <ul>
              <li>
                <NavLink to="/" onClick={hideNavLinks}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={hideNavLinks}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/men" onClick={hideNavLinks}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/franchise" onClick={hideNavLinks}>
                  Franchise
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
