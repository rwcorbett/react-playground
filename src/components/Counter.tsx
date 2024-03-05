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
        // sessionStorage will persist until browser window closes, local will stay in browser
        const getLastCount = parseInt(localStorage.getItem('totalCount') ?? '0');
        const newCount = count + getLastCount;
        console.info(`storing new totalCount: ${count} + ${getLastCount} = ${newCount} `);
        localStorage.setItem('totalCount', newCount.toString());
    }, [totalCount])

    useEffect(() => {
        const getLastCount = parseInt(localStorage.getItem('totalCount') ?? '0');
        console.info('get lastCount', getLastCount);
        // setTotalCount(getLastCount); //BUG: this is unsafe! this triggers the other fn to keep increasing the lastCount!
    })

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
