import React from 'react';
import './assets/styles/index.scss';
import { Footer, Header } from './components';
import { Contact } from './views';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};
export default App;
