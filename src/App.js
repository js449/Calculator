//App Component (App.js): Import the Calculator component and render it in the App component.
import React from "react";
import Calculator from "./Calculator";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <Calculator />
    </div>
  );
}

export default App;

