//Calculator Component (Calculator.js): This component will manage the calculator's state and logic.
import React, { useState } from "react";
import Display from "./Display";
import Button from "./Button";
import * as math from "mathjs"; // Import the math.js library

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState("0");

  const handleButtonClick = (value) => {
    if (displayValue === "0") {
      setDisplayValue(value);
    } else {
      setDisplayValue(displayValue + value);
    }
  };

  const handlePercentage = () => {
    try {
      const result = parseFloat(displayValue) / 100; // Calculate percentage
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };
  

  const handleClear = () => {
    setDisplayValue("0");
  };

  const handleCalculate = () => {
    try {
      const result = math.evaluate(displayValue); // Use math.js to evaluate expression
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue("Error");
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="C" onClick={handleClear} />
  
      <Button label="7" onClick={handleButtonClick} />
      <Button label="8" onClick={handleButtonClick} />
      <Button label="9" onClick={handleButtonClick} />
      <Button label="/" onClick={handleButtonClick} />
  
      <Button label="4" onClick={handleButtonClick} />
      <Button label="5" onClick={handleButtonClick} />
      <Button label="6" onClick={handleButtonClick} />
      <Button label="*" onClick={handleButtonClick} />
  
      <Button label="1" onClick={handleButtonClick} />
      <Button label="2" onClick={handleButtonClick} />
      <Button label="3" onClick={handleButtonClick} />
      <Button label="-" onClick={handleButtonClick} />
  
      <Button label="0" onClick={handleButtonClick} />
      <Button label="." onClick={handleButtonClick} />
      <Button label="+" onClick={handleButtonClick} />
      <Button label="%" onClick={handlePercentage} />
  
      <Button label="=" onClick={handleCalculate} />
    </div>
  );
  
};

export default Calculator;
