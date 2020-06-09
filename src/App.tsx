import React from 'react';
import './assets/styles/index.scss';
import { Footer, Header } from './components';
import { Contact, Drawings } from './views';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Drawings />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
