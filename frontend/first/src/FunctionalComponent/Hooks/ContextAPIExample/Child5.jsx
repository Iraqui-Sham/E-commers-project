import React, { useContext } from 'react'

import { CounterContext } from './Parent'
export default function Child2() {

    let { state, dispatch } = useContext(CounterContext)

    return (
        <>
            <h1>This is Child2 Component</h1>
            <h3>Count1 : {state.count1}</h3>
            <button onClick={() => dispatch({ type: "INC_COUNT_1" })}>Increament Count1</button>
            <button onClick={() => dispatch({ type: "DEC_COUNT_1" })}>Decreament Count1</button>

            <h3>Count2 : {state.count2}</h3>
            <button onClick={() => dispatch({ type: "INC_COUNT_2" })}>Increament Count2</button>
            <button onClick={() => dispatch({ type: "DEC_COUNT_2" })}>Decreament Count2</button>

            <h3>Count3 : {state.count3}</h3>
            <button onClick={() => dispatch({ type: "INC_COUNT_3" })}>Increament Count3</button>
            <button onClick={() => dispatch({ type: "DEC_COUNT_3" })}>Decreament Count3</button>
        </>
    )
}



// import React, { useContext } from 'react'

// import { CounterContext } from './Parent'
// export default function Child2() {

//     let { state, dispatch } = useContext(CounterContext)

//     return (
//         <>
//             <h1>This is Child2 Component</h1>
//             <h3>Count : {state.count}</h3>
//             <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
//             <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
//         </>
//     )
// }