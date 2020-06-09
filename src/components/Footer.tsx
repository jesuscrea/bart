import React from 'react';
import { Link } from '.';
import { CONTACT as CONSTANTS } from '../core/config/constants';
import { CONTACT as LITERALS } from '../core/config/literals';

const Footer: React.FC = () => {
  const cookiesMsg = 'cookie & privacy policy';

  return (
    <div className="Footer">
      <div className="Footer__pre">
        <span className="yellow">{cookiesMsg}</span>
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
