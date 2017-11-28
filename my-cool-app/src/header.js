import React, { Component } from 'react';
import "./header.css";

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
						Home
					</li>
					<li
						className="liStyle hover"
					>
						Face Off
					</li>

					<img
						className="liStyle gifStyle"
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