import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heroes from './Heroes';
import Questions from './Questions';
import "./heroes.css";
import Header from './header.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
      <Header />
      <Questions />
      <div
      	class="heroBigContainer"
      >
    		<Heroes />
    		<Heroes />
        	<div
              class="buttonStyle"
          >
              <button
                  class="button2Size"
                  onClick={() => this.refreshClick()}
              >
                  Refresh
              </button>
          </div>
      </div>
    </div>
  ,document.getElementById('root'));
registerServiceWorker();
