import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heroes from './heroes';
import "./heroes.css";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <div
      	class="heroBigContainer"
      >
      		<Heroes />
      		<Heroes />
      </div>
  ,document.getElementById('root'));
registerServiceWorker();
