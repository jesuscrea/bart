import React from 'react';
import { Title, Link } from '.';
import { ARTIST } from '../core/config/constants';
import { capitalize } from '../core/utils';
import logo from '../assets/images/logo.png';

const Header: React.FC = () => (
  <div className="Header">
    <div className="Header__pre">
      <img className="Header__logo" src={logo} alt="logo" />
      <Title className="Header__Title" title={ARTIST.TITLE} />
    </div>
    <div className="Header__description">
      {ARTIST.DESCRIPTION.map((el: string, index: any) => (
        <Link
          key={`description-link-${index}`}
          className="pr--2"
          href={'#'}
          text={capitalize(el)}
        />
      ))}
    </div>
  </div>
);

export default Header;
