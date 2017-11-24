import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heroes from './Heroes';
import Questions from './Questions';
import "./heroes.css";

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>

          <Questions />
          <div
          	className="heroBigContainer"
          >
          		<Heroes />
          		<Heroes />
          </div>
    </div>
  ,document.getElementById('root'));
registerServiceWorker();
