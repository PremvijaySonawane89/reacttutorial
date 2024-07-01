"use client"
import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CartItem from './CatItem';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarts } from './redux/Reducers/cartSlice';


export default function Cart() {
  const dispatch = useDispatch();
  //const carts = useSelector((state) => state.carts);
  const [cartprod, setCartProd] = useState('');
  const {data: carts, status: status, total: total} = useSelector((res) => res.cartlist);
  const rowcss = {
    paddingBottom: '30px',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }
  
  const handleStateChange = () => {
    dispatch(fetchCarts())
  }
  
  useEffect(() => {
    dispatch(fetchCarts())    
  }, []);
  return (
    <>
      <Header />
      <section className="section psec" id="products">
        <div className="container">
          <h2>Cart</h2>
          {carts ==null ? <h3>Cart is Empty! Add Product to Cart !!</h3> :
          
          
          
          carts.map((cart) => (  
            
                    
            <CartItem key={cart.id} cart={cart} onStateChange={handleStateChange} />
          ))
        
        
          }
          <div className="row" style={rowcss}>
            <h5>Total: ₹{total}</h5>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
