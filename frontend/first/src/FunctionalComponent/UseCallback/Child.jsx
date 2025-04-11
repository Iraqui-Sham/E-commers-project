import React from 'react'

export default function Child(props) {
  console.log("Child componenet is rendererd")
  return (
    <>
    <h1>Child Component of UseCallback Hook Example</h1>
    <h2>Num1 = {props.num1} | Num2 = {props.num2}</h2>
    </>
  )
}
   