import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"

function Navbar() {
  const style={
    color:"white",
    textDecoration:"none"
  }
  return (
    <div className='navbar-container'>
        <nav className='navbar'>
            <ul className='nav-items'>
                <Link style={style} to={'/'}>Home</Link>
                <Link style={style} to={'/products'}>Products</Link>
                <Link style={style} to={'/cart'}>Cart</Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar