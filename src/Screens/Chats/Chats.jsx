import {Redirect,useHistory,useParams} from "react-router-dom";

import React from "react";


export const Chats = () => {

    const {chatId} = useParams ();



    if(!chatId) return <Redirect to='/not-found'/>

    console.log(chatId);



    return <div>Chat</div>;
};