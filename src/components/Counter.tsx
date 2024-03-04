import React, { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const hoverHandler = () => {
        let newCount = count + 1;
        setCount(newCount);
    }
    return (
        <div className="counter">
            <p>Counter: {count}</p>
            <div className="counter-box" onMouseEnter={hoverHandler}>
                <p>Hover me to increase count!</p>
            </div>
        </div>
    );
};

export default Counter;
