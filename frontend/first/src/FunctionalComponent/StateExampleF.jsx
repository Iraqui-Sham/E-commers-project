import React, { useState } from "react"

export default function StateExampleF() {
    let [num, setNum] = useState(1)

    return (
        <>
            <h1>State Example of Functional Component</h1>
            <h2>Number : {num}</h2>
            <button onClick={() => num > 1 ? setNum(num - 1) : ""}>Decrement</button>
            <button onClick={() => setNum(num + 1)}>Increment</button>
        </>
    )
}

/*
import React, { useState } from "react"

export default function StateExampleF() {
    let [num, setNum] = useState(1)

    function decrement() {
        if (num > 1)
            setNum(num - 1)
    }
    function increment() {
        setNum(num + 1)
    }
    return (
        <>
            <h1>State Example of Functional Component</h1>
            <h2>Number : {num}</h2>
            <button onClick={decrement}>Decrement</button>
            <button onClick={() => increment()}>Increment</button>
        </>
    )
}
*/
// Class Component me onClick me only callback ()=> banakar hi function call hoga
// but functional component me direct aur callback dono tarike se kar sakte hai
// class component setState given hota hai aur function component me function ka name 
// apne according rakh sakte hai variable update karne ke case me .