import React, { Component } from 'react';
import "./overlay.css";

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
	<nav>
		<div className="overlay" 
			id={this.state.isHidden ? 'overlayGone' : 'overlayStay'}
			>

			<div className="title">
				How to play
			</div>

 			<div className= {this.state.isShowing ? 'rule' : 'ruleHidder'}>
 				<p className="text"> 
					One person of a group must "roll" two random sets of characters
					from the marvel universe and answer the question presented above
					the two choices. The player must chose a character to the best
					of their ability and should explain their choice. After answering
					the question, the player turn is over and can chose the next person. 
				</p>
				<img className="image1" />
				<button className="hover button" onClick={() => this.quickHide()}> Next </button>
				<button className="hover skip button" onClick={()=> this.overlayToggle()}> Skip </button>
			</div>

			<div className={this.state.isShowing ? 'ruleHidder' : 'rule'}>
				<img className="image2" />
				<p className="text2"> 
					HOWEVER, if you have no idea who both characters are, you are
					allowed to make another roll. THIS DOES NOT APPLY TO QUESTIONS
					BASED ON APPEARANCE.
				</p>
				<button className="hover button" onClick={()=> this.overlayToggle()}> Start </button>
			</div>
		</div>
	</nav>
		)
	}

	quickHide(){
		this.setState(currentState => ({
			isShowing: !currentState.isShowing,
		}),()=> console.log(`slideshow visibility: ${this.state.isShowing}`))
	}


	overlayToggle(){
		this.setState(currentState => ({
			isHidden: !currentState.isHidden
		}),()=> console.log(`overlay visibility: ${this.state.isHidden}`))
	}
}

export default Overlay;