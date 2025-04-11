import React from 'react'
import HeroSection from '../Component/HeroSection'
import Cart from '../Component/Cart'

export default function CartPage() {
    return (
        <>
            <HeroSection title="Cart Section" />
            <div className="conatiner-fluid my-3">
                <Cart title="Cart-Section" />
            </div>
        </>
    )
}
