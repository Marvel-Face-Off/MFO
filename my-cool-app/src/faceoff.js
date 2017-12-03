import React, { Component } from 'react';
import Heroes from './Heroes';
import Questions from './Questions';
import Header from './header.js';
import Overlay from './overlay.js';

class FaceOff extends Component {
  render() {
    return(

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
    )
  }
}

export default FaceOff;
