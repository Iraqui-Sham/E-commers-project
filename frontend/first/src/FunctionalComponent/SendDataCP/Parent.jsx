import React from 'react'
import { useState } from 'react';
import Child from './Child'

export default function Parent() {

    let [data, setData] = useState([])

    function getData(input) {
        setData(input)
    }
    return (
        <>
            <h2>Functional Component Example of lifting state up (sending data from child to parent)</h2>
            <h2>This is Parent Component</h2>
            <hr />
            {
                data.length ?
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
                                data.map((item, index) => {
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
            <Child getData={getData} />
            <Child />
        </>
    )
}
