import React, { useRef, useState } from 'react'

export default function UseRefExample() {
    let [name, setName] = useState("")
    let email = useRef("")
 
    function postData(){
        alert(`
            Name    :       ${name},
            Email   :       ${email.current}
            `)
    }
    console.log("Component is rendered")

    return (
        <>
            <h1>UseRef Example</h1>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Fullname' />
            <input type="text" name="email" value={email.current} onChange={(e) => email.current = e.target.value} placeholder='EmailAddress' />
            <button onClick={postData}>Submit</button>
        </>
    )
}
