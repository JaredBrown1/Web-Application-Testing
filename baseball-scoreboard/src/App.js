import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Baseball!</h1>
      <div className="scores">
        <div>Home</div>
        <div>Inning</div>
        <div>Away</div>
      </div>
      <div className="scores">
        <div>Ball</div>
        <div>Strike</div>
        <div>Out</div>
      </div>
    </div>
  );
}

export default App;
