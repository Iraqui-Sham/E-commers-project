import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    let [num1, setNum1] = useState(1)
    let [num2, setNum2] = useState(1)
    let count = 0

    useEffect(() => {
        let time = setInterval(() => {
            console.log(count)
            if (count === 30) {
                alert("Your Session time out")
                setNum1(1)
                setNum2(1)
                count = 0
            }
            else
                count++
        }, 1000)
        return ()=>clearInterval(time)
    })

    return (
        <>
            <h1>UseEffect Example</h1>
            <h2>Num1 = {num1} | Num2 = {num2}</h2>
            <button onClick={() => setNum1(num1 + 1)}>Increament Num1</button>
            <button onClick={() => setNum2(num2 + 1)}>Increament Num2</button>
        </>
    )
}




// import React, { useEffect, useState } from 'react'

// export default function UseEffect() {
//     let [num1, setNum1] = useState(1)
//     let [num2, setNum2] = useState(1)

//     // Without dependency array: UseEffect call setup function on every re-render of component.
//     useEffect(() => {
//         console.log("UseEffect Without dependency array is called")
//     })

//     // With empty dependency array: UseEffect call setup function only one time during initial render of component.
//     useEffect(() => {
//         console.log("UseEffect with empty dependency array is called")
//     }, [])

//     // wuth dependency array: UseEffect call setup function every time when dependency changed.
//     useEffect(() => {
//         console.log("UseEffect with dependency array is called")
//     }, [num2])
//     return (
//         <>
//             <h1>UseEffect Example</h1>
//             <h2>Num1 = {num1} | Num2 = {num2}</h2>
//             <button onClick={() => setNum1(num1 + 1)}>Increament Num1</button>
//             <button onClick={() => setNum2(num2 + 1)}>Increament Num2</button>
//         </>
//     )
// }
