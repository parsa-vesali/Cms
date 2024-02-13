import React from 'react'
import { useRoutes } from "react-router-dom";
import SideBar from './Components/SideBar/SideBar'
import NavBar from './Components/NavBar/NavBar'
import routes from './Routes'
import './App.css'

export default function App() {
  let router = useRoutes(routes)
  return (
    <>
      <SideBar />
      <div className='main'>
        <NavBar />
        {router}
      </div>
    </>
  )
}
