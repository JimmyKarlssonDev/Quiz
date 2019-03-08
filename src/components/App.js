import React, { useState } from 'react';


const shuffle = require('shuffle-array')


const Questions = [
  {   
    category:"Geography", 
    type:"multiple",
    difficulty:"easy",
    question:"What is the capital of Jamaica?",
    correct_answer:"Kingston",
    incorrect_answers:["San Juan","Port-au-Prince","Bridgetown"]    
  },
  {
    category:"Geography",
    type:"multiple",
    difficulty:"easy",
    question:"What name was historically used for the Turkish city currently known as Istanbul?",
    correct_answer:"Constaninople",
    incorrect_answers:["H&uuml;davendigar","S&ouml;\u011f&uuml;t","Adrianople"]
  },
  {
    category:"Geography",
    type:"multiple",
    difficulty:"easy",
    question:"How many countries does the United States share a land border with?",
    correct_answer:"2",
    incorrect_answers:["1","3","4"]
  }
]
 
const AnswerDisplay = props => (
<> 
<div>
    <p>
      {props.answer}
    </p>  
  </div>
</>
)



export function App({ initialData }) {
  
  const question = Questions[Math.floor(Math.random()*Questions.length)];
  const allAnswers = shuffle(question.incorrect_answers.concat(question.correct_answer));

  return (
    <div>
      <div>
        <h3>{question.category}</h3>
      </div>
      <div>{question.question}</div>
      <div>
        {   utils.range(0, allAnswers.length).map(answerIndex =>             
            <AnswerDisplay key={answerIndex} answer={allAnswers[answerIndex]}/>
        )}
      </div>
    </div>   
  );
}

const utils = {
  range: (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i),
}
