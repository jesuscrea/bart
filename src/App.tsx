import React from 'react';
import './assets/styles/index.scss';
import { Footer } from './components';
import { Home, Drawings, Contact } from './views';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      {/* <Drawings /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};
export default App;
