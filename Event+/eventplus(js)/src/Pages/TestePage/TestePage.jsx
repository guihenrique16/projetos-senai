import React, { useEffect, useState } from 'react';

const TestePage = () => {
    const [count, setCount] =useState(10);
    const [calculation, setCalculation] =useState(10);

    useEffect((fn) => {
        setCalculation(count * 2) 
    }, [count])

    return (
        <>
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
};

export default TestePage;