import React from 'react'

export default function Child(props) {       // class component me this.props likhna mendatiry ha kyuki ye built in object hai but functional component me kuch bhi likh sakte hai  
    return (
        <>
            <h2>Functional Component Example to sent data from parent to child</h2>
            <h2>This is Child Component</h2>
            <h2>Name : {props.name}</h2>
            <h2>Passion : {props.Passion}</h2>
            <h2>Profession : {props.Profession}</h2>

            <table border={3} cellPadding={10}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>City</th>
                        <th>State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data?.map((item, index) => {  // <tr> always return ke samne likha jata hai nhi to data dispaly nhi hoga
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
