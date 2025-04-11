import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../Component/Sidebar'
import HeroSection from '../../Component/HeroSection'
import { Link, useNavigate, useParams } from 'react-router-dom'
import formValidator from '../../Component/validator/formValidator'
import imageValidator from '../../Component/validator/imageValidator'

import { getBrand, updateBrand } from "../../Redux/ActionCreators/BrandActionCreators"

export default function AdminUpdateBrand() {
    let { id } = useParams()                            // id get kiya url se
    let [data, setData] = useState({
        name: "",
        pic: "",
        active: true
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        pic: ""
    })
    let [show, setShow] = useState(false)
    let navigate = useNavigate()

    let dispatch = useDispatch()
    let BrandStateData = useSelector((state) => state.BrandStateData)

    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? "/brand/" + e.target.files[0].name : e.target.value
        // let value = e.target.files ? e.target.files[0]:e.target.value               // in case of real server 
        if (name !== "active") {
            setErrorMessage((old) => {
                return {
                    ...old,
                    [name]: e.target.files ? imageValidator(e) : formValidator(e)
                }
            })
        }
        setData((old) => {
            return {
                ...old,
                [name]: name === "active" ? (value === "1" ? true : false) : value
            }
        })
    }

    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x !== "")
        if (error)
            setShow(true)
        else {
            let item = BrandStateData.find((x) => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id != id)    // current product nhi hona chahiye koi aur hona chahiye  
            if (item) {
                setShow(true)
                setErrorMessage((old) => {
                    return {
                        ...old,
                        'name': "Brand name is Already Exist"
                    }
                })
            }
            else {
                //this line is used in both dummy and real server if form has no file,image etc.
                dispatch(updateBrand({ ...data }))

                //but in case of real server and if form has file field.
                // var formData = new FormData()
                // formData.append("id".data.id) 
                // formData.append("name".data.name) 
                // formData.append("pic".data.pic)
                // formData.append("active".data.active)
                // dispatch(createBrand(formData))

                navigate("/admin/brand")
            }
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getBrand())
            if (BrandStateData.length)
                setData(BrandStateData.find((x) => x.id === id))
        })()
    }, [BrandStateData.length])

    return (
        <>
            <HeroSection title="Admin" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center text-light p-2'>Update Brand<Link to="/admin/brand"><i className='fa fa-backward text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name*</label>
                                <input type="text" name='name' value={data.name} onChange={getInputData} placeholder='Brand Name' className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                                {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Pic*</label>
                                    <input type="file" name='pic' onChange={getInputData} placeholder='Brand Name' className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" value={data.active ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mb-3">
                                <button type='submit' className='btn btn-primary w-100'>Update</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}






// import React, { useEffect, useState } from 'react'
// import Sidebar from '../../Component/Sidebar'
// import HeroSection from '../../Component/HeroSection'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import formValidator from '../../Component/validator/formValidator'
// import imageValidator from '../../Component/validator/imageValidator'

// export default function AdminUpdateBrand() {
//     let { id } = useParams()                            // id get kiya url se
//     let [allData, setAllData] = useState([])
//     let [data, setData] = useState({
//         name: "",
//         pic: "",
//         active: true
//     })
//     let [errorMessage, setErrorMessage] = useState({
//         name: "",
//         pic: ""
//     })
//     let [show, setShow] = useState(false)
//     let navigate = useNavigate()

//     function getInputData(e) {
//         let name = e.target.name
//         let value = e.target.files ? "/brand/" + e.target.files[0].name : e.target.value
//         if (name !== "active") {
//             setErrorMessage((old) => {
//                 return {
//                     ...old,
//                     [name]: e.target.files ? imageValidator(e) : formValidator(e)
//                 }
//             })
//         }
//         setData((old) => {
//             return {
//                 ...old,
//                 [name]: name === "active" ? (value === "1" ? true : false) : value
//             }
//         })
//     }

//     async function postData(e) {
//         e.preventDefault()
//         let error = Object.values(errorMessage).find((x) => x !== "")
//         if (error)
//             setShow(true)
//         else {
//             let item = allData.find((x) => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id != id)    // current product nhi hona chahiye koi aur hona chahiye
//             if (item) {
//                 setShow(true)
//                 setErrorMessage((old) => {
//                     return {
//                         ...old,
//                         'name': "Brand name is Already Exist"
//                     }
//                 })
//             }
//             else {
//                 let response = await fetch(`${process.env.REACT_APP_SERVER}/brand/${id}`, {
//                     method: "PUT",
//                     headers: {
//                         "content-type": "application/json"
//                     },
//                     body: JSON.stringify({ ...data })    // taaki data ki sari ki sari field bhej denge
//                 })
//                 response = await response.json()
//                 if (response)
//                     navigate("/admin/brand")
//                 else
//                     alert("somethimg went wrong")
//             }
//         }
//     }

//     useEffect(() => {
//         (async () => {
//             let response = await fetch(`${process.env.REACT_APP_SERVER}/brand`, {
//                 method: "GET",
//                 headers: {
//                     "content-type": "application/json"
//                 }
//             })
//             response = await response.json()
//             setAllData(response)                           // database se all data ko fetch kar liye hai
//             setData(response.find((x) => x.id === id))     // data se fectch kiya kon sa field hame update karna hai
//         })()
//     }, [])

//     return (
//         <>
//             <HeroSection title="Admin" />
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <Sidebar />
//                     </div>
//                     <div className="col-md-9">
//                         <h5 className='bg-primary text-center text-light p-2'>Update Brand<Link to="/admin/brand"><i className='fa fa-backward text-light float-end'></i></Link></h5>
//                         <form onSubmit={postData}>
//                             <div className="mb-3">
//                                 <label>Name*</label>
//                                 <input type="text" name='name' value={data.name} onChange={getInputData} placeholder='Brand Name' className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
//                                 {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
//                             </div>

//                             <div className="row">
//                                 <div className="col-md-6 mb-3">
//                                     <label>Name*</label>
//                                     <input type="file" name='pic' onChange={getInputData} placeholder='Brand Name' className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
//                                     {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
//                                 </div>
//                                 <div className="col-md-6 mb-3">
//                                     <label>Active*</label>
//                                     <select name="active" value={data.active ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
//                                         <option value="1">Yes</option>
//                                         <option value="0">No</option>
//                                     </select>
//                                 </div>
//                             </div>

//                             <div className="mb-3">
//                                 <button type='submit' className='btn btn-primary w-100'>Update</button>
//                             </div>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
