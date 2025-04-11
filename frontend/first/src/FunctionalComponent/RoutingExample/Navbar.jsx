import React from 'react'

import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <ul className=''>
    <li><NavLink className="btn btn-success text-light btn-md" to="">Home</NavLink></li>
    <li><NavLink className="btn btn-success text-light btn-md" to="/about">About</NavLink></li>
    <li><NavLink className="btn btn-success text-light btn-md" to="/profile">Profile</NavLink></li>
    <li><NavLink className="btn btn-success text-light btn-md" to="/contact">Contact</NavLink></li>
   </ul>
  )
}
// NavLink se public folder ke andar ka css file ke andar .active class automatically apply ho jayega jo apka currently active url hoga uspe


// import React from 'react'
// import { Link } from 'react-router-dom'

// export default function Navbar() {
//   return (
//    <ul>
//     <li><Link to="">Home</Link></li>
//     <li><Link to="/about">About</Link></li>
//     <li><Link to="/profile">Profile</Link></li>
//     <li><Link to="/contact">Contact</Link></li>
//    </ul>
//   )
// }