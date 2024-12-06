import React, { useState } from 'react';
import React from 'react';
import './miniräknareStyling.css';



const App = () => {

  const [currentValue, setCurrentValue] = useState('');
  const [storedValue, setStoredValue] = useState(null);
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState('');

  const handleInput = (e) => setCurrentValue(e.target.value);

  const add = () => {
    setStoredValue(Number(currentValue));
    setOperation('+');
    setCurrentValue('');
  };

  const subtract = () => {
    setStoredValue(Number(currentValue));
    setOperation('-');
    setCurrentValue('');
  };

  const multiply = () => {
    setStoredValue(Number(currentValue));
    setOperation('*');
    setCurrentValue('');
  };

  const divide = () => {
    setStoredValue(Number(currentValue));
    setOperation('/');
    setCurrentValue('');
  };

  const calculate = () => {
    const operationsMap = {
      '+': storedValue + Number(currentValue),
      '-': storedValue - Number(currentValue),
      '*': storedValue * Number(currentValue),
      '/': storedValue / Number(currentValue),
    };
    setResult(operationsMap[operation]);
    setStoredValue(null);
    setOperation('');
    setCurrentValue('');
  };

  return (
    <div>
      <h1>Minimal Calculator</h1>
      <input
        value={currentValue}
        onChange={handleInput}
        placeholder="Enter a number"
      />
      <div>
        <button onClick={add}>Add</button>
        <button onClick={subtract}>Subtract</button>
        <button onClick={multiply}>Multiply</button>
        <button onClick={divide}>Divide</button>
        <button onClick={calculate}>=</button>
      </div>
      <h2>Result: {result}</h2>
    </div>
  );
};


export default miniräknare