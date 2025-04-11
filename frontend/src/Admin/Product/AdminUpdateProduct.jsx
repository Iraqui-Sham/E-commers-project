import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from '../../Component/Sidebar'
import HeroSection from '../../Component/HeroSection'
import { Link, useNavigate, useParams } from 'react-router-dom'
import formValidator from '../../Component/validator/formValidator'
import imageValidator from '../../Component/validator/imageValidator'

import { getProduct, updateProduct } from "../../Redux/ActionCreators/ProductActionCreators"
import { getMaincategory } from "../../Redux/ActionCreators/MaincategoryActionCreators"
import { getSubcategory } from "../../Redux/ActionCreators/SubcategoryActionCreators"
import { getBrand } from "../../Redux/ActionCreators/BrandActionCreators"

var rte
export default function AdminUpdateProduct() {
    let { id } = useParams()
    let refdiv = useRef(null)

    let [data, setData] = useState({
        name: "",
        maincategory: "",
        subcategory: "",
        brand: "",
        color: "",
        size: "",
        basePrice: "",
        discount: "",
        finalPrice: "",
        stock: true,
        stockQuantity: "",
        active: true,
        pic: []
    })
    let [errorMessage, setErrorMessage] = useState({
        name: "",
        color: "",
        size: "",
        basePrice: "",
        stockQuantity: "",
        pic: ""
    })
    let [show, setShow] = useState(false)
    let [flag, setFlag] = useState(false)
    let navigate = useNavigate()

    let dispatch = useDispatch()
    let ProductStateData = useSelector((state) => state.ProductStateData)
    let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
    let BrandStateData = useSelector((state) => state.BrandStateData)

    function getInputData(e) {
        let name = e.target.name
        let value = e.target.files ? data.pic?.concat(Array.from(e.target.files).map((x) => "/product/" + x.name)) : e.target.value    // e.target.files ek array like structure hota hai to use ek array bana denge array.from se Array me sab field aa jayegi then usse map kar lenge "/product/"+x.name us field ka name jisse us folder ke imgage ka path mil gya 
        //      let value = e.target.files ? e.target.files : e.target.value       real backend ke liye
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
                [name]: name === "active" || name === "stock" ? (value === "1" ? true : false) : value
            }
        })
    }

    function postData(e) {
        e.preventDefault()
        let error = Object.values(errorMessage).find((x) => x !== "")
        if (error)
            setShow(true)
        else {
            //this line is used in both dummy and real server if form has no file,image etc.
            let stockQuantity = parseInt(data.stockQuantity)
            let bp = parseInt(data.basePrice)
            let discount = parseInt(data.discount)
            let fp = parseInt(bp - bp * discount / 100)
            dispatch(updateProduct({
                ...data,
                maincategory: data.maincategory !== "" ? data.maincategory : MaincategoryStateData[0].name,
                subcategory: data.subcategory !== "" ? data.subcategory : SubcategoryStateData[0].name,
                brand: data.brand !== "" ? data.brand : BrandStateData[0].name,
                basePrice: bp,
                discount: discount,
                finalPrice: fp,
                stockQuantity: stockQuantity,
                description: rte.getHTMLCode()
            }))

            //but in case of real server and if form has file Field.
            // var formData = new FormData()
            // formData.append("name",data.name)
            // formData.append("maincategory", data.maincategory !== "" ? data.maincategory : MaincategoryStateData[0].name)
            // formData.append("subcategory", data.subcategory !== "" ? data.subcategory : SubcategoryStateData[0].name)
            // formData.append("brand", data.brand !== "" ? data.brand : BrandStateData[0].name)
            // formData.append("color", data.color)
            // formData.append("size", size)
            // formData.append("basePrice", bp)
            // formData.append("discount", discount)
            // formData.append("finalPrice", fp)
            // formData.append("stock", data.stock)
            // formData.append("stockQuantity", stockQuantity)
            // formData.append("description", rte.setHTMLCode)  
            // formData.append("pic", data.pic)
            // formData.append("active", data.active)
            // dispatch(updateProduct(formData))

            navigate("/admin/product")
        }
    }

    useEffect(() => {
        (() => {
            dispatch(getMaincategory())
        })()
    }, [MaincategoryStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getSubcategory())
        })()
    }, [SubcategoryStateData.length])

    useEffect(() => {
        (() => {
            dispatch(getBrand())
        })()
    }, [BrandStateData.length])


    useEffect(() => {
        (() => {
            dispatch(getProduct())
            rte = new window.RichTextEditor(refdiv.current);
            if (ProductStateData.length) {
                let item = ProductStateData.find((x) => x.id === id)
                rte.setHTMLCode(item.description);
                setData(item)
            }
        })()
    }, [ProductStateData.length])


    return (
        <>
            <HeroSection title="Admin" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center text-light p-2'>Update Product<Link to="/admin/product"><i className='fa fa-backward text-light float-end'></i></Link></h5>
                        <form onSubmit={postData}>
                            <div className="mb-3">
                                <label>Name*</label>
                                <input type="text" name="name" value={data.name} onChange={getInputData} placeholder='Product Name' className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
                                {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
                            </div>

                            <div className="row">
                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Maincategory*</label>
                                    <select name="maincategory" value={data.maincategory} onChange={getInputData} className='form-select border-3 border-primary'>
                                        {
                                            MaincategoryStateData && MaincategoryStateData.filter((x) => x.active).map((item) => {
                                                return <option key={item.id}>{item.name}</option>             // database se data ayega to uske sath id bhi ayega agar index lete to index cahnge bhi ho sakta time waste hota
                                            })                                                                // option me value field use nhi kiye hai kyunki jo ham dispaly kiye hai wahi field value ban jayegi.
                                        }
                                    </select>
                                </div>

                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Subcategory*</label>
                                    <select name="subcategory" value={data.subcategory} onChange={getInputData} className='form-select border-3 border-primary'>
                                        {
                                            SubcategoryStateData && SubcategoryStateData.filter((x) => x.active).map((item) => {
                                                return <option key={item.id}>{item.name}</option>             // database se data ayega to uske sath id bhi ayega agar index lete to index cahnge bhi ho sakta time waste hota
                                            })                                                                // option me value field use nhi kiye hai kyunki jo ham dispaly kiye hai wahi field value ban jayegi.
                                        }
                                    </select>
                                </div>

                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Brand*</label>
                                    <select name="brand" value={data.brand} onChange={getInputData} className='form-select border-3 border-primary'>
                                        {
                                            BrandStateData && BrandStateData.filter((x) => x.active).map((item) => {
                                                return <option key={item.id}>{item.name}</option>             // database se data ayega to uske sath id bhi ayega agar index lete to index cahnge bhi ho sakta time waste hota
                                            })                                                                // option me value field use nhi kiye hai kyunki jo ham dispaly kiye hai wahi field value ban jayegi.
                                        }
                                    </select>
                                </div>

                                <div className="col-md-3 col-sm-6 mb-3">
                                    <label>Stock*</label>
                                    <select name="stock" value={data.stock ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Color*</label>
                                    <input type="text" name='color' value={data.color} onChange={getInputData} placeholder='Product Color' className={`form-control border-3 ${show && errorMessage.color ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.color ? <p className='text-danger text-capitalize'>{errorMessage.color}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Size*</label>
                                    <input type="text" name="size" value={data.size} onChange={getInputData} placeholder='Product Size' className={`form-control border-3 ${show && errorMessage.size ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.size ? <p className='text-danger text-capitalize'>{errorMessage.size}</p> : null}
                                </div>
                            </div>


                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Base Price*</label>
                                    <input type="number" name="basePrice" value={data.basePrice} onChange={getInputData} placeholder='Product Base Price' className={`form-control border-3 ${show && errorMessage.basePrice ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.basePrice ? <p className='text-danger text-capitalize'>{errorMessage.basePrice}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Discount*</label>
                                    <input type="number" name="discount" value={data.discount} onChange={getInputData} placeholder='Product Discount' className={`form-control border-3 ${show && errorMessage.discount ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.discount ? <p className='text-danger text-capitalize'>{errorMessage.discount}</p> : null}
                                </div>
                            </div>


                            <div className="mb-3">
                                <label>Description</label>
                                <div ref={refdiv}></div>
                            </div>


                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Stock Quantity*</label>
                                    <input type="number" name="stockQuantity" value={data.stockQuantity} onChange={getInputData} placeholder='Product Stock Quantity' className={`form-control border-3 ${show && errorMessage.stockQuantity ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.stockQuantity ? <p className='text-danger text-capitalize'>{errorMessage.stockQuantity}</p> : null}
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Pic*</label>
                                    <input type="file" name="pic" multiple onChange={getInputData} placeholder='Product Name' className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
                                    {show && errorMessage.pic ? typeof errorMessage.pic === 'string' ? <p
                                        className='text-danger text-capitalize'>{errorMessage.pic}</p> : errorMessage.pic.map((item, index) => <p className='text-danger text-capitalize' key={index}>{item}</p>)
                                        : null}
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Active*</label>
                                    <select name="active" value={data.active ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
                                        <option value="1">Yes</option>
                                        <option value="0">No</option>
                                    </select>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <label>Click on Image to Remove</label><br />
                                    {
                                        data.pic?.map((item, index) => {
                                            return <img key={index}
                                                onClick={() => {
                                                    data.pic.splice(index, 1)
                                                    setFlag(!flag)
                                                }} src={`${process.env.REACT_APP_SERVER}${item}`} height={50} width={50} className='mx-1'></img>
                                        })
                                    }
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
// import { useDispatch, useSelector } from 'react-redux'
// import Sidebar from '../../Component/Sidebar'
// import HeroSection from '../../Component/HeroSection'
// import { Link, useNavigate, useParams } from 'react-router-dom'
// import formValidator from '../../Component/validator/formValidator'
// import imageValidator from '../../Component/validator/imageValidator'

// import { getProduct, updateProduct } from "../../Redux/ActionCreators/ProductActionCreators"

// export default function AdminUpdateProduct() {
//     let { id } = useParams()                            // id get kiya url se
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

//     let dispatch = useDispatch()
//     let ProductStateData = useSelector((state) => state.ProductStateData)

//     function getInputData(e) {
//         let name = e.target.name
//         let value = e.target.files ? "/product/" + e.target.files[0].name : e.target.value
//         // let value = e.target.files ? e.target.files[0]:e.target.value               // in case of real server
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

//     function postData(e) {
//         e.preventDefault()
//         let error = Object.values(errorMessage).find((x) => x !== "")
//         if (error)
//             setShow(true)
//         else {
//             let item = ProductStateData.find((x) => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id != id)    // current product nhi hona chahiye koi aur hona chahiye
//             if (item) {
//                 setShow(true)
//                 setErrorMessage((old) => {
//                     return {
//                         ...old,
//                         'name': "Product name is Already Exist"
//                     }
//                 })
//             }
//             else {
//                 //this line is used in both dummy and real server if form has no file,image etc.
//                 dispatch(updateProduct({ ...data }))

//                 //but in case of real server and if form has file field.
//                 // var formData = new FormData()
//                 // formData.append("id".data.id)
//                 // formData.append("name".data.name)
//                 // formData.append("pic".data.pic)
//                 // formData.append("active".data.active)
//                 // dispatch(updateProduct(formData))

//                 navigate("/admin/product")
//             }
//         }
//     }

//     useEffect(() => {
//         (() => {
//             dispatch(getProduct())
//             if (ProductStateData.length)
//                 setData(ProductStateData.find((x) => x.id === id))
//         })()
//     }, [ProductStateData.length])

//     return (
//         <>
//             <HeroSection title="Admin" />
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-3">
//                         <Sidebar />
//                     </div>
//                     <div className="col-md-9">
//                         <h5 className='bg-primary text-center text-light p-2'>Update Product<Link to="/admin/product"><i className='fa fa-backward text-light float-end'></i></Link></h5>
//                         <form onSubmit={postData}>
//                             <div className="mb-3">
//                                 <label>Name*</label>
//                                 <input type="text" name='name' value={data.name} onChange={getInputData} placeholder='Product Name' className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
//                                 {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
//                             </div>

//                             <div className="row">
//                                 <div className="col-md-6 mb-3">
//                                     <label>Pic*</label>
//                                     <input type="file" name='pic' onChange={getInputData} placeholder='Product Name' className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
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






// // import React, { useEffect, useState } from 'react'
// // import Sidebar from '../../Component/Sidebar'
// // import HeroSection from '../../Component/HeroSection'
// // import { Link, useNavigate, useParams } from 'react-router-dom'
// // import formValidator from '../../Component/validator/formValidator'
// // import imageValidator from '../../Component/validator/imageValidator'

// // export default function AdminUpdateProduct() {
// //     let { id } = useParams()                            // id get kiya url se
// //     let [allData, setAllData] = useState([])
// //     let [data, setData] = useState({
// //         name: "",
// //         pic: "",
// //         active: true
// //     })
// //     let [errorMessage, setErrorMessage] = useState({
// //         name: "",
// //         pic: ""
// //     })
// //     let [show, setShow] = useState(false)
// //     let navigate = useNavigate()

// //     function getInputData(e) {
// //         let name = e.target.name
// //         let value = e.target.files ? "/product/" + e.target.files[0].name : e.target.value
// //         if (name !== "active") {
// //             setErrorMessage((old) => {
// //                 return {
// //                     ...old,
// //                     [name]: e.target.files ? imageValidator(e) : formValidator(e)
// //                 }
// //             })
// //         }
// //         setData((old) => {
// //             return {
// //                 ...old,
// //                 [name]: name === "active" ? (value === "1" ? true : false) : value
// //             }
// //         })
// //     }

// //     async function postData(e) {
// //         e.preventDefault()
// //         let error = Object.values(errorMessage).find((x) => x !== "")
// //         if (error)
// //             setShow(true)
// //         else {
// //             let item = allData.find((x) => x.name.toLocaleLowerCase() === data.name.toLocaleLowerCase() && x.id != id)    // current product nhi hona chahiye koi aur hona chahiye
// //             if (item) {
// //                 setShow(true)
// //                 setErrorMessage((old) => {
// //                     return {
// //                         ...old,
// //                         'name': "Product name is Already Exist"
// //                     }
// //                 })
// //             }
// //             else {
// //                 let response = await fetch(`${process.env.REACT_APP_SERVER}/product/${id}`, {
// //                     method: "PUT",
// //                     headers: {
// //                         "content-type": "application/json"
// //                     },
// //                     body: JSON.stringify({ ...data })    // taaki data ki sari ki sari field bhej denge
// //                 })
// //                 response = await response.json()
// //                 if (response)
// //                     navigate("/admin/product")
// //                 else
// //                     alert("somethimg went wrong")
// //             }
// //         }
// //     }

// //     useEffect(() => {
// //         (async () => {
// //             let response = await fetch(`${process.env.REACT_APP_SERVER}/product`, {
// //                 method: "GET",
// //                 headers: {
// //                     "content-type": "application/json"
// //                 }
// //             })
// //             response = await response.json()
// //             setAllData(response)                           // database se all data ko fetch kar liye hai
// //             setData(response.find((x) => x.id === id))     // data se fectch kiya kon sa field hame update karna hai
// //         })()
// //     }, [])

// //     return (
// //         <>
// //             <HeroSection title="Admin" />
// //             <div className="container-fluid">
// //                 <div className="row">
// //                     <div className="col-md-3">
// //                         <Sidebar />
// //                     </div>
// //                     <div className="col-md-9">
// //                         <h5 className='bg-primary text-center text-light p-2'>Update Product<Link to="/admin/product"><i className='fa fa-backward text-light float-end'></i></Link></h5>
// //                         <form onSubmit={postData}>
// //                             <div className="mb-3">
// //                                 <label>Name*</label>
// //                                 <input type="text" name='name' value={data.name} onChange={getInputData} placeholder='Product Name' className={`form-control border-3 ${show && errorMessage.name ? 'border-danger' : 'border-primary'}`} />
// //                                 {show && errorMessage.name ? <p className='text-danger text-capitalize'>{errorMessage.name}</p> : null}
// //                             </div>

// //                             <div className="row">
// //                                 <div className="col-md-6 mb-3">
// //                                     <label>Name*</label>
// //                                     <input type="file" name='pic' onChange={getInputData} placeholder='Product Name' className={`form-control border-3 ${show && errorMessage.pic ? 'border-danger' : 'border-primary'}`} />
// //                                     {show && errorMessage.pic ? <p className='text-danger text-capitalize'>{errorMessage.pic}</p> : null}
// //                                 </div>
// //                                 <div className="col-md-6 mb-3">
// //                                     <label>Active*</label>
// //                                     <select name="active" value={data.active ? "1" : "0"} onChange={getInputData} className='form-select border-3 border-primary'>
// //                                         <option value="1">Yes</option>
// //                                         <option value="0">No</option>
// //                                     </select>
// //                                 </div>
// //                             </div>

// //                             <div className="mb-3">
// //                                 <button type='submit' className='btn btn-primary w-100'>Update</button>
// //                             </div>
// //                         </form>
// //                     </div>
// //                 </div>
// //             </div>
// //         </>
// //     )
// // }
