import React, { useEffect, useState } from 'react';
import logo from '../assets/images/logo.png';
import Vivus from 'vivus';
import sign from '../assets/images/firma.svg';

const Header: React.FC = () => {
  const [foo, setFoo] = useState(0);
  useEffect(() => {
    // setTimeout(function () {
    //   new Vivus('sign', {
    //     type: 'oneByOne',
    //     duration: 300,
    //     file: sign
    //   });
    // }, 500);
  }, [foo]);
  return (
    <div className="Header">
      <img className="Header__logo" src={logo} alt="logo" />
      <img id="sign" className="Header__sign" src={sign} alt="sign" />
      {/* <div id="sign" className="Header__sign"></div> */}
      <button onClick={() => setFoo(foo + 1)}>foo</button>
    </div>
  );
};

export default Header;
