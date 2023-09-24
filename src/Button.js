//Button Component (Button.js): This component represents a calculator button.
import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button className="button" onClick={() => onClick(label)}>
      {label}
    </button>
  );
};

export default Button;
