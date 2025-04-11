import React, { Component } from 'react'

export default class Child extends Component {
    constructor() {
        super()
        this.state = {
            data: [
                { id: 101, Name: "Shamsher", dsg: "Student", Salary: 150000, City: "Motihari", State: "bihar" },
                { id: 101, Name: "Kaif", dsg: "Student", Salary: 20000, City: "Gaya", State: "bihar" },
                { id: 101, Name: "Sultan", dsg: "Student", Salary: 30000, City: "Gopalganj", State: "bihar" },
                { id: 101, Name: "Khushi", dsg: "Student", Salary: 340000, City: "Siwan", State: "bihar" },
                { id: 101, Name: "Alam", dsg: "Student", Salary: 250000, City: "Patna", State: "bihar" }
            ]
        }
    }

    setData(){
        this.props.getData(this.state.data)
    }
    render() {
        return (
            <>
                <h2>This is Child Component</h2>
                <button onClick={() => this.setData()}>Send data from child to parent</button>
            </>
        )
    }
}
