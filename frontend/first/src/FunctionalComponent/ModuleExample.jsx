import React from "react"

export var name = "Kaif Alam"

export var arr = [10,20,30,40,50,60,10,20,]

export var emp = {
    id: 1001,
    name: "Kaif Alam",
    dsg: "Student",
    salary: 50000,
    city: "Motihari",
    state: "Bihar"
}

export function display(){
    return (
    <h1>this is display() of ModuleExample</h1>
    )
}

export default function ModuleExample() {
    return (
        <>
        <h1>Functional Component of ModuleExample</h1>
        <h2>This is ModuleExample</h2>
        </>
    )
}