import React, { Component } from 'react'
import Child from './Child'

export default class Parent extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        // this.getData = this.getData.bind(this)    // method ko bind karna padta hai taaki method ke andar this kaam kar jaye because method child se call ho rha hai
    }
    // getData(input){
    //     this.setState({ data: input })
    // }

    getData = (input) => {
        this.setState({ data: input })
    }
    render() {
        return (
            <>
                <h2>Class Component Example of lifting state up (sending data from child to parent)</h2>
                <h2>This is Parent Component</h2>
                <hr />
                {
                    this.state.data.length ?
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
                                {
                                    this.state.data?.map((item, index) => {
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
                        : ''

                }
                <Child getData={this.getData} />
            </>
        )
    }
}
