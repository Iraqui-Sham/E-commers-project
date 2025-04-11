import React from 'react'
import { Link } from 'react-router-dom'

export default function Products(props) {
    return (
        <>
            <div className="my-3">
                {
                    props.title !== "shop" ?
                        <div
                            className="row g-5 mb-5 align-items-end wow fadeInUp" data-wow-delay="0.1s">
                            <div className="col-lg-6">
                                <p><span className="text-primary me-2">#</span>Our {props.title} Products</p>
                                <h1 className="display-5 mb-0"> CheckOut Our <span className="text-primary">Ducart</span> {props.title} Products </h1>
                            </div>
                            <div className="col-lg-6 text-lg-end">
                                <Link className="btn btn-primary py-3 px-5" to={`/shop?mc=${props.title}`}>Explore More Products</Link>
                            </div>
                        </div> : null
                }
                <div className="row g-4">
                    {
                        props.data?.map((item) => {
                            return <div key={item.id} className="col-lg-3 col-md-4 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">

                                <a className="animal-item" href={`${process.env.REACT_APP_SERVER}${item.pic[0]}`} data-lightbox="animal">
                                    <div className="position-relative">
                                        <img className="img-fluid" src={`${process.env.REACT_APP_SERVER}${item.pic[0]}`} style={{ height: 200, width: "100%" }} alt="" />
                                        <div className="animal-text p-4">
                                            <p className="text-white small text-uppercase mb-0">{item.name}</p>
                                            <h5 className="text-white mb-0"><del className='text-danger'>&#8377;{item.basePrice}</del> &#8377;{item.finalPrice}<sup> {item.discount}% Off</sup></h5>
                                            <Link to={`/product/${item.id}`} className='btn btn-primary w-100'><i className='fa fa-shopping-cart'> Add To Cart</i></Link>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}
