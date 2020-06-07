import React from 'react';
import { Link } from '.';
import { CONTACT_CONSTANTS } from '../core/config/constants';
import { CONTACT_LITERALS } from '../core/config/literals';

const Footer: React.FC = () => (
  <div className="Footer">
    <div className="Footer__pre">cookie & privacy policy</div>
    <div className="Footer__contact">
      <Link
        className="Header__link"
        href={CONTACT_CONSTANTS.URLS.INSTAGRAM}
        text={CONTACT_LITERALS.INSTAGRAM}
      />
      <Link
        className="Header__link"
        href={CONTACT_CONSTANTS.URLS.CONTACT_US}
        text={CONTACT_LITERALS.CONTACT_US}
      />
    </div>
  </div>
);
export default Footer;
