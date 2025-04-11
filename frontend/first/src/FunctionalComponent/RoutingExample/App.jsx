import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
import Footer from './Footer'
import About from './About'
import Profile from './Profile'
import Error from './Error'
import Contact from './Contact'

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='' element={<Home/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/profile/:name?/:dsg?/:salary?' element={<Profile/>}/>    
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/*' element={<Error/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
// /profile/:name/:dsg/:salary - feld define kar deiye isme request se value get hone ke liye but fixed hai isme value ana hi chahiye khali na ho
// /profile/:name?/:dsg?/:salary? - fixed nhi hai request se value aye to bhi thik nahi aye to bhi thik
// request parameter ke case me field define karna hota hai aur query parameter ke case me define nhi karenge