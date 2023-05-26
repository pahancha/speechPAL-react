import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from './../assets/logo.png';

const Header = () => {
  return (
    <header className="hc-header">
      <div className="hc-logo-container">
        <Link to={"/"}>
        <img src={logo} alt="speechPAL logo" className="hc-logo" />
        </Link>
      </div>
      <nav className="hc-navbar">
        <ul className="hc-nav-list">
          <li className="hc-nav-item"><Link to="/web-app">Web Application</Link></li>
          <li className="hc-nav-item"><Link to="/mobile-app">Mobile Application</Link></li>
          <li className="hc-nav-item"><Link to="/how-to-use">How to Use?</Link></li>
          <li className="hc-nav-item"><Link to="/read-paper">Read Paper</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
