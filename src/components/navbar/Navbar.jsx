import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';

import logo from '../../assets/logo.svg';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>

        <div className="gpt3__navbar-links_container">
          <p>
            <a href="#home">Home</a>
          </p>
          <p>
            <a href="#wgpt3"></a>What is GPT?
          </p>
          <p>
            <a href="#possibility"></a>Open AI
          </p>
          <p>
            <a href="#features"></a>Case Studies
          </p>
          <p>
            <a href="#blog"></a>Library
          </p>
        </div>
      </div>

      <div className="gpt3__navbar-sign">
        <p>Sign In</p>
        <button type="button">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
