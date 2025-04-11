import React, { useCallback, useState } from 'react'
import Child from './Child'

export default function Parent() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)
    console.log("Parent Component is rendered")
    let child = useCallback(<Child num1 = {num1} num2 = {num2}/>, [num2])

    return (
        <>
            <h1>UseCallback Hook Example</h1>
            <h2>Num1 = {num1} | Num2 = {num2}</h2>
            <button onClick={() => setNum1(num1 + 1)}>Increament Num1</button>
            <button onClick={() => setNum2(num2 + 1)}>Increament Num2</button>
            <hr />
            {child}
        </>
    )
}
