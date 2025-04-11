import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Error() {
  let navigate = useNavigate()
  useEffect(()=>{
       navigate("/")
  },[])
  return (
    <>
    <h1>404!! page not found</h1>
    </>
  )
}