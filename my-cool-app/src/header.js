import React, { Component } from 'react';
import "./css/header.css";
import { Link } from 'react-router-dom';

class Header extends Component {
	constructor() {
		super();
		this.state = {
			isShowing: false,
			isHidden: true
		}
	}
	render() {
		return(
			<nav>
				<div
					className="logo transform liStyle"
					id={this.state.isHidden ? "logo-start" : "logo-rotate"}
					onClick={() => this.navHider()}
				>
				</div>
				<ul
					className={this.state.isHidden ? 'header-hidden' : 'header'}
					id='ulStyle'
				>
					<li
						className="liStyle hover"
					>
						<Link
							to="/"
							className="linkHeadStyle"
						>
							Home
						</Link>
					</li>
					<li
						className="liStyle hover"
					>
						<Link
							to="/faceoff"
							className="linkHeadStyle"
						>
							Face Off
						</Link>
					</li>

					<img
						className="liStyle gifStyle"
						alt="Captain America Shield GIF"
					/>
				</ul>
			</nav>
		)
	}

	navHider() {
		this.setState(currentState => ({
			isHidden: !currentState.isHidden
		}), () => console.log(`Toggling visibility of Header!: ${this.state.isHidden}`))
	}
}

export default Header