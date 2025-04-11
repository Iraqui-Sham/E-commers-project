import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            num1: 1,
            num2: 1
        }
    }

    render() {
        console.log("Parent Component is rendered")
        return (
            <>
                <h1>Class Component should component vs pure component</h1>
                <h2>This is Paren component</h2>
                <h3>Num1 {this.state.num1} | Num2 {this.state.num2}</h3>
                <button onClick={() => this.setState({ num1: this.state.num1 + 1 })}>Increment Num1</button>
                <button onClick={() => this.setState({ num2: this.state.num2 + 1 })}>Increment Num2</button>
                <hr />
                <Child num1={this.state.num1} num2={this.state.num2} />
            </>
        )
    }
}




// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//     constructor() {
//         super()
//         this.state = {
//             num: 1
//         }
//     }

//     render() {
//         console.log("Parent Component is rendered")
//         return (
//             <>
//                 <h1>Class Component should component vs pure component</h1>
//                 <h2>This is Paren component</h2>
//                 <h3>Num1 {this.state.num}</h3>
//                 <button onClick={() => this.setState({ num: this.state.num + 1 })}>Increment</button>
//                 <hr />
//                 <Child />
//             </>
//         )
//     }
// }
