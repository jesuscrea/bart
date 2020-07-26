import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import sign from '../assets/images/firma.png';

const Header: React.FC = () => {
  return (
    <div className="Header">
      <img className="Header__logo" src={logo} alt="logo" />
      <img id="sign" className="Header__sign" src={sign} alt="sign" />
    </div>
  );
};

export default Header;
