import React, { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const [totalCount, setTotalCount] = useState(0);
    const hoverHandler = () => {
        let newCount = count + 1;
        setCount(newCount);
        setTotalCount(newCount);
    }

    useEffect(() => {
        const getLastCount = parseInt(sessionStorage.getItem('totalCount') ?? '0');
        const newCount = count + getLastCount;
        console.info(`storing new totalCount: ${count} + ${getLastCount} = ${newCount} `);
        sessionStorage.setItem('totalCount', newCount.toString());
    }, [totalCount])

    return (
        <div className="counter">
            <p>Counter: {count} | Total hovers: {totalCount} </p>
            <div className="counter-box" onMouseEnter={hoverHandler}>
                <p>Hover me to increase count!</p>
            </div>
        </div>
    );
};

export default Counter;
