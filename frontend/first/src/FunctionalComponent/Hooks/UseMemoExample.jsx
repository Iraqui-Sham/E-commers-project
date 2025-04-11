import React, { useMemo, useState } from 'react'

function calculateValue(num) {
    var sum = 0
    for (let i = 1; i < 600000000 + num; i++) {
        sum = sum + i
    }
    return sum
}

export default function UseMemoExample() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(2)
    let sum  = useMemo(()=>calculateValue(num2),[num2])

    return (
        <>
            <h1>useMemo Hook Example</h1>
            <h2>Num1 = {num1} | Num2 = {num2}</h2>
            <h2>Sum = {sum}</h2>
            <button onClick={() => setNum1(num1 + 1)}>Increament Num1</button>
            <button onClick={() => setNum2(num2 + 1)}>Increament Num2</button>
        </>
    )
}
