import React from 'react';
import ReactDOM from 'react-dom';
// import FaceOff from './faceoff';
// import Home from './home'
import App from './App'
import { BrowserRouter } from 'react-router-dom'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
