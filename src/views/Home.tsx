import React from 'react';
import bea from '../assets/images/drawings/Lunar.png';
import { Header } from '../components';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <Header />
      <img className="Home__img" src={bea} alt="bea" />
    </div>
  );
};

export default Home;
