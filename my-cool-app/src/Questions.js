import React, { Component } from 'react';
import "./Questions.css";


const questions = [

  'Which character is hotter and why (mandatory)?',
  'If facing head to head, which one would win?',
  'Which character would you consider the coolest one (not in the literal sense)?',
  'Who would you chose as a drinking buddy and why?',
  'Which power would you rather have and why?',
  'Which costume would you look good in?',
  'Who is the most "realistic"?',
  'Who would you rather fight?',
  'Who would you follow on social media?',
  'Who would you rather bring home with you?',
  'Who has the best design?',
  'Who is the most well known?'

];

let min = 0;
let max = questions.length-1;
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
        <div
          className="divAlign"
        >
          <h1 className="styler">
          {  questions[random]}
          </h1>
        </div>
      );
     }
   }

export default Questions;
