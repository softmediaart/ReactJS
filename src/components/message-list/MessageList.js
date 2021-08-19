import {useState} from "react";
import {Form} from "../form/Form";

export const MessageList = () => {

    const [author, setAuthor]  = useState([{authorValue:''}]);

    return  (
        <div>
            {author.map((element) =>{
                return <div>{element.authorValue}</div>
            })}
        </div>

    );
};



