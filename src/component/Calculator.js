import React, { useState } from "react";
import "../component/css/Calculator.css";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString()); // Use with caution, consider safer alternatives for advanced use.
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <input type="text" className="calculator-screen" value={input} readOnly />
        <div className="calculator-buttons">
          <button onClick={() => handleClick("7")}>7</button>
          <button onClick={() => handleClick("8")}>8</button>
          <button onClick={() => handleClick("9")}>9</button>
          <button onClick={() => handleClick("/")}>/</button>

          <button onClick={() => handleClick("4")}>4</button>
          <button onClick={() => handleClick("5")}>5</button>
          <button onClick={() => handleClick("6")}>6</button>
          <button onClick={() => handleClick("*")}>*</button>

          <button onClick={() => handleClick("1")}>1</button>
          <button onClick={() => handleClick("2")}>2</button>
          <button onClick={() => handleClick("3")}>3</button>
          <button onClick={() => handleClick("-")}>-</button>

          <button onClick={() => handleClick("0")}>0</button>
          <button onClick={() => handleClick(".")}>.</button>
          <button onClick={handleClear}>C</button>
          <button onClick={() => handleClick("+")}>+</button>
          <button onClick={() => handleClick("-")}>+</button>
          <button className="span-two" onClick={handleCalculate}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
