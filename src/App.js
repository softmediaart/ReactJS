import React, {useCallback, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./Message";
import {Counter} from "./components/counter";
import {CounterClass} from "./components/counter/counter-class/CounterClass";
import {Form} from "./components/form/Form";


const extraText = 'My first project for';

function App()  {
    // const [name,setName] =useState("");
    //
    // const handleNameChange = useCallback((e) => {
    //   setName(e.target.value);
    // },[]);

    const [messageList, setMessageList]  = useState([]);
    const changeMessagelist = (newMessage) => {setMessageList([...messageList,newMessage])}

    return (
        <div className="App">
            <header className="App-header">
                <Counter />
                <Counter />
                <CounterClass />
                {messageList.map((el,i) =>{
                   return <div key={i}>
                       <p>{el.authorValue}</p>
                       <p>{el.messageValue}</p>
                       </div>
                })}
                <Form changeMessagelist={changeMessagelist}/>
                <br/>
                <br/>
                <br/>
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











