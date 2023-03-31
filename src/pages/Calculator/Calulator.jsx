import React, { useState } from "react";
import "./Calculator.css"

function Calculator() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState("");

  const handleAddition = () => {
    const sum = parseFloat(number1) + parseFloat(number2);
    setResult(sum);
    setNumber1(0);
    setNumber2(0);
  };

  const handleSubtraction = () => {
    const difference = parseFloat(number1) - parseFloat(number2);
    setResult(difference);
    setNumber1(0);
    setNumber2(0);
  };

  const handleMultiplication = () => {
    const product = parseFloat(number1) * parseFloat(number2);
    setResult(product);
    setNumber1(0);
    setNumber2(0);
  };

  const handleDivision = () => {
    const quotient = parseFloat(number1) / parseFloat(number2);
    setResult(quotient);
    setNumber1(0);
    setNumber2(0);
  };

  return (
    <div>
      <div className="field">
      <h1>Calculator</h1>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(e.target.value)}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(e.target.value)}
        />
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
}

export default Calculator;
