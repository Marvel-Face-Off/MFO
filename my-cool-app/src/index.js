import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heroes from './Heroes';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <div>
      		<Heroes />
      		<Heroes />
      </div>
  ,document.getElementById('root'));
registerServiceWorker();
