import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Component/Sidebar'
import HeroSection from '../../Component/HeroSection'
import { Link } from 'react-router-dom'

import $ from 'jquery'       // import jquery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'
import 'datatables.net'

import { deleteSubcategory, getSubcategory } from "../../Redux/ActionCreators/SubcategoryActionCreators"

export default function AdminSubcategory() {
    let [data, setData] = useState([])

    let dispatch = useDispatch()
    let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)

    function daleteRecord(id) {
        if (window.confirm("Are you sure to delete that item: ")) {
            dispatch(deleteSubcategory({ id: id }))
            getApiData()
        }
    }

    function getApiData() {
        dispatch(getSubcategory())
        if (SubcategoryStateData.length)
            setData(SubcategoryStateData)
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
    }, [SubcategoryStateData.length])
    // jab bhi SubcategoryStateData.length change hoga useEffec chalega 
    return (
        <>
            <HeroSection title="Admin" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center text-light p-2'>Subcategory<Link to="/admin/subcategory/create"><i className='fa fa-plus text-light float-end'></i></Link></h5>
                        <table className='table table-bordered table-hover table-stdiped' id='Datatable'>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Name</th>
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
                                            <td><Link to={`${process.env.REACT_APP_SERVER}${item.pic}`} target='_blank' rel='noreferrer'>
                                                <img src={`${process.env.REACT_APP_SERVER}${item.pic}`} className='rounded' height={50} width={80} alt='Subcatogery image' />
                                            </Link></td>
                                            <td>{item.active ? "yes" : "No"}</td>
                                            <td><Link to={`/admin/subcategory/update/${item.id}`} className='btn btn-primary'><i className='fa fa-edit'></i></Link></td>
                                            <td><button onClick={() => daleteRecord(item.id)} className='btn btn-danger'><i className='fa fa-trash'></i></button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
