import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SideBar from './Components/SideBar/SideBar'
import NavBar from './Components/NavBar/NavBar'
import Home from './Components/Home/Home'
import Account from './Components/Account/Account'
import Analysis from './Components/Analysis/Analysis'
import Products from './Components/Products/Products'
import Comments from './Components/Comments/Comments'
import Users from './Components/Users/Users'
import Orders from './Components/Orders/Orders'
import Discounts from './Components/Discounts/Discounts'
import './App.css'
export default function App() {
  return (
    <>
      <SideBar />
      <div className='main'>
        <NavBar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Account' element={<Account />} />
          <Route path='/Analysis' element={<Analysis />} />
          <Route path='/Products' element={<Products />} />
          <Route path='/Comments' element={<Comments />} />
          <Route path='/Users' element={<Users />} />
          <Route path='/Orders' element={<Orders />} />
          <Route path='/Discounts' element={<Discounts />} />
        </Routes>
        
      </div>

    </>
  )
}
