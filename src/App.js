import React from 'react'
import SideBar from './Components/SideBar/SideBar'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
export default function App() {
  return (
    <>
      <SideBar />
      <div className='main'>
        <NavBar />
      </div>
    </>
  )
}
