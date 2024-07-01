import React, { useState } from 'react'
import routes from './routes'
import { Link, NavLink, Route, Routes } from 'react-router-dom'

export default function Pitems(pitem) {
    const [pid, setId] = useState(pitem.pid);
    const [img, setImg] = useState(pitem.img);
    const [title, setTitle] = useState(pitem.title);
    const [price, setPrice] = useState(pitem.price);
    const [rating, setRating] = useState(pitem.rating);
    const imgstyle = {
        width: '250px'
    }
  return (
    <>
    <div className="item" id={pid}>
        <div className="thumb">
            <div className="hover-content felix">
                <ul>
                    <li><Link to={'/Product/' + pid}><i className="fa fa-shopping-cart"></i></Link></li>
                </ul>
            </div>
            <Link to={'/Product/' + pid}><img style={imgstyle} src={img} alt="" /></Link>
        </div>
        <div className="down-content">
            <h4>{title.length > 15 ? title.substring(0, 15) + '...' : title }</h4>
            <span>₹{price}</span>
            <ul className="stars">
            { rating.rate > 1 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
            { rating.rate > 2 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
            { rating.rate > 3 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
            { rating.rate > 4 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
            { rating.rate > 5 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
            </ul>
        </div>
    </div>
    </>
  )
}
