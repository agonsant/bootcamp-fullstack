import { useState, useEffect, useRef } from 'react';
import { useColorCounter } from '../../hooks/use-color-counter-hook';
import './style.css';

function MyComponent() {
    const [count, color, setColorCounter] = useColorCounter(5);
    const [second, setSecond] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setSecond(s => s + 1);
        }, 1000)
        
        return () => clearInterval(intervalId); // componentWillUnmount
    }, []); // componentDidMount + componentDidUpdate

    const [mensaje, setMensaje] = useState('');
    const myRef = useRef('');

    return (
        <div>
​
            <button onClick={() => setColorCounter()}>Click Here</button>
            <p>Has clickado {count} veces</p>
            <div onClick={() => setColorCounter()} className={`cuadrado ${color}`}> </div>
            <p>This little 'p' is counting every second as a function component{second}</p>
​
            {/*EJERCICIO 5 */}
            <input ref={myRef} type="text" className="input" placeholder="Write something here"></input>
            <button onClick={() => setMensaje(myRef.current.value)}>Send it down!</button>
            <p>{mensaje}</p>
​
        </div >
    )

}

export default MyComponent;