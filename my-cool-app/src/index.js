import React from 'react';
import ReactDOM from 'react-dom';
import FaceOff from './faceoff';
import Home from './home'

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <FaceOff />, document.getElementById('root'));
registerServiceWorker();
