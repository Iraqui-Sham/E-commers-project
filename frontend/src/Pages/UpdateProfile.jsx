import React, { useEffect } from 'react'
import HeroSection from '../Component/HeroSection'
import formValidator from '../Component/validator/formValidator'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import imageValidator from '../Component/validator/imageValidator'

export default function UpdateProfile() {
  let [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    pin: "",
    city: "",
    state: ""
  })
  let [errorMessage, setErrorMessage] = useState({
    name: "",
    phone: "",
    pic: ""
  })

  let navigate = useNavigate()

  let [show, setShow] = useState(false)

  function getInputData(e) {
    var name = e.target.name
    var value = e.target.files ? "/product/" + e.target.files[0].name : e.target.value
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: e.target.files ? imageValidator(e) : formValidator(e)
      }
    })
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }

  async function postData(e) {
    e.preventDefault()
    let error = Object.values(errorMessage).find((x) => x != "")
    if (error)
      setShow(true)
    else {
      let response = await fetch(`${process.env.REACT_APP_SERVER}/user/${localStorage.getItem("userid")}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify({ ...data })
      })
      response = await response.json()
      if (data.role === "Buyer")
        navigate("/profile")
      else
        navigate("/admin")
    }
  }

  useEffect(() => {
    (async () => {
      let response = await fetch(`${process.env.REACT_APP_SERVER}/user/${localStorage.getItem("userid")}`)
      response = await response.json()
      if (response)
        setData({ ...data, ...response })
      else
        navigate("/login")
    })()
  }, [])

  return (
    <>
      <HeroSection title="Profile Update - Update Your Profile" />

      <div className="container my-3">
        <div className="row">
          <div className="col-md-8 col-sm-10 m-auto">
            <h5 className='bg-primary text-center text-light p-2'>Update Profile</h5>
            <form onSubmit={postData}>
              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>Name*</label>
                  <input type='text' name='name' value={data.name} onChange={getInputData} placeholder='Full Name' className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                  {show && errorMessage.name ? <p className='text-danger'>{errorMessage.name}</p> : null}
                </div>

                <div className="col-md-6 mb-3">
                  <label>Phone Number*</label>
                  <input type='text' name='phone' value={data.phone} onChange={getInputData} placeholder='Phone Number' className={`form-control border-3 ${show && errorMessage.phone ? 'border-danger' : 'border-primary'}`} />
                  {show && errorMessage.phone ? <p className='text-danger'>{errorMessage.phone}</p> : null}
                </div>

              </div>

              <div className="mb-3">
                <label>Address</label>
                <textarea name='address' value={data.address} onChange={getInputData} className='form-control border-3 border-primary' placeholder='Address...' rows={3}></textarea>
              </div>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>City</label>
                  <input type='text' name='city' value={data.city} onChange={getInputData} placeholder='City Name' className='form-control border-3 border-primary' />
                </div>

                <div className="col-md-6 mb-3">
                  <label>State</label>
                  <input type='text' name='state' value={data.state} onChange={getInputData} placeholder='State Name' className='form-control border-3 border-primary' />
                </div>

              </div>

              <div className="row">

                <div className="col-md-6 mb-3">
                  <label>Pin</label>
                  <input type='text' name='pin' value={data.pin} onChange={getInputData} placeholder='Pin Code' className='form-control border-3 border-primary' />
                </div>

                <div className="col-md-6 mb-3">
                  <label>Pic</label>
                  <input type='file' name='pic' onChange={getInputData} className='form-control border-3 border-primary' />
                </div>

              </div>

              <div className="mb-3">
                <button type='submit' className='btn btn-primary w-100'>Update Profile</button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </>
  )
}
