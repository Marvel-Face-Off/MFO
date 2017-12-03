import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './home';
import FaceOff from './faceoff';

class App extends Component{

	render() {
		return(
			<Switch>
		      <Route
		        exact
		        path="/"
		        component={Home}
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
		)
	}
}

export default App;