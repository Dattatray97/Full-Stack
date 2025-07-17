import { useState } from "react";

function Op() {
    const [Counter, setCounter] = useState(0); 

    const Increment = () => setCounter(Counter + 1);
    const Decrement = () => setCounter(Counter - 1);
    const Reset = () => setCounter(0);

    return (
        <div>
            <p>Count is {Counter}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    );
}

export default Op;