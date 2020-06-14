import React from 'react';
import { Title } from '.';
import logo from '../assets/images/logo.png';
import { ARTIST } from '../core/config/constants';

const Header: React.FC = () => (
  <div className="Header">
    <img className="Header__logo" src={logo} alt="logo" />
    <Title className="Header__Title" title={ARTIST.TITLE} />
  </div>
);

export default Header;
