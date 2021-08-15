import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message";


const extraText = 'My first project for';

function App({name,lastName}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
           Begin <h3 style={{color: "green"}}> <Message extraText={extraText} /> {name}{lastName}</h3>

      </header>
    </div>
  );
}

export default App;







