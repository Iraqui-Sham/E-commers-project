import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Contact() {
  let locationSearch = useLocation()
  let query = new URLSearchParams(locationSearch.search)
  return (
    <>
    <h1>This is Contact Page in Component</h1>
    {query.get('name') ? <h2>Name : {query.get('name')}</h2> : ""}
    {query.get('email') ? <h2>Email Address : {query.get('email')}</h2> : ""}
    {query.get('phone') ? <h2>Phone No. : {query.get('phone')}</h2> : ""} 
    </>
  )
}
