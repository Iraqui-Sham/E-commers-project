import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Sidebar from '../../Component/Sidebar'
import HeroSection from '../../Component/HeroSection'

import $ from 'jquery'       // import jquery
import 'datatables.net-dt/css/dataTables.dataTables.min.css'   // Import DataTables styles
import 'datatables.net'

import { deleteContactUs, getContactUs, updateContactUs } from "../../Redux/ActionCreators/ContactUsActionCreators"
import { useNavigate, useParams } from 'react-router-dom'

export default function AdminContactUsShow() {
    let [data, setData] = useState({})
    let [flag, setFlag] = useState(false)
    let { id } = useParams()

    let navigate = useNavigate()
    let dispatch = useDispatch()
    let ContactUsStateData = useSelector((state) => state.ContactUsStateData)

    function deleteRecord() {
        if (window.confirm("Are you sure to delete that item: ")) {
            dispatch(deleteContactUs({ id: id }))
            navigate("/admin/contactus")
        }
    }

    function updateRecord() {
        if (window.confirm("Are You Sure to Update Status of that Item : ")) {
            dispatch(updateContactUs({ ...data, active: !data.active }))
            data.active = !(data.active)
            setFlag(!flag)
        }
    }

    function getApiData() {
        dispatch(getContactUs())
        if (ContactUsStateData.length)
            setData(ContactUsStateData.find(x => x.id == id))
        let time = setTimeout(() => {
            $('#Datatable').DataTable()
        }, 500)
        return time
    }
    useEffect(() => {
        let time = getApiData()
        return () => clearTimeout(time)
    }, [ContactUsStateData.length])
    // jab bhi ContactUsStateData.length change hoga useEffect chalega 
    return (
        <>
            <HeroSection title="Admin" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar />
                    </div>
                    <div className="col-md-9">
                        <h5 className='bg-primary text-center text-light p-2'>ContactUs Query</h5>
                        <table className='table table-bordered table-hover table-striped'>
                            <tbody>
                                <tr>
                                    <th>Id</th>
                                    <td>{data.id}</td>
                                </tr>
                                <tr>
                                    <th>Name</th>
                                    <td>{data.name}</td>
                                </tr>
                                <tr>
                                    <th>Email</th>
                                    <td>{data.email}</td>
                                </tr>
                                <tr>
                                    <th>Phone</th>
                                    <td>{data.phone}</td>
                                </tr>
                                <tr>
                                    <th>Subject</th>
                                    <td>{data.subject}</td>
                                </tr>
                                <tr>
                                    <th>Message</th>
                                    <td>{data.message}</td>
                                </tr>
                                <tr>
                                    <th>Date</th>
                                    <td>{new Date(data.date).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <th>Active</th>
                                    <td>{data.active ? "yes" : "No"}</td>
                                </tr>
                                <td colSpan={2}>
                                    {
                                        data.active ?
                                            <button className='bg-primary text-light w-100' onClick={updateRecord}>Update Status</button> :
                                            <button className='bg-danger text-light w-100' onClick={deleteRecord}>Delete</button>
                                    }
                                </td>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}
