import React, { Component } from 'react';
import "./header.css";

class Header extends Component {
	render() {
		return(
			<nav>
				<ul
					class='ulStyle'
				>
					<li
						class="liStyle logo transform"
					>

					</li>
					<li
						class="liStyle hover"
					>
						Home
					</li>
					<li
						class="liStyle hover"
					>
						Face Off
					</li>
				</ul>
			</nav>
		)
	}
}

export default Header