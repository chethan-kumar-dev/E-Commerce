import React from 'react'
import "./Home.css"
import image from "../../assets/boxers.jpg"

function Home() {
  return (
    <div className='home'>
        <div className='heading'>
            <h1>We have millions of products</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora nihil provident saepe beatae a aut molestiae quae doloribus quia, quod mollitia temporibus, ut, laudantium totam perspiciatis facilis! Reiciendis, provident?</p>
            <div>
                <button>Check out</button>
            </div>
        </div>
        <div className='heading-image'>
            <img src={image} alt=""/>
        </div>
    </div>
  )
}

export default Home