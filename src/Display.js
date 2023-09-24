//Display Component (Display.js): This component displays the calculator's value.
import React from "react";

const Display = ({ value }) => {
  return <div className="display">{value}</div>;
};

export default Display;
