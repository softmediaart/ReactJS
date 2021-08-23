import {useEffect, useState} from "react";
import './Counter.css';
import {usePrevious} from "./usePrevious";


 export const Counter =() => {
    const [counter, setCounter] =  useState (0);

    const prevCount = usePrevious(counter);
    console.log(prevCount);

    useEffect(()=>{
       console.log('useEffects did mount');
    }, [counter]);

    const handleClick =()=> {
        setCounter(counter+1);
    console.log(counter);
    };
    return (
        <div className="Counter">
        <span>{counter}</span>
        <button onClick={handleClick} className="Counter-button">Click me</button>
       </div>
    );
};