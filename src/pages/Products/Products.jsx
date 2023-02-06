import React, { useState,useEffect } from 'react'
import Productcard from './Productcard/Productcard'
import axios from 'axios'
import './Products.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../Features/products/ProductSlice'
import Loader from '../../components/Loader/Loader'

function Products() {
    
    const state=useSelector((state)=>state)
    const [productList,updateProdList]=useState([])
    const dispatch=useDispatch()
    useEffect(()=>{
        if(state.prod.productsList.length>0){
          console.log(state.prod.productsList)
          updateProdList(state.prod.productsList)
          return
        }
        console.log("second")
        dispatch(fetchProducts()).then((res)=>{
          console.log(state.prod.productsList)
          updateProdList(state.prod.productsList)
        })
      },[state.prod.productsList])

  return (
    <div className='products-container'>
        <div className='products'>
            {productList.length===0?<Loader/>:productList.map((value)=>{
                return <Productcard
                    key={value.id}
                    id={value.id}
                    image={value.image}
                    category={value.category}
                    price={value.price}
                    rating={value.rating.rate}
                    addedToCart={value.addedToCart}
                />
            })}
        </div>
    </div>
  )
}

export default Products