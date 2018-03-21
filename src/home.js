import React, { Component } from 'react';
import "./css/home.css";
import YoutubePlayer from 'react-youtube-player';
import Header from './header.js';
import { Link } from 'react-router-dom';

class Home extends Component {
	constructor() {
		super()

		this.state = {
			hideOverlay: true,
			playbackState: YoutubePlayer.stateNames[1]
		}
	}
	render() {
		return(
			<div className="homeContainer">
				<div
					className="container"
				>
				<Header />
					<div className={this.state.hideOverlay ? "innerContainer" : "innerContainerFade"}>
						<YoutubePlayer
							videoId='a1vWUe83LsQ'
							className="player"
							playbackState={this.state.playbackState}
							onPause={() => this.handlePause()}
							onPlay={() => this.handlePlay()}
							configuration={
								{
									loop: 1,
									rel: 0,
									showinfo: 0,
									controls: 0,
									modestbranding: 1,
									frameBorder: 0,
									allowfullscreen: true
								}
							}
						/>
					</div>
					<div
						className={this.state.hideOverlay ? "overlayHide" : "overlayShow"}
						// onClick={this.toggleOverlay()}
					>
						<div>
								<div
									className="instructionsClick"
									>
									<Link
										to="/overlay"
										className="linkStyle"
										>
										Instructions
									</Link>
								</div>
							</div>
								<div
										className="hasBorder1 hasBorder2"
								>
										<div
											className="playClick"
										>
								<Link
									to="/faceoff"
									className="linkStyle"
								>
									Play
								</Link>
							</div>
						</div>
						<div
							className="hasBorder2"
						>
							<div
								className="introClick"
								onClick={() => this.handlePlay()}
							>
								Intro
							</div>
						</div>
					</div>
				</div>
				<div className="footerContainer">
					<Link
						to="/overlay"
						className="linkStyle footerStyle"
					>
						Play Now!
					</Link>
				</div>
			</div>
		)
	}


	handlePlay() {
		console.log(YoutubePlayer.defaultProps)
		this.setState({
			playbackState: YoutubePlayer.stateNames[1]
		}, () => console.log(`Video Paused ${this.state.playbackState}`))
		this.setState({
			hideOverlay: true
		}, () => console.log(`Overlay Hidden: ${this.state.hideOverlay}`))
	}

	handlePause() {
		this.setState({
			playbackState: YoutubePlayer.stateNames[2]
		}, () => console.log(`Video Paused ${this.state.playbackState}`))
		this.setState({
			hideOverlay: false
		}, () => console.log(`Overlay Hidden: ${this.state.hideOverlay}`))
	}
}



export default Home
