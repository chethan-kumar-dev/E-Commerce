import React from 'react'
import {useNavigate} from "react-router-dom"
import image from "../../assets/boxers.jpg"
import "./Total.css"
import {RxCross2} from "react-icons/rx"
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

function Total({cartDetails,closeModal}) {

  const navigate=useNavigate()
  const notify = () => {
      toast("Your order is successful");
      setTimeout(()=>{
        navigate("/")
      },1500)
  }
 
  let totalPrice = 0

  for(let obj in cartDetails){
    totalPrice+=cartDetails[obj].price
  }
  return (
    <div className='items-container'>
        <ToastContainer autoClose={2000} />
        <div className='items'>
            {cartDetails.map((value,index)=>{
                return <div className='item' key={index}>
                            <div>
                                <img src={value.image} width={50} height={50}/>
                            </div>
                            <div>
                                <h3>{value.category}</h3>
                                <p>Quantity : {value.count}</p>
                                <p>Price : {value.price}</p>
                            </div>
                        </div>
            })}
            <p><b>Total</b> : {totalPrice}</p>
            <button className='confirm-order-button' onClick={notify}>Order</button>
        </div>
        <span className='close-modal-cross' onClick={closeModal}><RxCross2/></span>
    </div>
  )
}

export default Total