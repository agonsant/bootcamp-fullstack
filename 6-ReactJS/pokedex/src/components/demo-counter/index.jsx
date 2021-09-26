import React from "react";
import { useColorCounter } from "../../hooks/use-color-counter-hook";
import './style.css'


function DemoColorCounter() {
    const [count, color, setColorCounter] = useColorCounter(3);
    return (
        <React.Fragment>
            <p>{count}</p>
            <button onClick={() => setColorCounter()}>Click Me</button>
            <div className={`block ${color}`}></div>
        </React.Fragment>

    )
}

export default DemoColorCounter;