import React from 'react';
import { Link } from '.';
import { CONTACT as CONSTANTS } from '../core/config/constants';
import { CONTACT as LITERALS } from '../core/config/literals';
import cat from '../assets/images/black-cat-small.svg';

const Footer: React.FC = () => {
  const cookiesMsg = 'cookie & privacy policy';

  return (
    <div className="Footer">
      <div className="Footer__pre">
        <span className="gray">{cookiesMsg}</span>
        <img className="Footer__img" src={cat} />
      </div>
      <div className="Footer__contact">
        <Link className="Header__link" href={CONSTANTS.URLS.INSTAGRAM} text={LITERALS.INSTAGRAM} />
        <Link
          className="Header__link"
          href={CONSTANTS.URLS.CONTACT_US}
          text={LITERALS.CONTACT_US}
        />
      </div>
    </div>
  );
};

export default Footer;
