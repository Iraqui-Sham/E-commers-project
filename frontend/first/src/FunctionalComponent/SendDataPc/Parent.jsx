import React from 'react'
import Child from './Child'


export default function Parent() {

    var name = "Shamsher Alam"

    let data = [
        { id: 101, Name: "Shamsher", dsg: "Student", Salary: 150000, City: "Motihari", State: "bihar" },
        { id: 101, Name: "Kaif", dsg: "Student", Salary: 20000, City: "Gaya", State: "bihar" },
        { id: 101, Name: "Sultan", dsg: "Student", Salary: 30000, City: "Gopalganj", State: "bihar" },
        { id: 101, Name: "Khushi", dsg: "Student", Salary: 340000, City: "Siwan", State: "bihar" },
        { id: 101, Name: "Alam", dsg: "Student", Salary: 250000, City: "Patna", State: "bihar" }
    ]

  return (
    <>
      <h2>Functional Component Example to send data from Parent to child</h2>
      <h2>This is Parent Component</h2>
      <hr/>
      <Child name = {name} data = {data} Passion = "Cricket" Profession="Devoloper"/>
    </>
  )
}
