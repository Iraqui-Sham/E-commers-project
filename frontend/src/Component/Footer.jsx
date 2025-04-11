import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    let [email, setEmail] = useState("")
    let [show, setShow] = useState("")

    async function postData() {
        let response = await fetch(`${process.env.REACT_APP_SERVER}/newsletter`, {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
        response = await response.json()
        if (response.find((x) => x.email === email)) {
            setShow("Your Email Address is Already Registered")
        }
        else {
            let response = await fetch(`${process.env.REACT_APP_SERVER}/newsletter`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify({ email: email, active: true })
            })
            response = await response.json()
            setShow("Thanks To Subscribe Our Newsletter Service")
        }
    }

    return (
        <>
            <div
                className="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn"
                data-wow-delay="0.1s"
            >
                <div className="container py-3">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Address</h5>
                            <p className="mb-2">
                                <i className="fa fa-map-marker-alt me-3"></i>A-32, sector-16, noida
                            </p>
                            <Link className="mb-2 text-light d-blockt" to="tel:+919570393020">
                                <i className="fa fa-phone me-3"></i>+91-9570393020
                            </Link>
                            <Link className="mb-2 text-light d-block" to="mailto:alammdshamsher956@gmail.com">
                                <i className="fa fa-envelope me-3"></i>alam@gmail.com
                            </Link>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-light mb-4">Quick Links</h5>
                            <Link className="btn btn-link" to="/">Home</Link>
                            <Link className="btn btn-link" to="/about">About Us</Link>
                            <Link className="btn btn-link" to="/shop">Shop</Link>
                            <Link className="btn btn-link" to="/features">Features</Link>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <h5 className="text-light mb-4">Quick Limks</h5>
                            <Link className="btn btn-link" to="/testimonials">testimonial</Link>
                            <Link className="btn btn-link" to="/contact">Contact Us</Link>
                            <Link className="btn btn-link" to="#">Term & Condition</Link>
                            <Link className="btn btn-link" to="/#">Refund & Policy</Link>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h5 className="text-light mb-4">Newsletter</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum voluptate</p>
                            {show ? <p>{show}</p> : null}
                            <div className="position-relative mx-auto" style={{ maxWidth: "400px" }}>
                                <input name='email' onChange={(e) => setEmail(e.target.value)} type="email" className="form-control border-0 w-100 py-3 ps-4 pe-5" placeholder="Your email" />
                                <button type="button" onClick={postData} className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a className="border-bottom" href="#">Ducart</a>, All
                                Right Reserved.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
