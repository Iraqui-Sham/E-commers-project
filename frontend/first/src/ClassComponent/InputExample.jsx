import React, { Component } from 'react'

export default class InputExample extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            email: "",
            phone: "",
            salary: "",
            city: "",
            state: ""
        }
    }

    getInputData(event) {
        var { name, value } = event.target

        this.setState(() => {
            return {
                ...this.state,
                [name]: value
            }
        })

    }
    postData(event) {
        event.preventDefault()
        alert(` 
            Name:      ${this.state.name}
            Email:    ${this.state.email}
            Phone:    ${this.state.phone}
            Salary:   ${this.state.salary}
            City:     ${this.state.city}
            State:    ${this.state.state}
        `)
    }
    render() {
        return (
            <>
                <div className="main">
                    <div className="center">
                        <h1>Class Component Input Example</h1>
                        <h2>Name: {this.state.name}</h2>
                        <h2>Email: {this.state.email}</h2>
                        <h2>Phone: {this.state.phone}</h2>
                        <h2>Salary: {this.state.salary}</h2>
                        <h2>City: {this.state.city}</h2>
                        <h2>State: {this.state.state}</h2>
                        <form onSubmit={(event) => this.postData(event)}>
                            <input type="text" name="name" required onChange={(event) => this.getInputData(event)} placeholder='Enter Full Name' />
                            <input type="email" name="email" required onChange={(event) => this.getInputData(event)} placeholder='Enter Email' />
                            <input type="tel" pattern='[6-9]{1}[0-9]{9}' name="phone" required onChange={(event) => this.getInputData(event)} placeholder='Enter Phone No' />
                            <input type="number" name="salary" required onChange={(event) => this.getInputData(event)} placeholder='Enter Salary' />
                            <input type="text" name="city" required onChange={(event) => this.getInputData(event)} placeholder='Enter City' />
                            <input type="text" name="state" required onChange={(event) => this.getInputData(event)} placeholder='Enter State' />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </>
        )
    }
}



// import React, { Component } from 'react'

// export default class InputExample extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: "",
//             email: "",
//             phone: "",
//             salary: "",
//             city: "",
//             state: ""
//         }
//     }
//     getInputData(event) {
//         var { name, value } = event.target     // destructure kar liya gya event.target se input field ko

//         this.setState(()=>{
//             return{                      // object return karega (jo bhi return karega wo setState me pass ho jayega)
//                 ...this.state,          //...this.state ko spred kar diye as it is
//                 [name] : value          // agar only name : value likhte hai to name name filed ko update karega [name] as a variable treat(currently entry field ki value change) hoga jo bhi name me field ayega like email to email me value update hogi baaki asa it is
//             }                           // aur fir this.state se spred ho kar return ho jayega setState me fir us filed ka value update ho jayega
//         })

//         // if (name === "name")
//         //     this.setState({ name: value })
//         // else if (name === "email")
//         //     this.setState({ email: value })
//         // else if (name === "phone")
//         //     this.setState({ phone: value })
//         // else if (name === "salary")
//         //     this.setState({ salary: value })
//         // else if (name === "city")
//         //     this.setState({ city: value })
//         // else
//         //     this.setState({ state: value })
//     }
//     postData() {
//         alert(`Hello
//             Name:      ${this.state.name}
//             Email:    ${this.state.email}
//             Phone:    ${this.state.phone}
//             Salary:   ${this.state.salary}
//             City:     ${this.state.city}
//             State:    ${this.state.state}
//         `)
//     }
//     render() {
//         return (
//             <>
//                 <div className="main">
//                     <div className="center">
//                         <h1>Class Component Input Example</h1>
//                         <h2>Name: {this.state.name}</h2>
//                         <h2>Email: {this.state.email}</h2>
//                         <h2>Phone: {this.state.phone}</h2>
//                         <h2>Salary: {this.state.salary}</h2>
//                         <h2>City: {this.state.city}</h2>
//                         <h2>State: {this.state.state}</h2>
//                         <input type="text" name="name" required onChange={(event) => this.getInputData(event)} placeholder='Enter Full Name' />
//                         <input type="email" name="email" required onChange={(event) => this.getInputData(event)} placeholder='Enter Email' />
//                         <input type="tel" pattern='[6-9]{1}[0-9]{9}' name="phone" required onChange={(event) => this.getInputData(event)} placeholder='Enter Phone No' />
//                         <input type="number" name="salary" required onChange={(event) => this.getInputData(event)} placeholder='Enter Salary' />
//                         <input type="text" name="city" required onChange={(event) => this.getInputData(event)} placeholder='Enter City' />
//                         <input type="text" name="state" required onChange={(event) => this.getInputData(event)} placeholder='Enter State' />
//                         <button onClick={() => this.postData()}>Submit</button>
//                     </div>
//                 </div>
//             </>
//         )
//     }
// }





// import React, { Component } from 'react'

// export default class InputExample extends Component {
//     constructor() {
//         super()
//         this.state = {
//             name: ""
//         }
//     }
//     getInputData(event) {
//         this.setState({ name: event.target.value })
//     }
//     postData() {
//         alert(`Hello ${this.state.name}`)
//     }
//     render() {
//         return (
//             <><div className="main">
//                 <div className="center">
//                     <h1>Class Component Input Example</h1>
//                     <h2>Name: {this.name}</h2>
//                     <input type="text" name="name" onChange={(event) => this.getInputData(event)} placeholder='Enter Full Name' />
//                     <button onClick={() => this.postData()}>Submit</button>
//                 </div>
//             </div>
//             </>
//         )
//     }
// }
