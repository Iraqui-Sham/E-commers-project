import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor(){
        super()
        this.data = [
            { id: 101, Name: "Shamsher", dsg: "Student", Salary: 150000, City: "Motihari", State: "bihar" },
            { id: 101, Name: "Kaif", dsg: "Student", Salary: 20000, City: "Gaya", State: "bihar" },
            { id: 101, Name: "Sultan", dsg: "Student", Salary: 30000, City: "Gopalganj", State: "bihar" },
            { id: 101, Name: "Khushi", dsg: "Student", Salary: 340000, City: "Siwan", State: "bihar" },
            { id: 101, Name: "Alam", dsg: "Student", Salary: 250000, City: "Patna", State: "bihar" }
        ]
    }
    render() {
        return (
            <>
                <h1>Class Component Example for send data from Parent to child</h1>
                <h2>This is Parent Component</h2>
                <hr/>
                <Child data = {this.data}/>
            </>
        )
    }
}



// import React, { Component } from 'react'
// import Child from './Child'

// export default class Parent extends Component {
//     constructor(){
//         super()
//         this.name = "Shamsher Alam"
//         this.dsg = "Student"
//         this.salary = 135000
//     }
//     render() {
//         return (
//             <>
//                 <h1>Class Component Example for send data from Parent to child</h1>
//                 <h2>This is Parent Component</h2>
//                 <hr/>
//                 <Child name = {this.name} dsg={this.dsg} salary = {this.salary} />
//             </>
//         )
//     }
// }

/*
import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    render() {
        return (
            <>
                <h1>Class Component Example for send data from Parent to child</h1>
                <h2>This is Parent Component</h2>
                <hr/>
                <Child name="Shamsher Alam" dsg="Student" salary={135000} />
            </>
        )
    }
}
*/