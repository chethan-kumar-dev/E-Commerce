import React, { useEffect } from 'react'
import './Productcard.css'
import{AiFillStar} from "react-icons/ai"
import { addToCart } from '../../../Features/products/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'

function Productcard({id,image,category,price,rating,addedToCart}) {

  

  console.log(addedToCart)
  const dispatch = useDispatch()
  
  return (
    <div className='product'>
        <img src={image} alt=""></img>
        <h3>{category}</h3>
        <h2>${price}</h2>
        <p>{[...Array(Math.round(rating))].map((value,index)=>{
            return <AiFillStar key={index}/>
        })}</p>
        {addedToCart===true?<span>Added to cart</span>:<button onClick={()=>dispatch(addToCart({id,image,category,price,rating}))}>Add to cart</button>}
    </div>
  )
}

export default Productcard