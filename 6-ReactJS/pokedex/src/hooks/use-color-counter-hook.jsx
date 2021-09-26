import {useState, useEffect} from 'react';

function useColorCounter(step){
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('bg-green');
    useEffect(() => {
        setColor(count%2===0 ? 'bg-green': 'bg-red');
    }, [count]);
    return [count, color, () => setCount(count+step)];
}

export {
    useColorCounter
};