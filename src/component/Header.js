import React from 'react'
import logo from '../assets/images/logo1.png';
import { Link, NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link';


export default function Header() {
const imgstyle = {
    height: '60px'
}
const logoHead = {
    color: '#4d4d4d',
    marginLeft: '10px',
    display: 'inline-block'
}
  return (
    <>
    <header className="header-area header-sticky">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <nav className="main-nav">
                        <Link to="/" className="logo">
                            <img src={logo} style={imgstyle} />
                            <span style={logoHead}>Felix Shopping</span>
                        </Link>
                        <ul className="nav" id="nav">
                       
                            <li className="scroll-to-section"><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
                            <li class="submenu">
                                <li className="scroll-to-section"><NavLink exact to="/#" activeClassName="active">Shopping</NavLink></li>
                                <ul>
                                <li className="scroll-to-section"><HashLink exact to="/#mensclothing" activeClassName="active">Men's</HashLink></li>
                                <li className="scroll-to-section"><HashLink exact to="/#womensclothing" activeClassName="active">Women's</HashLink></li>
                                <li className="scroll-to-section"><HashLink exact to="/#electronics" activeClassName="active">Electronics</HashLink></li>
                                <li className="scroll-to-section"><HashLink exact to="/#jewelery" activeClassName="active">Jewelery</HashLink></li>
                                </ul>
                            </li>
                            
                            <li className="scroll-to-section"><NavLink exact to="/about" activeClassName="active">About Us</NavLink></li>
                            <li className="scroll-to-section"><NavLink exact to="/contact" activeClassName="active">Contact Us</NavLink></li>
                            <li className="scroll-to-section"><NavLink exact to="/cart" activeClassName="active">Cart</NavLink></li>
                        </ul>        
                        <a className='menu-trigger'>
                            <span>Menu</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
    </>
  )
}
