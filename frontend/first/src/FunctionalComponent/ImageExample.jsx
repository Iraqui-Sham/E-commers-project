import React from 'react'
import pic from "../assets/images/p2.jpg"
export default function ImageExample() {
  return (
    <>
    <h1>Images Example</h1>
    <img src={require("../assets/images/p1.jpg")} height={400} width={400} alt="Picture"/>
    <img src={pic} height={400} width={400} alt="Picture"/>
    <img src="/images/p3.jpg" height={400} width={400} alt="Picture"/>
    </>
  )
}
