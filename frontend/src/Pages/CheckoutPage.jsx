import React from 'react'
import HeroSection from '../Component/HeroSection'
import Cart from '../Component/Cart'
import Profile from '../Component/Profile'

export default function CheckoutPage() {
  return (
    <>
      <HeroSection />
      <div className="container-fluid mb-3">
        <div className="row">
          <div className="col-md-6">
            <Profile title="Checkout" />
          </div>
          <div className="col-md-6">
            <Cart title="Checkout" />
          </div>
        </div>
      </div>
    </>
  )
}
