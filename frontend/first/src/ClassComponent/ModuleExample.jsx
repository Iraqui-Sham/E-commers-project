import React, { Component } from "react"

export var name = "Shamsher Alam"

export var arr = [10,20,30,40,50,60,70,80,90,100]

export var emp = {
    id: 1001,
    name: "Shamsher",
    dsg: "Student",
    salary: 50000,
    city: "Motihari",
    state: "Bihar"
}

export function display(){
    return (
        <h3>This is display() of ModuleExample</h3>
    )
}

export default class ModuleExample extends Component {
    render() {
        return (
            <>
               <h1>Class Component Module Example</h1>
               <h2>This is Class Component</h2>
            </>
        )
    }
}


/*
import React, { Component } from "react"

var name = "Shamsher Alam"

var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

var emp = {
    id: 1001,
    name: "Shamsher",
    dsg: "Student",
    salary: 50000,
    city: "Motihari",
    state: "Bihar"
}

function display() {
    return (
        <h3>This is display() of ModuleExample</h3>
    )
}

class ModuleExample extends Component {
    render() {
        return (
            <>
                <h1>Class Component Module Example</h1>
                <h2>This is Class Component</h2>
            </>
        )
    }
}
export default ModuleExample       // default export (import ke time iska name change kar sakte hai)
export { name, arr, emp, display }     // name export (import ke time iska name change nhi kar sakte)
*/

// points :- 
// 1. jab ham module banate hai to usme ek se jyada elements ko export kar sakte hai.
// 2. agar multiple items export karna hai to ek item default export hoga baki sab  name export hoga
//    iski koi bhi limit nahi hai kitne bhi elemnts export karna hoga jo element jyada kaam ka ho use 
//    default export kr den achahiye aur baki sab named export krna do
// 3. import karte time sabko ek sath kr sakte hai but bar bar likhn apdega 
//   ya jo jaise import hua hai waise hi export kar lo
//    default export direct aur name export in curlibraces
//    default ke name ko change kar sakte hai import ke time but name export ka nahi