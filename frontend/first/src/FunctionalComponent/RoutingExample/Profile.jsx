import React from 'react'
import { useParams } from 'react-router-dom'

export default function Profile() {
  let {name, dsg, salary} = useParams()
  return (
    <>
    <h1>This is Profile in Component</h1>
    <h2>Name : {name}</h2>
    <h2>Designation : {dsg}</h2>
    <h2>Salary : {salary}</h2>
    </>
  )
}