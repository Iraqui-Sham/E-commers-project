import React, { createContext, useReducer } from 'react'
import Reducer from './Reducer'
import Child1 from './Child1'

export const CounterContext = createContext()

export default function Parent() {
    const [state, dispatch] = useReducer(Reducer, { count1: 1, count2: 1, count3: 1 })
    return (
        <>
            <h1>ContextAPI Example</h1>
            <h1>This is Parent Component</h1>
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
            <CounterContext.Provider value={{state,dispatch}}>
                <Child1 />
            </CounterContext.Provider>
        </>
    )
}





// import React, { createContext, useReducer } from 'react'
// import Reducer from './Reducer'
// import Child1 from './Child1'

// export const CounterContext = createContext()

// export default function Parent() {
//     const [state, dispatch] = useReducer(Reducer, { count: 1 })
//     return (
//         <>
//             <h1>ContextAPI Example</h1>
//             <h1>This is Parent Component</h1>
//             <h3>Count : {state.count}</h3>
//             <button onClick={() => dispatch({ type: "INC" })}>Increament</button>
//             <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
//             <hr/>
//             <CounterContext.Provider value={{state,dispatch}}>
//                 <Child1 />
//             </CounterContext.Provider>
//         </>
//     )
// }




// import React, { createContext, useReducer } from 'react'
// import Reducer from './Reducer'
// import Child1 from './Child1'

// export const CounterContext = createContext()
// function init(args) {
//     return { count: args.count + 10 }

// }

// export default function Parent() {
//     const [state, dispatch] = useReducer(Reducer, { count: 1 }, init)
//     return (
//         <>
//             <h1>ContextAPI Example</h1>
//             <h1>This is Parent Component</h1>
//             <h3>Count : {state.count}</h3>
//             <button onClick={() => dispatch({ type: "INC" })}>Increament</button>
//             <button onClick={() => dispatch({ type: "DEC" })}>Decreament</button>
//             <hr />
//             <CounterContext.Provider value={{ state, dispatch }}>
//                 <Child1 />
//             </CounterContext.Provider>
//         </>
//     )
// }



// import React, { createContext } from 'react'
// import Child1 from './Child1'

// export const NameContext = createContext()
// export const SalaryContext = createContext()
// export const DsgContext = createContext()

// export default function Parent() {
//     return (
//         <>
//             <h1>This is Parent Component</h1>
//             <NameContext.Provider value="Shamsher Alam">
//                 <SalaryContext.Provider value={135000}>
//                     <DsgContext.Provider value="Student">
//                         <Child1 />
//                     </DsgContext.Provider>
//                 </SalaryContext.Provider>
//             </NameContext.Provider>
//         </>
//     )
// }
// // inner function (component) outer function ke value ko acces kar lega