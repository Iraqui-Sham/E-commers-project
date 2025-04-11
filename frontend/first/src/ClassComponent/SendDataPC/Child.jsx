import React, { Component } from 'react'

export default class Child extends Component {
    render() {
        return (
            <>
                <h1>This is Child Component</h1>
                <table border={2} cellPadding={10}>
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
                            this.props.data?.map((item, index) => {         // ? - optional channing (check data in props.data then execute map)
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



// import React, { Component } from 'react'

// export default class Child extends Component {
//     render() {
//         return (
//             <>
//                 <h1>This is Child Component</h1>
//                 <h2>Name : {this.props.name}</h2>
//                 <h2>Designation : {this.props.dsg}</h2>
//                 <h2>Salary : {this.props.salary}</h2>
//             </>
//         )
//     }
// }
