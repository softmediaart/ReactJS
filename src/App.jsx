import React, { useState} from 'react';
import { BrowserRouter,Redirect,Switch,Route,Link } from "react-router-dom";
import './App.css';
import {CounterClass} from "./components/counter/counter-class/CounterClass";
import {Form} from "./components/form/Form";
import {Message} from './Message';
import {Profile} from "./Screens/Profile"
import {Chats} from "./Screens/Chats";
import {Main} from "./Screens/Main";
import {Other} from "./Screens/Other";
import {ROUTES} from "./Routing/constants";





function App()  {

    const [messageList, setMessageList]  = useState([]);
    const changeMessagelist = (newMessage) => {setMessageList([...messageList,newMessage])}

    return (
        <div>
           <BrowserRouter>
             <header>
                        <ul>
                             <li>
                               <Link to={ROUTES.MAIN}>Home</Link>
                             </li>
                             <li>
                               <Link to={ROUTES.PROFILE}>Profile</Link>
                             </li>
                             <li>
                               <Link to={ROUTES.CHATS}>Chats</Link>
                             </li>
                            <li>
                                <Link to={ROUTES.OTHER}>Other</Link>
                            </li>
                        </ul>

                {messageList.map((el,i) =>{
                   return <div key={i}>
                       <p>{el.authorValue}</p>
                       <p>{el.messageValue}</p>
                       </div>
                })}

            </header>
               <Switch>
                   <Route exact path={ROUTES.MAIN}>
                       <Main/>
                       <Message>
                           {({className}) => {
                               return <div className={className}>Text</div>
                           }}
                       </Message>
                   </Route>
                   <Route path={ROUTES.PROFILE} component={Profile}></Route>
                   <Route
                       exact
                       path={ROUTES.CHATS}>
                       <Chats/>
                   </Route>
                   <Route path={ROUTES.CHAT}>
                       <Chats/>
                   </Route>
                   <Route path={ROUTES.OTHER}>
                       <Other/>
                       <CounterClass />
                       <Form changeMessagelist={changeMessagelist}/>
                   </Route>
                   <Route path={ROUTES.NOT_FOUND}>Page not found 404</Route>
                   <Route path="*">
                       <Redirect to={ROUTES.NOT_FOUND}/>
                   </Route>
               </Switch>
           </BrowserRouter>
        </div>
    );
}

export default App;












