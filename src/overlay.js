import React, { Component } from 'react';
import "./css/overlay.css";
import { Link } from 'react-router-dom';


class Overlay extends Component {
	constructor() {
		super();
		this.state = {
			isShowing: true,
			isHidden: false,
		}
	}
	render() {
		return(
			<div className="overlay"
				id={this.state.isHidden ? 'overlayGone' : 'overlayStay'}
				>

				<div className="title">
					How to play
				</div>

	 			<div className= {this.state.isShowing ? 'rule' : 'ruleHidder'}>
	 				<p className="text">
						In a group setting, the person currently playing will "roll" two random sets of characters
						from the marvel universe and answer the question presented above
						by selecting one of the two characters. The player must chose a character to the best
						of their ability and should explain why they made their choice. After answering
						the question, the player's turn is over and can chose the next person to answer the next question.
					</p>
					<img className="image1" alt="marvel-vurses" />
					<button
						className="hover button"
						onClick={() => this.quickHide()}>
						Next
					</button>
					<button
						className="hover skip button"
						>
						<Link
								to="/faceoff"
								className="linkOverlayStyle"
							>
							Skip
						</Link>
					</button>
				</div>

				<div className={this.state.isShowing ? 'ruleHidder' : 'rule'}>
					<img className="image2" alt="deadpool" />
					<p className="text2">
						HOWEVER, if the person who is playing has no idea who both characters are, he or she is allowed
						to make another roll. THIS RULE DOES NOT APPLY TO QUESTIONS
						BASED ON APPEARANCE.
					</p>
					<button
						className="hover button"
						>
						<Link
								to="/faceoff"
								className="linkOverlayStyle"
							>
							Start
						</Link>
					</button>
				</div>
			</div>
		)
	}

	quickHide(){
		this.setState(currentState => ({
			isShowing: !currentState.isShowing,
		}),()=> console.log(`slideshow visibility: ${this.state.isShowing}`))
	}


	// overlayToggle(){
	// 	this.setState(currentState => ({
	// 		isHidden: !currentState.isHidden
	// 	}),()=> console.log(`overlay visibility: ${this.state.isHidden}`))
	// }
}

export default Overlay;
