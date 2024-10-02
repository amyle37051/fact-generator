import React, { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [fact, setFact] = useState(''); //state to store current fact, initially empty

  const getFacts = () => {
      fetch('https://api.api-ninjas.com/v1/facts', {
      method: 'GET',
      headers: { 'X-Api-Key': 'LT8DgJZgF7w1VFwhvyVnXEWf8jtYTXsfHZ0m4019' },
    })

    .then((response) => response.json()) //convert response to json format

    .then((data) => { 

      //check if returned data contains facts
      if (data.length > 0) {

        //update 'fact' state with the first fact from API response
        setFact('Fact: ' + data[0].fact);
      } else {
        setFact('No facts available. Try again later.'); 
      }
    });
};

  return (
    <div>
      <h1>Random Fact Generator</h1>
      <button onClick={getFacts}>Get a Random Fact!</button>
      <p>{fact}</p>
    </div>
  );
}

export default App
