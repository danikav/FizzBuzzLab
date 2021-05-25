import {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [number, setNumber] = useState(1);
  const [output, setOutput] = useState(1);


  useEffect(() => {
    if (number % 3 === 0 && number % 5 === 0) {
      setOutput("fizzbuzz")
    } else if (number % 3 === 0) {
      setOutput("fizz")
    } else if (number % 5 === 0) {
      setOutput("buzz")
    } else {
      setOutput(number);
    }

  }, [number])

  const handleInc = () => {
    setNumber(number + 1)
  }

  return (
    <div className="App">
      <h2>The number is {number}</h2>
      <button value={number} onClick={handleInc}>Increase Number</button>
      <h2> The output is {output}</h2>
    </div>
  );
}

export default App;
