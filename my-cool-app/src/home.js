import React, { Component } from 'react';
import "./home.css";
import YoutubePlayer from 'react-youtube-player';
import Header from './header.js';

class Home extends Component {
	constructor() {
		super()

		this.state = {
			isPlaying: false,
			hideOverlay: true
		}
	}
	render() {
		var videoSrc="https://www.youtube.com/embed/a1vWUe83LsQ?&allowfullscreen"
		return(
			<div
				className="container"
			>
				<div className="innerContainer">
					<YoutubePlayer
						videoId='a1vWUe83LsQ'
						className="player"
	  					playbackState='unstarted'
	  					configuration={
	  						{
	  							autoplay: 1,
	  							loop: 1,
	  							rel: 0,
	  							showinfo: 0,
	  							controls: 0,
	  							modestbranding: 1,
	  							frameBorder: 0
	  						}
	  					}
	  					onClick={(event) => this.videoEnd(event)}
					/>
				</div>
			</div>
		)
	}

	componentDidMount() {

	}

	componentWillReceiveProps() {
		
	}

	videoEnd(event) {
		console.log(event)
		if(event.data == 1){
			this.setState(currentState =>({
				isPlaying: !currentState.isPlaying,
			}, () => console.log(`Video is playing = ${this.state.isPlaying}`)))
		}
	}

}

export default Home;