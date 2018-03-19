import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Favicon from 'react-favicon';
import Home from './home';
import FaceOff from './faceoff';
import Overlay from './overlay';

class App extends Component{

	render() {
		return(
			<div>
				<Favicon url="https://i.imgur.com/oCRyRm3.png" />
				<Switch>
					<Route
						exact
						path="/"
						component={Home}
					/>
					<Route
						exact
						path="/overlay"
						component={Overlay}
					/>
					<Route
						exact
						path="/home"
						component={Home}
					/>
					<Route
						path="/faceoff"
						component={FaceOff}
					/>
				</Switch>
			</div>
		)
	}
}

export default App;
