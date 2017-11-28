import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heroes from './Heroes';
import Questions from './Questions';
import Header from './header.js';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <div>
      <Header />
      <Questions />
      <div
      	className="heroBigContainer"
      >
    		<Heroes />
    		<Heroes />
        	<div
              className="buttonStyle"
          >
              {/*
                <button
                  class="button2Size"
                  onClick={() => this.refreshClick()}
              >
                  Refresh
              </button>
            */}
          </div>
      </div>
    </div>
  ,document.getElementById('root'));
registerServiceWorker();
