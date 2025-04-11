import React, { useContext } from 'react'
import Child5 from './Child5'

import { CounterContext } from './Parent'
export default function Child4() {

    let { state, dispatch } = useContext(CounterContext)

    return (
        <>
            <h1>This is Child4 Component</h1>
            <h3>Count1 : {state.count1}</h3>
            <button onClick={() => dispatch({ type: "INC_COUNT_1" })}>Increament Count1</button>
            <button onClick={() => dispatch({ type: "DEC_COUNT_1" })}>Decreament Count1</button>

            <h3>Count2 : {state.count2}</h3>
            <button onClick={() => dispatch({ type: "INC_COUNT_2" })}>Increament Count2</button>
            <button onClick={() => dispatch({ type: "DEC_COUNT_2" })}>Decreament Count2</button>

            <h3>Count3 : {state.count3}</h3>
            <button onClick={() => dispatch({ type: "INC_COUNT_3" })}>Increament Count3</button>
            <button onClick={() => dispatch({ type: "DEC_COUNT_3" })}>Decreament Count3</button>
            <hr/>
            <Child5/>
        </>
    )
}




// import React, { useContext } from 'react'
// import Child5 from './Child5'

// import { CounterContext } from './Parent'
// export default function Child4() {

//     let { state, dispatch } = useContext(CounterContext)

//     return (
//         <>
//             <h1>This is Child4 Component</h1>
//             <h3>Count : {state.count}</h3>
//             <button onClick={() => dispatch({ type: "INC" })}>Increment</button>
//             <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
//             <hr/>
//             <Child5/>
//         </>
//     )
// }




// import React from 'react'
// import Child5 from './Child5'
// import { NameContext, SalaryContext, DsgContext } from './Parent'

// export default function Child4() {
//     return (
//         <>
//             <h1>This is Child4 Component</h1>
//             <NameContext.Consumer>
//                 {
//                     (data) => {
//                         return <h3>Name : {data}</h3>
//                     }
//                 }
//             </NameContext.Consumer>
//             <SalaryContext.Consumer>
//                 {
//                     (data) => {
//                         return <h3>Salary : {data}</h3>
//                     }
//                 }
//             </SalaryContext.Consumer>
//             <DsgContext.Consumer>
//                 {
//                     (data) => {
//                         return <h3>Designation : {data}</h3>
//                     }
//                 }
//             </DsgContext.Consumer>
//             <hr />
//             <Child5 />
//         </>
//     )
// }
