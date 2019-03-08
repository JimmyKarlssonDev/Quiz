import React, { useState } from 'react';


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
 


export function App({ initialData }) {
  const [count, setCount] = useState(0);  
  const randomIndex = Math.floor(Math.random()*Questions.length);
  return (
    <div>
      <div>{Questions[randomIndex].question}</div>
      <div>
        <div>{Questions[randomIndex].correct_answer}</div>
        <div>{Questions[randomIndex].incorrect_answers[0]}</div>
        <div>{Questions[randomIndex].incorrect_answers[1]}</div>
        <div>{Questions[randomIndex].incorrect_answers[2]}</div>
      </div>
    </div>
      

  );
}
