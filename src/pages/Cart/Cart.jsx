import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from '../../Features/products/ProductSlice'
import {AiFillDelete} from "react-icons/ai"
import Total from '../Total/Total'
import { removeItem } from '../../Features/products/ProductSlice'


import "./Cart.css"

function Cart() {
  
  const [isTotalModalOpen,updateModalStatusOpen]=useState(false)
  const state=useSelector((state)=>state)   
  const dispatch=useDispatch(); 
  return (
    <div className='cart-products-container'>
      {state.prod.productsInCart.length===0?<p style={{textAlign:"center"}}>Cart is empty</p>:<div className='cart-products'>
        {state.prod.productsInCart.map((value)=>{
            return <div key={value.id} className="cart-product">
              <img src={value.image} alt="" width={100} height={100}/>
              <p><b>Price : {value.price.toFixed(2)}</b></p>
              <div className='count-handle'>
                <button onClick={()=>{dispatch(increment(value))}} >+</button>
                <p>count {value.count}</p>
                <button onClick={()=>{dispatch(decrement(value))}} >-</button>
              </div>
              <span><AiFillDelete style={{color:"red",fontSize:"20px",cursor:"pointer"}} onClick={()=>dispatch(removeItem(value.id))}/></span>
            </div>
        })}
      </div>}
      
      {state.prod.productsInCart.length>0?<button className='proceed-button' onClick={()=>updateModalStatusOpen(true)}>Proceed</button>:null}
      {isTotalModalOpen?<Total cartDetails={state.prod.productsInCart} closeModal={()=>updateModalStatusOpen(false)}/>:null}
    </div>
  )
}

export default Cart