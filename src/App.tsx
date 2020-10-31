import React from 'react';
import './assets/styles/index.scss';
import { Home, Contact, Gallery } from './views';
import { Route, BrowserRouter as Router } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contact} />
    </Router>
  );
};
export default App;
