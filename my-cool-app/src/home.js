import React, { Component } from 'react';
import "./home.css";
import Header from './header.js';

class Home extends Component {
	constructor() {
		super()

		this.state = {
			isPlaying: false
		}
	}
	render() {
		var videoSrc="https://www.youtube.com/embed/a1vWUe83LsQ?autoplay=1&playlist=a1vWUe83LsQ&rel=0&showinfo=0&controls=0&modestbranding=1&allowfullscreen"
		return(
			<div
				className="container"
			>
				<Header />
				<div className="innerContainer">
					<iframe
						className="player"
						type="text/html"
	  					src={videoSrc}
	  					frameborder="0"
					/>
				</div>
			</div>
		)
	}

}

export default Home;