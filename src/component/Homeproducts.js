import React, { useEffect, useState } from 'react'
import OwlCarousel from "react-owl-carousel";
import Pitems from './Pitems';
import { useDispatch, useSelector } from 'react-redux';
import {fetchProducts} from './redux/Reducers/productList'

export default function Homeproducts(note) {    
    const dispatch = useDispatch();
    const {data: pddata, status: pstatus} = useSelector(res => res.product);
    const [pid, setPid] = useState(note.pid);
    const [name, setName] = useState(note.name);
    const [divid, setDivid] = useState([])

    useEffect(() => {
        dispatch(fetchProducts());
    }, []);
   
  return (
    <>
        <section className="section psec" id={name} >
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="section-heading">
                            <h2>{pid}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="men-item-carousel">
                            <OwlCarousel className="owl-theme owl-men-item owl-carousel" nav>
                                {
                                    pddata.map((j) => {
                                        return (
                                            <Pitems img={j.image} title={j.title} price={j.price} pid={j.id} rating={j.rating}/>
                                        )
                                    })
                                }
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
