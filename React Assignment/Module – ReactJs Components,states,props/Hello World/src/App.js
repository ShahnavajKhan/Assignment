import React from 'react';
import './App.css';
import reactLogo from './logo.svg'; 

function App() {
  return (
    <div className="App">
      <h1>React JS</h1>
      <div className="react-logo-container">
        <img src={reactLogo} alt="React Logo" className="react-logo" />
      </div>
      <div className="hello-world">
        <h1>Hello World</h1>
      </div>
      
    </div>
  );
}

export default App;
