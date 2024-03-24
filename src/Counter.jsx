import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        // update function
        setCount(c => c+1);
        setCount(c => c+1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="counter-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>);
}
