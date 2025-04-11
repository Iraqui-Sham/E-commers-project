import React from 'react'

export default function Child(props) {

    let data =
        [
            { id: 101, Name: "Shamsher", dsg: "Student", Salary: 150000, City: "Motihari", State: "bihar" },
            { id: 101, Name: "Kaif", dsg: "Student", Salary: 20000, City: "Gaya", State: "bihar" },
            { id: 101, Name: "Sultan", dsg: "Student", Salary: 30000, City: "Gopalganj", State: "bihar" },
            { id: 101, Name: "Khushi", dsg: "Student", Salary: 340000, City: "Siwan", State: "bihar" },
            { id: 101, Name: "Alam", dsg: "Student", Salary: 250000, City: "Patna", State: "bihar" }
        ]
    function sendData() {
        props.getData(data)
    }
    return (
        <>
            <h2>This is Child Component</h2>
            <button onClick={sendData}>Send data</button>
        </>
    )
}
