import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Products from './pages/Products/Products'

import { Routes, useNavigate ,Route} from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'


function App() {

  
  return (
   
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </div>
  )
}

export default App
