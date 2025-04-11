import React, { Component } from "react"

export default class ArrayOfExample extends Component {
    constructor() {
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
                <h1>Class Component Example to dispaly the array of object</h1>
                <table border={2} cellPadding={2}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Designation</th>
                            <th>Salary</th>
                            <th>City</th>
                            <th>State</th>
                        </tr>
                    </thead>
                    <tbody>
                        {                                    // structure ke andar iterator loop use nhi kar sakte hai so {} use kiya jata hai
                            this.data.map((item, index) =>{  //map apne andar ke call back function ke return data ko as array represent karta hai
                                return <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.Name}</td>
                                    <td>{item.dsg}</td>
                                    <td>{item.Salary}</td>
                                    <td>{item.City}</td>
                                    <td>{item.State}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </>
        )
    }
}
