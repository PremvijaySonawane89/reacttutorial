"use client"
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function CartItem({ cart }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newContent, setNewContent] = useState([cart]);
    const dispatch = useDispatch();
    console.log(newContent);
    const handleDelete = (id) => {  
        setNewContent([])      
        let cartData = JSON.parse(localStorage.getItem('items'));
        cartData = cartData.filter((res) => res.id != id)
        localStorage.setItem('items', JSON.stringify(cartData))
        setNewContent(cartData)
        window.location.reload();
    }

    const rowcss = {
        borderBottom: '1px solid rgb(235 230 230)',
        paddingBottom: '30px',
        paddingTop: '30px',
        display: 'flex',
	    flexDirection: 'row',
	    alignItems: 'center'
    }
    const imgcss = {
      width:'50px',
      borderRadius: '5px'
    }
    return (
        <>
            {
                newContent.map((res) =>
                    <div className="row" style={rowcss} id="1719753071662">
                        <div className="col-lg-1">
                        <img src={res.img} alt="" style={imgcss}/>
                        </div>
                        <div className="col-lg-4">
                            {res.ptitle}
                        </div>
                        <div className="col-lg-1">₹{res.price*res.count}</div>
                        <div className="col-lg-1"><img src={require('../assets/images/delete.png')} onClick={(e)=> { handleDelete(res.id) }}  alt=""/></div>
                    </div>
                )

            }

        </>
    )

}
export default CartItem;