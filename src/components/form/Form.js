import {useState} from "react";

export const Form = () => {

    const [author, setAuthor]  = useState([{authorValue:''}]);
    const [message, setMessage]  = useState([{messageValue:''}]);
    console.log(author);
    console.log(message);



    const handleAuthorChange = (e)=> {
        setAuthor({authorValue: e.target.value});

    }
    const handleMessageChange = (e)=> {
        setMessage({messageValue: e.target.value});
    }

    const handleSubmit = (e) => {
        alert('Автор: ' + author.authorValue +'Сообщение: ' + message.messageValue );

    }

    return  (
        <div>
            <form  onSubmit={handleSubmit}>
            <input type='text' value={author.authorValue} onChange={handleAuthorChange}/> {" "}
            <input type='text' value={message.messageValue} onChange={handleMessageChange}/>{" "}
            <input type="submit" value="Submit" />
            </form>
            </div>
    );
};



