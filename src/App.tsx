import React from 'react';
import './assets/styles/index.scss';
import { APP_NAME } from './core/config/constants';

const App: React.FC = () => (
  <div className="App">
    <h1>{APP_NAME}</h1>
  </div>
);

export default App;
