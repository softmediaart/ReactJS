import {useEffect, useState, useRef} from "react";
import {TextField} from "@material-ui/core";

export const Form = (name) => {

    const [message, setMessage]  = useState({authorValue:'',messageValue:''});


    const handleAuthorChange = (e)=> {
        setMessage({ ...setMessage, authorValue: e.target.value});

    }
    const handleMessageChange = (e)=> {
        setMessage({ ...setMessage, messageValue: e.target.value});
    }

    const handleSubmit = () => {
        name.changeMessagelist(message);
        setMessage({authorValue:'',messageValue:''});


    }

    const ref = useRef(null);

    useEffect(()=> {
        ref.current?.focus();
    },[])


    return  (
        <div>

             <TextField   color='secondary' id="standard-basic" label="Standard" value={message.authorValue} onChange={handleAuthorChange} inputRef={ref} /> {" "}
             <TextField   id="standard-basic" label="Standard" value={message.messageValue} onChange={handleMessageChange} />
             <button onClick={handleSubmit}>Отправить</button>

            </div>
    );
};



