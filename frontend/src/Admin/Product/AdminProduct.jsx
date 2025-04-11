import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Component/Sidebar'
import HeroSection from '../../Component/HeroSection'
import { Link } from 'react-router-dom'

import $ from 'jquery'       // import jquery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net'

import { deleteProduct, getProduct } from "../../Redux/ActionCreators/ProductActionCreators"

export default function AdminProduct() {
    let [data, setData] = useState([])

    let dispatch = useDispatch()
    let ProductStateData = useSelector((state) => state.ProductStateData)

    function daleteRecord(id) {
        if (window.confirm("Are you sure to delete that item: ")) {
            dispatch(deleteProduct({ id: id }))
            getApiData()
        }
    }

    function getApiData() {
        dispatch(getProduct())
        if (ProductStateData.length)
            setData(ProductStateData)
        else
            setData([])
        let time = setTimeout(() => {
            $('#Datatable').DataTable()
        }, 500)
        return time
    }
    useEffect(() => {
        let time = getApiData()
        return () => clearTimeout(time)
    }, [ProductStateData.length])
    // jab bhi ProductStateData.length change hoga useEffec chalega 
    return (
        <>
            <HeroSection title="Admin" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center text-light p-2'>Product<Link to="/admin/product/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <div className="table-responsive">
                            <table className='table table-bordered table-hover table-stdiped' id='Datatable'>
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Maincategory</th>
                                        <th>Subcategory</th>
                                        <th>Brand</th>
                                        <th>Color</th>
                                        <th>Size</th>
                                        <th>Base Price</th>
                                        <th>Discount</th>
                                        <th>Final Price</th>
                                        <th>Stock</th>
                                        <th>StockQuantity</th>
                                        <th>Pic</th>
                                        <th>Active</th>
                                        <th></th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                <td>{item.id}</td>
                                                <td>{item.name}</td>
                                                <td>{item.maincategory}</td>
                                                <td>{item.subcategory}</td>
                                                <td>{item.brand}</td>
                                                <td>{item.color}</td>
                                                <td>{item.size}</td>
                                                <td>&#8377;{item.basePrice}</td>
                                                <td>&#8377;{item.discount}</td>
                                                <td>&#8377;{item.finalPrice}</td>
                                                <td className={`${item.stock ? 'text-seccess' : 'text-danger'}`}>{item.stock ? "yes" : "No"}</td>
                                                <td>{item.stockQuantity}</td>
                                                <td>
                                                    <div style={{ width: 400 }}>
                                                        {
                                                            item.pic?.map((Item, index) => {
                                                                return <Link key={index} to={`${process.env.REACT_APP_SERVER}${Item}`} target='_blank' rel='noreferrer'>
                                                                    <img src={`${process.env.REACT_APP_SERVER}${Item}`} className='rounded me-2' height={50} width={50} alt='Product image' />
                                                                </Link>
                                                            })
                                                        }
                                                    </div>
                                                </td>
                                                <td>{item.active ? "yes" : "No"}</td>
                                                <td><Link to={`/admin/product/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                                                <td><button onClick={() => daleteRecord(item.id)} className='btn btn-danger'><i className='fa fa-trash'></i></button></td>
                                            </tr>
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
