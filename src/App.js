import React, {useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message";
import {Counter} from "./components/counter";
import {CounterClass} from "./components/counter/counter-class/CounterClass";
import {Form} from "./components/form/Form";
import {MessageList} from "./components/message-list/MessageList";


const extraText = 'My first project for';

const App =()=> {
    const [name,setName] =useState("");

    const handleNameChange = useCallback((e) => {
      setName(e.target.value);
    },[]);


    return (
        <div className="App">
            <header className="App-header">
                <Counter />
                <Counter />
                <CounterClass />
                <Form name={name} handleNameChange={handleNameChange}/>
                <br/>
                <br/>
                <br/>
                <MessageList/>
            </header>
        </div>
    );
}

export default App;


// function App({name,lastName}) {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//            Begin <h3 style={{color: "green"}}> <Message extraText={extraText} /> {name}{lastName}</h3>//
//       </header>
//     </div>
//   );
// }
//
// export default App;











