import React, { Component } from 'react';


const questions = [

  'Which character is hotter and why (mandatory)?',
  'If facing head to head, which one would win?',
  'Which character would you consider the coolest one (not in the literal sense)?',
  'Who would you chose as a drinking buddy and why?',
  'Which power would you rather have and why?'

];

let min = 0;
let max = 4;
let random = Math.floor(Math.random() * (max - min + 1)) + min;


class Questions extends Component {

  // constructor() {
  //   super();
  // }


    render() {
      // console.log(questions[0]);
      // console.log(random);
      // console.log(questions[random]);

      return (
        <div>
          <h1 className="textStyle">
          {  questions[random]}
          </h1>
        </div>
      );
     }
   }

export default Questions;
