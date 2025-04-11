import React from 'react'

export default function BootstrapExample() {
    let data = [
        { id: 1001, name: "product1", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p11.jpg" },
        { id: 1001, name: "product2", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p12.jpg" },
        { id: 1001, name: "product3", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p13.jpg" },
        { id: 1001, name: "product4", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p14.jpg" },
        { id: 1001, name: "product5", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p15.jpg" },
        { id: 1001, name: "product6", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p16.jpg" },
        { id: 1001, name: "product7", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p17.jpg" },
        { id: 1001, name: "product8", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p18.jpg" },
        { id: 1001, name: "product9", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p19.jpg" },
        { id: 1001, name: "product10", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p21.jpg" },
        { id: 1001, name: "product11", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p10.jpg" },
        { id: 1001, name: "product12", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p22.jpg" },
        { id: 1001, name: "product13", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p8.jpg" },
        { id: 1001, name: "product14", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p1.jpg" },
        { id: 1001, name: "product15", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p2.jpg" },
        { id: 1001, name: "product16", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p3.jpg" },
        { id: 1001, name: "product17", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p4.jpg" },
        { id: 1001, name: "product18", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p5.jpg" },
        { id: 1001, name: "product19", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p6.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p7.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p8.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p9.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p11.jpg" },
        { id: 1001, name: "product20", basePrice: 4400, discount: 50, finalPrice: 4000, pic: "/Images/p12.jpg" }
    ]
    return (
        <>
            <nav className="navbar navbar-expand-lg background sticky-top">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">Ducat</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Shop</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Others
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Account</a></li>
                                    <li><a className="dropdown-item" href="#">Product</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Sales History</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled text-light" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <div id="carouselExampleIndicators" class="carousel slide">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="/Images/p1.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p2.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p3.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p4.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p5.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p6.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p7.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p8.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p9.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="/Images/p10.jpg" height={550} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <h5 className='hbackground text-light text-center p-2 '>Latest Products</h5>
            <div className='row'>
                {
                    data.map((item, index) => {
                        return <div className='col-xl-2 col-lg-3 col-md-2 col-sm-1'>
                            <div class="card mx-1">
                                <img src={item.pic} height={200} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">{item.name}</h5>
                                    <p class="card-text"><del>{item.basePrice}</del>{item.finalPrice}<sup>{item.discount}</sup></p>
                                    <a href="#" class="btn btn-secondary w-100">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className='row mt-2'>
                <div className='col-md-6'>
                    <img src='/Images/p10.jpg' style={{ height: 450 }} alt="" className='img-fluid w-100' />
                </div>
                <div className='col-md-6'>
                    <h5 className='bg-success text-light text-center p-2'>Do You Have Any Query</h5>
                    <form action=''>
                        <div className='form-floating mb-3'>
                            <input type="text" name="name" placeholder='Enter name' className='form-control border-2 border-secondary'></input>
                            <label>Name</label>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-floating mb-3'>
                                    <input type="email" name="email" placeholder='Email Address' className='form-control border-2 border-secondary'></input>
                                    <label>Email Address</label>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-floating mb-3'>
                                    <input type="phone" name="phone" placeholder='Phone Number' className='form-control border-2 border-secondary'></input>
                                    <label>Phone Number</label>
                                </div>
                            </div>
                        </div>
                        <div className='form-floating mb-3'>
                            <input type="text" name="subject" placeholder='Enter Subject' className='form-control border-2 border-secondary'></input>
                            <label>Enter Subject</label>
                        </div>
                        <div className='form-floating mb-3'>
                            <textarea type="text" name="message" style={{ height: 120 }} placeholder='Message' className='form-control border-2 border-secondary'></textarea>
                            <label>Message</label>
                        </div>
                        <div className="mb-3">
                            <button type='submit' className='btn btn-secondary w-100'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
