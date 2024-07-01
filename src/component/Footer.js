import React from 'react'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'


export default function Footer() {
const imgstyle = {
    height: '60px'
}
const logoHead = {
    marginLeft: '10px',
    display: 'inline-block'
}
  return (
    <>
     <footer>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <div className="first-item">
                        <div className="logo">
                            <h4 style={logoHead}>Felix Shopping</h4>
                        </div>
                        <ul>
                            <li><a href="#">907,Platinum Square, Vascon Weikfield Corporate Park Nagar Road, next to Hyatt Hotel, opp. WNS Global Services, Pune, Maharashtra 411014</a></li>
                            <li><a href="#">felixshopping@frlix.com</a></li>
                            <li><a href="#">085912 49419</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-4">
                    <h4>Shopping &amp; Categories</h4>
                    <ul>
                    
                    <li className="scroll-to-section"><HashLink exact to="/#mensclothing" activeClassName="active">Men's</HashLink></li>
                    <li className="scroll-to-section"><HashLink exact to="/#womensclothing" activeClassName="active">Women's</HashLink></li>
                    <li className="scroll-to-section"><HashLink exact to="/#electronics" activeClassName="active">Electronics</HashLink></li>
                    <li className="scroll-to-section"><HashLink exact to="/#jewelery" activeClassName="active">Jewelery</HashLink></li>
                    
                    <li className="scroll-to-section"><NavLink exact to="/cart" activeClassName="active">Cart</NavLink></li>
                    </ul>
                </div>
                <div className="col-lg-4">
                    <h4>Useful Links</h4>
                    <ul>
                    <li className="scroll-to-section"><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                    <li className="scroll-to-section"><NavLink exact to="/about" activeClassName="active">About Us</NavLink></li>
                    <li className="scroll-to-section"><NavLink exact to="/contact" activeClassName="active">Contact Us</NavLink></li>
                    </ul>
                </div>
               
                <div className="col-lg-12">
                    <div className="under-footer">
                        <p>Copyright © 2022 FelixShop Co., Ltd. All Rights Reserved. 
                        
                        <br/>Design: <a href="" target="_parent" >Vijay Sonawane</a></p>
                        <ul>
                            <li><a href="https://facebook.com" target="_blank"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://instagram.com" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com" target="_blank"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="https://linkedin.com" target="_blank"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}
