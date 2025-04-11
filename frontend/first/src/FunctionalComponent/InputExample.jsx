import React from 'react'
import { useState } from 'react';

export default function InputExample() {
    let [data, setData] = useState({                   // data me sabhi as object treat hoga usme variable hogi vlue hogi
        name: "",
        email: "",
        phone: "",
        salary: "",
        city: "Motihari",
        state: "Bihar"
    })


    function getInputData(event) {
        var { name, value } = event.target
        setData(() => {                             // (old) - data ki jo purani value hogi wo old name ke parameter me mil jayegi iska name kuch bhi de sakte hai
            return {                                   // setData - data ko update karega aur return {} , return karega object wo object data ke object ko replace kar dega
                ...data,                                //  old me jo value hai use spred kar denge
                [name]: value                          // ()=>   ...data, likh sakte same kaam karega beacuse same (old)=>  ...old, ke bajaye direct data ko spred kr denge because old parameter pass hua wo data ko hi represent krta hoga 
            }
        // setData((old) => {                             // (old) - data ki jo purani value hogi wo old name ke parameter me mil jayegi iska name kuch bhi de sakte hai
        //     return {                                   // setData - data ko update karega aur return {} , return karega object wo object data ke object ko replace kar dega
        //         ...old,                                //  old me jo value hai use spred kar denge
        //         [name]: value                          // ()=>   ...data, likh sakte same kaam karega beacuse same (old)=>  ...old, ke bajaye direct data ko spred kr denge because old parameter pass hua wo data ko hi represent krta hoga 
        //     }
        })
    }
    function postData(event) {
        event.preventDefault()
        alert(`
            Name       :     ${data.name}
            Email      :     ${data.email}
            Phone      :     ${data.phone}
            Salary     :     ${data.salary}
            city       :     ${data.city}
            State      :     ${data.state}
        `)
    }
    return (
        <>
            <div className="main">
                <div className="center">
                    <h1>Functional Component Input Example</h1>
                    <h2>Name   :   {data.name}</h2>
                    <h2>Email  :   {data.email}</h2>
                    <h2>Phone  :   {data.phone}</h2>
                    <h2>Salary :   {data.salary}</h2>
                    <h2>City   :   {data.city}</h2>
                    <h2>State  :   {data.state}</h2>

                    <form onSubmit={postData}>
                    <input type="text" name="name" required onChange={getInputData} placeholder='Enter Full name' />
                    <input type="text" name="email" required onChange={getInputData} placeholder='Email Address' />
                    <input type="text" name="phone" required onChange={getInputData} placeholder='Phone Number' />
                    <input type="text" name="salary" required onChange={getInputData} placeholder='Enter Salary' />
                    <input type="text" name="city" required onChange={getInputData} placeholder='City' value={data.city}/>             
                    <input type="text" name="state" required onChange={getInputData} placeholder='State' value={data.state}/>  
                                                                                                                                  
                    <button type="submit">Submit</button>     
                    </form>                                 
                </div>
            </div>
        </>
    )
}




// import React from 'react'
// import { useState } from 'react';

// export default function InputExample() {
//     let [name, setName] = useState("")
//     let [email, setEmail] = useState("")
//     let [phone, setPhone] = useState("")
//     let [salary, setSalary] = useState("")
//     let [city, setCity] = useState("")
//     let [state, setState] = useState("")


//     // function getInputData(event) {
//     //     var { name, value } = event.target
//     //     if (name === "name")
//     //         setName(value)
//     //     else if (name === "email")
//     //         setEmail(value)
//     //     else if (name === "phone")
//     //         setPhone(value)
//     //     else if (name === "salary")
//     //         setSalary(value)
//     //     else if (name === "city")
//     //         setCity(value)
//     //     else
//     //         setState(value)
//     // }
//     function postData() {
//         alert(`
//             Name       :     ${name}
//             Email      :     ${email}
//             Phone      :     ${phone}
//             Salary     :     ${salary}
//             city       :     ${city}
//             State      :     ${state}
//         `)
//     }
//     return (
//         <>
//             <div className="main">
//                 <div className="center">
//                     <h1>Functional Component Input Example</h1>
//                     <h2>Name   :   {name}</h2>
//                     <h2>Email  :   {email}</h2>
//                     <h2>Phone  :   {phone}</h2>
//                     <h2>Salary :   {salary}</h2>
//                     <h2>City   :   {city}</h2>
//                     <h2>State  :   {state}</h2>

//                     {/* <input type="text" name="name" onChange={getInputData} placeholder='Enter Full name' />
//                     <input type="text" name="email" onChange={getInputData} placeholder='Email Address' />
//                     <input type="text" name="phone" onChange={getInputData} placeholder='Phone Number' />
//                     <input type="text" name="salary" onChange={getInputData} placeholder='Enter Salary' />
//                     <input type="text" name="city" onChange={getInputData} placeholder='City' />
//                     <input type="text" name="state" onChange={getInputData} placeholder='State' /> */}

//                     <input type="text" name="name" onChange={(event) => setName(event.target.value)} placeholder='Enter Full name' />
//                     <input type="text" name="email" onChange={(event) => setEmail(event.target.value)} placeholder='Email Address' />
//                     <input type="text" name="phone" onChange={(event) => setPhone(event.target.value)} placeholder='Phone Number' />
//                     <input type="text" name="salary" onChange={(event) => setSalary(event.target.value)} placeholder='Enter Salary' />
//                     <input type="text" name="city" onChange={(event) => setCity(event.target.value)} placeholder='City' />
//                     <input type="text" name="state" onChange={(event) => setState(event.target.value)} placeholder='State' />

//                     <button onClick={postData}>Submit</button>
//                 </div>
//             </div>
//         </>
//     )
// }



// import React from 'react'
// import { useState } from 'react';

// export default function InputExample() {
//     let [name, setName] = useState("")

//     function getInputData(event){
//         setName(event.target.value)
//     }
//     function postData(){
//         alert(`Hello ${name}`)
//     }
//   return (
//     <>
//     <div className="main">
//         <div className="center">
//             <h1>Functional Component Input Example</h1>
//             <h2>Name :{name}</h2>
//             <input type="text" name="name" onChange={getInputData} placeholder='Enter Full name'/>
//             <button onClick={postData}>Submit</button>
//         </div>
//     </div>
//     </>
//   )
// }
// // getInputData me implicitly automatically event passs hojayega getInputData(event).