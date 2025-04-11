import React, { useEffect, useState } from 'react'
import About from '../Component/About'
import Fact from '../Component/Fact'
// import Features from '../Component/Features'
import Products from '../Component/Products'
import Testinomial from '../Component/Testinomial'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'
import { getMaincategory } from '../Redux/ActionCreators/MaincategoryActionCreators'
import { getProduct } from '../Redux/ActionCreators/ProductActionCreators'
import { getSubcategory } from '../Redux/ActionCreators/SubcategoryActionCreators'
import { getBrand } from '../Redux/ActionCreators/BrandActionCreators'
import { useDispatch, useSelector } from 'react-redux'
import CategorySlider from '../Component/CategorySlider'


export default function Home() {
  let [maincategory, setMaincategory] = useState([])
  let [product, setProduct] = useState([])
  let [subcategory, setSubcategory] = useState([])
  let [brand, setBrand] = useState([])

  let dispatch = useDispatch()
  let MaincategoryStateData = useSelector((state) => state.MaincategoryStateData)
  let ProductStateData = useSelector((state) => state.ProductStateData)
  let SubcategoryStateData = useSelector((state) => state.SubcategoryStateData)
  let BrandStateData = useSelector((state) => state.BrandStateData)


  let options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: false,
    items: 1
    // navText: ["<button class='btn btn-primary slider-btn' id='slider-btn1'><i class='fa fa-arrow-left'></button>","<button class='btn btn-primary slider-btn' id='slider-btn2'><i class='fa fa-arrow-right'></button>"],
    // responsive: {
    //     0: {
    //         items: 1
    //     },
    //     576: {
    //         items: 2
    //     },
    //     768: {
    //         items: 3
    //     },
    //     1200: {
    //         items: 4 
    //     },
    //     4500: {
    //         items: 5
    //     }
    // }
  }

  useEffect(() => {
    (() => {
      dispatch(getMaincategory())
      if (MaincategoryStateData.length)
        setMaincategory(MaincategoryStateData.filter((x) => "active"))
    })()
  }, [MaincategoryStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getProduct())
      if (ProductStateData.length)
        setProduct(ProductStateData.filter((x) => "active"))
    })()
  }, [ProductStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getSubcategory())
      if (SubcategoryStateData.length)
        setSubcategory(SubcategoryStateData.filter((x) => "active"))
    })()
  }, [SubcategoryStateData.length])

  useEffect(() => {
    (() => {
      dispatch(getBrand())
      if (BrandStateData.length)
        setBrand(BrandStateData.filter((x) => "active"))
    })()
  }, [BrandStateData.length])

  return (
    <>
      {/* <!-- Header Start --> */}
      <div className="container-fluid bg-dark p-0 mb-5">
        <div className="row g-0 flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
            <div
              className="header-bg h-100 d-flex flex-column justify-content-center p-5"
            >
              <h2 className="text-light mb-5 text-center">
                Check Our Latest Fashion Products Of Top Brands
              </h2>
              <div className="pt-4 animated slideInDown text-center">
                <Link to="/shop" className="btn btn-primary py-sm-3 px-3 px-sm-5">Shop Now</Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <div className="header-carousel">
              <OwlCarousel {...options}>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img5.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img6.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img7.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img17.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img9.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img10.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img11.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img12.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img15.jpg" style={{ height: 450 }} alt="" />
                </div>
                <div className="owl-carousel-item">
                  <img className="img-fluid" src="img/img16.jpg" style={{ height: 450 }} alt="" />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Header End --> */}
      <CategorySlider data={maincategory} title="Maincategory" />
      <div className="container">
        {
          maincategory.map((item) => {
            return <Products key={item.id} title={item.name} data={product.filter((x) => x.maincategory === item.name).slice(0, 12)} />
          })
        }
      </div>
      <CategorySlider data={subcategory} title="Subcategory" />
      <About />
      <CategorySlider data={brand} title="Brand" />
      <Fact />
      {/* <Features /> */}
      <Testinomial />
    </>
  )
}
