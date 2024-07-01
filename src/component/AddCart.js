"use client"
import React, { useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProductsByID} from './redux/Reducers/productDetail'

function AddCart(props) {
    const dispatch = useDispatch()
    const {data: pddata, status: pstatus} = useSelector(res => res.pdetail)
    const { id } = useParams()    
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)
    const [count,setCount] = useState(1)
    const [btntxt,setBtnTxt] = useState('Add To Cart')
    const navigate = useNavigate()
    const withCSS = {
        width: '280px'
    }

    const addtocart = () => {
        if(btntxt == 'Go To Cart') {
            navigate("/cart");
        } else {
            fetch('https://fakestoreapi.com/carts',{method:"POST", headers: { 'Content-Type': 'application/json' }, body:JSON.stringify({userId:12345, date:'2024-06-30', products:[{productId:id,quantity:count}]})}).then(res=>res.json()).then(json=>console.log(json))
            setBtnTxt('Go To Cart')
            pstatus == 'idle' && [pddata].map((res) => {
                if(res.id == id){
                    
                    //console.log(localStorage.getItem('items'))
                    //
                    
                    let cartdet = {}
                    let cartarr = items;
                    console.log(cartarr);
                    if(cartarr != null && cartarr.length > 0) {
                        cartdet = { id: Date.now(), content: id, count: count,ptitle: res.title, img: res.image, price:res.price };
                        let flag = 0;
                        cartarr.map((res) => {
                            if(id == res.content) {
                                res.count = parseInt(res.count) + count
                                flag = 1
                            }
                            console.log('produts', res);
                        })
                        if(flag == 0) {
                            cartarr.push(cartdet)
                        }
                    } else {
                         cartdet = { id: Date.now(), content: id, count: count,ptitle: res.title, img: res.image,price:res.price  };
                         cartarr = [cartdet];
                       
                    }
                   
                    localStorage.setItem('items', JSON.stringify(cartarr))
                    //dispatch(addCart(cartdet))
                }
            })
            
            setBtnTxt('Go To Cart')

        }
    }


    useEffect(() => {
        window.scrollTo(0, 0)
        dispatch(fetchProductsByID(id));
        console.log(pddata)
        if(localStorage.getItem('items') != null) {
            setItems(JSON.parse(localStorage.getItem('items')))
            items.map((res)=> {
                if(res.content == id) {
                    setBtnTxt('Go To Cart')
                }
            })
        }
    }, []);
    return (
        <>
            <Header />
            <section className="section psec" id="product">
                <div className="container">
                    {console.log(pddata)}
                    {
                       
                       pstatus == 'idle' && [pddata].map((res) => {
                            if(res.id == id){
                                
                                return (
                                
                                <>
                                
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="left-images">

                                                    <img src={res.image} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="right-content">
                                                    <h4 style={withCSS}>{res.title}</h4>
                                                    <span className="price">₹{res.price}</span>
                                                    <br/>
                                                    <ul className="stars">
                                    
                                                        { res.rating.rate > 1 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
                                                        { res.rating.rate > 2 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
                                                        { res.rating.rate > 3 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
                                                        { res.rating.rate > 4 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
                                                        { res.rating.rate > 5 ? <li><i className="fa fa-star checked"></i></li> : <li><i className="fa fa-star"></i></li> }
                                                    </ul>
                                                    <span>{res.description}</span>
                                                    <div className="quote">
                                                        <i className="fa fa-quote-left"></i><p>{res.description}</p>
                                                    </div>
                                                    <div className="quantity-content">
                                                        <div className="left-content">
                                                            <h6>No. of Orders</h6>
                                                        </div>
                                                        <div className="right-content">
                                                            <div className="quantity buttons_added">
                                                                <input type="button" value="-" className="minus" onClick={event => { setCount( (parseInt(count) - 1 <= 1)? 1 : parseInt(count) - 1) }} />
                                                                
                                                                <input type="number" step="1" min="1" max="" name="quantity" value={count} title="Qty" className="input-text qty text" size="2" pattern="" inputMode="" onChange={event => { setCount(( event.target.value != '' && event.target.value != 0) ? event.target.value : 1) }} />
                                                                
                                                                <input type="button" value="+" className="plus" onClick={event => { setCount(parseInt(count) + 1) }}/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="total">
                                                        <h4>Total: ₹{ count * res.price}</h4>
                                                        <div className="main-border-button"><a onClick={(e) => addtocart()}>{btntxt}</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            }
                        })
                    }
                </div>
            </section>

            <Footer />
        </>
    )
}

export default AddCart;
