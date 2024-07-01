import React, { useCallback, useEffect, useState } from 'react'
import '../assets/css/bootstrap.min.css';
import '../assets/css/flex-slider.css';
import '../assets/css/font-awesome.css';
import '../assets/css/lightbox.css';
import '../assets/css/templatemo-flexshop.css';
import '../assets/css/owl-carousel.css';
import Homeproducts from './Homeproducts';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from './redux/Reducers/categorySlice';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


export default function Home() {
    const dispatch = useDispatch();
    const {data: data, status: status} = useSelector((res) => res.category);
    const [divid, setDivid] = useState([])
    window.scrollTo(0, 0)
    
    useEffect(() => {
            dispatch(fetchCategories());
    }, []);
  return (
    <>
    <Header/>
    
    <div className="main-banner" id="top">
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6">
                    <div className="left-content">
                        <div className="thumb">
                            <div className="inner-content">
                                <h4>We Are Felixshop</h4>
                                <span>Online Popular Shopping Website</span>
                                <div className="main-border-button">
                                    <HashLink to="/#electronics">Purchase Now!</HashLink>
                                </div>
                            </div>
                            <img src={require('../assets/images/left-banner-image.jpg')} alt="" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="right-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Women</h4>
                                            <span>Best Clothes For Women</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Women</h4>
                                                <p>Up to 50% off | Trending fashion on women's cloths.</p>
                                                <div className="main-border-button">
                                                    <HashLink to="/#womensclothing">Discover More</HashLink>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require('../assets/images/baner-right-image-01.jpg')}  />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Men</h4>
                                            <span>Best Clothes For Men</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Men</h4>
                                                <p>Up to 60% off | Trending fashion on men's cloth</p>
                                                <div className="main-border-button">
                                                    <HashLink to="/#mensclothing">Discover More</HashLink>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require('../assets/images/baner-right-image-02.jpg')} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Jewelery</h4>
                                            <span>Best Jewelery For Women</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Jewelery</h4>
                                                <p>Up to 10% off | Trending womens Jewelery</p>
                                                <div className="main-border-button">
                                                    <HashLink to="/#jewelery">Discover More</HashLink>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require('../assets/images/jwellery.jpg')} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-first-image">
                                    <div className="thumb">
                                        <div className="inner-content">
                                            <h4>Electronics</h4>
                                            <span>Best Trending Electronics Products</span>
                                        </div>
                                        <div className="hover-content">
                                            <div className="inner">
                                                <h4>Electronics</h4>
                                                <p>Up to 10% off | All Brand Electronics Products</p>
                                                <div className="main-border-button">
                                                    <HashLink to="/#electronics">Discover More</HashLink>
                                                </div>
                                            </div>
                                        </div>
                                        <img src={require('../assets/images/ele.jpg')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {
        
        data !=undefined && data.map((i) => {          
            return (
                <Homeproducts pid={i} name={i.replace("'","").replace(" ","")}/>
            )        
        })
    }
    
    <section className="section" id="social">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="section-heading">
                        <h2>Social Media</h2>
                        <span>The official Facebook page of Felix Shopping India. Follow @FelixShoppingNews for the latest news from Felix Shopping India. </span>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row images">
                <div className="col-2">
                    <a href="https://instagram.com" target="_blank">
                        <div className="thumb">
                            <div className="icon">
                                    <h6>Fashion</h6>
                                    <i className="fa fa-instagram"></i>
                            </div>
                            <img src={require('../assets/images/instagram-01.jpg')} alt="" />
                        </div>
                    </a>
                </div>
                <div className="col-2">
                <a href="https://instagram.com" target="_blank">
                        <div className="thumb">
                            <div className="icon">
                                    <h6>New</h6>
                                    <i className="fa fa-instagram"></i>
                            </div>
                            <img src={require('../assets/images/instagram-02.jpg')} alt="" />
                        </div>
                    </a>
                </div>
                <div className="col-2">
                <a href="https://instagram.com" target="_blank">
                    <div className="thumb">
                        <div className="icon">
                                <h6>Brand</h6>
                                <i className="fa fa-instagram"></i>
                        </div>
                        <img src={require('../assets/images/instagram-03.jpg')} alt="" />
                    </div>
                    </a>
                </div>
                <div className="col-2">
                <a href="https://instagram.com" target="_blank">
                    <div className="thumb">
                        <div className="icon">
                                <h6>Makeup</h6>
                                <i className="fa fa-instagram"></i>
                        </div>
                        <img src={require('../assets/images/instagram-04.jpg')} alt="" />
                    </div>
                </a>
                </div>
                <div className="col-2">
                <a href="https://instagram.com" target="_blank">
                    <div className="thumb">
                        <div className="icon">
                                <h6>Leather</h6>
                                <i className="fa fa-instagram"></i>
                        </div>
                        <img src={require('../assets/images/instagram-05.jpg')} alt="" />
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </section>
    
    <div className="subscribe">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="section-heading">
                        <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                        <span>Details to details is what makes Felixshop different from the other themes.</span>
                    </div>
                    <form id="subscribe" action="" method="get">
                        <div className="row">
                          <div className="col-lg-5">
                            <fieldset>
                              <input name="name" type="text" id="name" placeholder="Your Name" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-5">
                            <fieldset>
                              <input name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email Address" required=""/>
                            </fieldset>
                          </div>
                          <div className="col-lg-2">
                            <fieldset>
                              <button type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                            </fieldset>
                          </div>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>Store Location:<br/><span>Sunny Isles Beach, FL 33160, United States</span></li>
                                <li>Phone:<br/><span>010-020-0340</span></li>
                                <li>Office Location:<br/><span>North Miami Beach</span></li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>Work Hours:<br/><span>07:30 AM - 9:30 PM Daily</span></li>
                                <li>Email:<br/><span>info@company.com</span></li>
                                <li>Social Media:<br/><span><a href="#">Facebook</a>, <a href="#">Instagram</a>, <a href="#">Behance</a>, <a href="#">Linkedin</a></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}
